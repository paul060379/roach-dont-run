export const BOSS_TYPES = {
  king: { name: 'KING ROACH', icon: '👑', hp: 720, seconds: 22, reward: 350 },
  flying: { name: 'FLYING KING', icon: '🪽', hp: 600, seconds: 22, reward: 450 },
  mama: { name: 'MAMA ROACH', icon: '🎀', hp: 660, seconds: 24, reward: 550 },
  golden: { name: 'GOLDEN KING', icon: '✨', hp: 360, seconds: 15, reward: 1200 },
};

// All boss time is advanced by the game clock. Pausing never leaves timers running.
export function createBossSystem({ arena, reduced, text, record, sound, beforeHit, canPointerHit = () => true, onHit, onBaby, onDone, onCancel = () => {} }) {
  const layer = document.getElementById('boss-layer');
  const target = document.getElementById('boss-target');
  const sprite = target.querySelector('.boss-sprite');
  const motion = target.querySelector('.boss-motion');
  const hud = document.getElementById('boss-hud');
  const hp = document.getElementById('boss-hp');
  const delayed = document.getElementById('boss-hp-delayed');
  const banner = document.getElementById('boss-banner');
  const message = document.getElementById('boss-message');
  const number = document.getElementById('boss-countdown');
  const caption = document.getElementById('boss-caption');
  let current = null;
  let paused = false;
  let hitAnimation = null;
  const animations = new Set();
  // One small image per boss. Each decoded Image stays alive so the art is ready when the fight starts.
  const art = {};
  for (const kind of Object.keys(BOSS_TYPES)) {
    art[kind] = { image: new Image(), url: new URL(`assets/boss-${kind}-v1.webp`, import.meta.url).href, ready: false, loading: false, retryAfter: 0 };
  }
  async function prepareArt(kind) {
    const a = art[kind];
    if (a.ready || a.loading || performance.now() < a.retryAfter) return;
    a.loading = true;
    try {
      a.image.src = a.url;
      await a.image.decode();
      if (!a.image.naturalWidth) throw new Error('Empty boss image');
      a.ready = true;
    } catch {
      a.retryAfter = performance.now() + 2000;
      a.image.removeAttribute('src');
    } finally {
      a.loading = false;
    }
  }
  for (const kind of Object.keys(BOSS_TYPES)) prepareArt(kind);

  function animate(element, frames, options) {
    const animation = element.animate(frames, options);
    animations.add(animation);
    animation.finished.catch(() => {}).finally(() => {
      if (options.fill !== 'forwards') animations.delete(animation);
    });
    return animation;
  }

  function clearAnimations() {
    // A canceled, retained exit must never be played again on resume.
    for (const animation of animations) animation.cancel();
    animations.clear();
    hitAnimation = null;
    sprite.style.opacity = '1';
    sprite.style.transform = '';
    sprite.style.filter = '';
  }

  function place() {
    if (!current) return;
    const w = arena.clientWidth, h = arena.clientHeight;
    const size = Math.min(w * .74, h * .72);
    target.style.width = `${size}px`;
    target.style.height = `${size}px`;
    const half = size / 2;
    const x = Math.max(half + 6, Math.min(w - half - 6, w * current.x));
    const y = Math.max(half + 90, Math.min(h - half - 15, h * .65));
    target.style.left = `${x}px`;
    target.style.top = `${Math.min(h - half - 8, y)}px`;
  }

  function updateLabels() {
    if (!current) return;
    const spec = BOSS_TYPES[current.kind];
    target.setAttribute('aria-label', `${text('bossHit')} · ${spec.name}`);
    document.getElementById('boss-name').textContent = `${spec.icon} ${spec.name}`;
    document.getElementById('boss-clock-note').textContent = text('sessionFrozen');
    document.getElementById('boss-health').setAttribute('aria-label', text('bossHealth'));
    caption.textContent = current.phase === 'outcome'
      ? (current.won ? (current.first ? text('bossFirst') : text('bossVictoryNote')) : text('bossEscapeNote'))
      : text('sessionFrozen');
    message.textContent = current.phase === 'outcome'
      ? text(current.won ? 'bossVictory' : 'bossEscaped')
      : text('bossWarning');
    if (current.phase === 'outcome') {
      number.textContent = current.won ? `+${spec.reward.toLocaleString()} CP` : '💨';
      document.getElementById('boss-outcome-name').textContent = spec.name;
    }
  }

  function render() {
    if (!current) return;
    const ratio = current.hp / BOSS_TYPES[current.kind].hp;
    hp.style.transform = `scaleX(${ratio})`;
    delayed.style.transform = `scaleX(${current.trail})`;
    document.getElementById('boss-health').setAttribute('aria-valuenow', String(current.hp));
    document.getElementById('boss-time').textContent = `⏱ ${Math.max(0, current.left).toFixed(1)}`;
    document.getElementById('boss-hp-number').textContent = `${current.hp} / ${BOSS_TYPES[current.kind].hp}`;
    document.getElementById('boss-mood').textContent = ratio <= .1 ? '😭' : ratio <= .25 ? '😵‍💫' : ratio <= .5 ? '😨' : ratio <= .75 ? '😠' : '';
    target.classList.toggle('boss-desperate', ratio <= .25);
    place();
  }

  function enter(kind) {
    if (current) return;
    clearAnimations();
    prepareArt(kind);
    sprite.style.backgroundImage = `url("${art[kind].url}")`;
    const spec = BOSS_TYPES[kind];
    const first = record[kind].encounters === 0;
    record[kind].encounters++;
    current = { kind, phase: 'entrance', age: 0, left: spec.seconds, hp: spec.hp, trail: 1,
      delay: 0, beat: '', move: 2.5, x: .5, hits: 0, first, won: false };
    layer.hidden = false;
    layer.classList.remove('is-paused');
    arena.classList.add('boss-active');
    // Rendered but transparent during the countdown, so the art is painted before the fight.
    target.className = `boss-target boss-${kind} boss-staging`;
    target.disabled = true;
    target.hidden = false;
    sprite.style.opacity = '';
    sprite.style.transform = '';
    hud.hidden = true;
    banner.hidden = false;
    banner.className = 'boss-banner';
    number.textContent = '';
    document.getElementById('boss-outcome-name').textContent = '';
    document.getElementById('boss-health').setAttribute('aria-valuemax', String(spec.hp));
    paused = false;
    updateLabels();
    render();
  }

  function settle(won) {
    if (!current || current.phase !== 'fight') return;
    const spec = BOSS_TYPES[current.kind];
    current.won = won;
    current.phase = won ? 'hitstop' : 'exit';
    current.age = 0;
    target.disabled = true;
    hitAnimation?.cancel();
    const stats = record[current.kind];
    if (won) {
      stats.defeated++;
      const seconds = spec.seconds - current.left;
      stats.fastest = stats.fastest === null ? seconds : Math.min(stats.fastest, seconds);
    } else stats.escaped++;
    onDone({ kind: current.kind, won, reward: won ? spec.reward : 0, seconds: spec.seconds - current.left });
    if (!won) {
      sound('escape');
      animate(sprite, [{ transform: 'translateX(0)', opacity: 1 },
        { transform: reduced ? 'translateX(0)' : 'translateX(70%) rotate(12deg)', opacity: 0 }], { duration: 450, fill: 'forwards' });
    }
    render();
  }

  function outcome() {
    current.phase = 'outcome';
    current.age = 0;
    target.hidden = true;
    hud.hidden = true;
    banner.hidden = false;
    banner.className = 'boss-banner boss-outcome';
    updateLabels();
  }

  function tick(elapsed) {
    if (!current || paused) return;
    current.age += elapsed;
    if (current.phase === 'entrance') {
      const beat = current.age < .5 ? '' : current.age < 1.3 ? '3' : current.age < 2.1 ? '2' : current.age < 2.9 ? '1' : 'BOSS!';
      if (beat !== current.beat) {
        current.beat = beat;
        number.textContent = beat;
        if (beat) sound(beat === 'BOSS!' ? 'roar' : 'tick', current.kind, Number(beat));
        if (!reduced) animate(number, [{ transform: 'scale(2.5)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 350 });
      }
      if (current.age >= 3.5 && !art[current.kind].ready) {
        // Hold on "BOSS!" while the art finishes loading; give up quietly rather than fight an invisible boss.
        if (current.age >= 9.5) { cancel(); return; }
        prepareArt(current.kind);
      } else if (current.age >= 3.5) {
        current.phase = 'fight'; current.age = 0;
        target.classList.remove('boss-staging'); target.disabled = false; hud.hidden = false; banner.hidden = true;
        if (!reduced) animate(sprite, [{ transform: 'scale(.25) translateY(-40px)' }, { transform: 'scale(1)' }], { duration: 300 });
        target.focus({ preventScroll: true });
      }
    } else if (current.phase === 'fight') {
      current.left = Math.max(0, current.left - elapsed);
      current.delay = Math.max(0, current.delay - elapsed);
      if (current.delay === 0) current.trail = Math.max(current.hp / BOSS_TYPES[current.kind].hp, current.trail - elapsed * .55);
      current.move -= elapsed;
      if (!reduced && current.move <= 0) {
        current.move = current.kind === 'flying' ? 2.2 : 1.6;
        if (current.kind === 'flying') {
          current.x = .34 + Math.random() * .32;
          animate(motion, [{ transform: 'translateY(0)' }, { transform: 'translateY(-20px)', offset: .5 }, { transform: 'translateY(0)' }], { duration: 450 });
        } else if (current.hp < BOSS_TYPES[current.kind].hp * .25) current.x = .45 + Math.random() * .1;
      }
      if (current.left === 0) settle(false);
    } else if (current.phase === 'hitstop' && current.age >= .12) {
      current.phase = 'exit'; current.age = 0;
      sound('win');
      animate(sprite, reduced ? [{ opacity: 1 }, { opacity: 0 }] : [
        { transform: 'scale(1)' }, { transform: 'scale(1.17)', offset: .3 },
        { transform: 'scale(1.3,.13)', opacity: 1, offset: .8 }, { transform: 'scale(1.3,.1)', opacity: 0 }], { duration: 450, fill: 'forwards' });
      if (!reduced) animate(arena, [{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 180 });
    } else if (current.phase === 'exit' && current.age >= .5) {
      outcome();
    } else if (current.phase === 'outcome' && current.age >= 2.5) {
      reset();
      return;
    }
    render();
  }

  function hit(clientX, clientY) {
    if (!current || current.phase !== 'fight' || paused) return;
    beforeHit();
    // Advancing the clock can time out the fight; a late click cannot earn a kill.
    if (!current || current.phase !== 'fight' || paused) return;
    const damage = onHit(clientX, clientY);
    sound('hit', current.kind);
    current.hp = Math.max(0, current.hp - damage);
    current.delay = .22;
    current.hits++;
    hitAnimation?.cancel();
    hitAnimation = animate(sprite, reduced ? [{ opacity: .65 }, { opacity: 1 }] : [
      { transform: 'scale(1)', filter: 'brightness(1.8)' },
      { transform: 'scale(.93,.9) rotate(-3deg)', offset: .2 },
      { transform: 'scale(1.04) rotate(2deg)', offset: .6 },
      { transform: 'scale(1)', filter: 'brightness(1)' }], { duration: 150 });
    if (current.hp === 0) settle(true);
    else if (current.kind === 'mama' && current.hits % 7 === 0) onBaby();
    render();
  }

  target.addEventListener('pointerdown', e => {
    if ((e.pointerType === 'mouse' && e.button !== 0) || !canPointerHit()) return;
    e.preventDefault(); hit(e.clientX, e.clientY);
  });
  target.addEventListener('click', e => {
    if (e.detail === 0) { const r = target.getBoundingClientRect(); hit(r.left + r.width / 2, r.top + r.height / 2); }
  });
  window.addEventListener('resize', place);

  function cancel() {
    record[current.kind].encounters--;
    reset();
    onCancel();
  }

  function reset() {
    clearAnimations();
    current = null; paused = false;
    layer.hidden = true; arena.classList.remove('boss-active');
  }
  return {
    get active() { return current !== null; },
    get fighting() { return current?.phase === 'fight'; },
    enter, tick, reset, localize: updateLabels,
    strike: hit,
    near(x,y,radius) {
      if(current?.phase!=='fight')return false;
      const rect=target.getBoundingClientRect();
      return Math.hypot(x-Math.max(rect.left,Math.min(rect.right,x)), y-Math.max(rect.top,Math.min(rect.bottom,y)))<=radius;
    },
    pause(value) {
      paused = value;
      layer.classList.toggle('is-paused', value);
      for (const animation of animations) {
        if (value && animation.playState === 'running') animation.pause();
        else if (!value && animation.playState === 'paused') animation.play();
      }
    },
    focus() { if (current?.phase === 'fight') target.focus({ preventScroll: true }); },
  };
}
