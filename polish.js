const PLAY_URL = 'https://paul060379.github.io/roach-dont-run/';
const REPO_URL = 'https://github.com/paul060379/roach-dont-run';
const words = {
  zh: {settings:'聲音與手感',music:'背景音樂',sound:'打擊音效',vibration:'輕震動',unsupported:'此瀏覽器不支援震動',close:'收起來',card:'這局值得炫耀',share:'分享戰績',download:'下載圖片',copy:'複製分享連結',copied:'網址已複製！',failed:'無法分享，請下載圖片。',loading:'製作戰績卡中…',hits:'擊倒小強',boss:'擊敗 Boss',combo:'最高連擊',cp:'本局 CP',challenge:'你打得贏我嗎？',title:'小強！別跑',legend:'拖鞋戰神',rookie:'廚房實習生',hunter:'居家除蟲高手',gold:'我遇到黃金小強王！',caught:'擊敗',escaped:'牠逃走了，下次再戰！',egg:'這隻是不是偷跑出來？'},
  en: {settings:'Sound & feel',music:'Background music',sound:'Hit sounds',vibration:'Light vibration',unsupported:'Vibration unavailable in this browser',close:'Close',card:'A round worth sharing',share:'Share score',download:'Save image',copy:'Copy share links',copied:'Link copied!',failed:'Sharing unavailable. Save the image instead.',loading:'Making your scorecard…',hits:'ROACHES',boss:'BOSSES BEATEN',combo:'BEST COMBO',cp:'CP EARNED',challenge:'Can you beat this?',title:'Roach! Don’t Run',legend:'SLIPPER LEGEND',rookie:'KITCHEN ROOKIE',hunter:'PEST PATROL PRO',gold:'I met the GOLDEN KING!',caught:'Defeated in',escaped:'It escaped. Next time!',egg:'Did this one sneak out?'}
};

export function createPolish({snapshot,pause,lobbyHit,getSound,setSound}) {
  let prefs={};try{prefs=JSON.parse(localStorage.getItem('roach-polish-settings')||'{}')||{}}catch{}
  let music=prefs.music!==false,vibration=prefs.vibration===true;
  const save=()=>{try{localStorage.setItem('roach-polish-settings',JSON.stringify({music,vibration}))}catch{}};
  const button=(text,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.addEventListener('click',fn);return b};
  const settings=document.createElement('dialog');settings.className='polish-dialog';settings.setAttribute('aria-labelledby','settings-title');
  settings.innerHTML='<div class="polish-heading"><h2 id="settings-title"></h2></div><div class="settings-rows"></div><p class="settings-note"></p>';
  document.body.append(settings);
  const rows=settings.querySelector('.settings-rows');
  const sfx=document.getElementById('sound');
  const gear=button('⚙',()=>{pause();sync();settings.showModal()});gear.className='icon';sfx.replaceWith(gear);
  function row(control){const label=document.createElement('label');const name=document.createElement('span');label.append(name,control);rows.append(label);return name}
  const soundToggle=document.createElement('input');soundToggle.type='checkbox';const soundLabel=row(soundToggle);
  const musicToggle=document.createElement('input');musicToggle.type='checkbox';const musicLabel=row(musicToggle);
  const vibrationToggle=document.createElement('input');vibrationToggle.type='checkbox';vibrationToggle.disabled=!navigator.vibrate;const vibrationLabel=row(vibrationToggle);
  vibrationLabel.parentElement.hidden=!navigator.vibrate;
  soundToggle.addEventListener('change',()=>setSound(soundToggle.checked));
  musicToggle.addEventListener('change',()=>{music=musicToggle.checked;save();unlock();sync()});
  vibrationToggle.addEventListener('change',()=>{vibration=vibrationToggle.checked;save();if(vibration)navigator.vibrate?.(15)});
  const closeSettings=button('',()=>settings.close());settings.append(closeSettings);
  const repo=document.createElement('a');repo.href=REPO_URL;repo.target='_blank';repo.rel='noopener';repo.textContent='GitHub · Made by Paul';settings.append(repo);

  const shareButton=button('',()=>openCard());shareButton.className='share-score secondary';shareButton.hidden=true;document.getElementById('start').after(shareButton);
  const dialog=document.createElement('dialog');dialog.className='polish-dialog score-dialog';dialog.setAttribute('aria-labelledby','score-title');
  dialog.innerHTML='<h2 id="score-title"></h2><p role="status"></p><img alt=""><div class="score-actions"></div>';
  document.body.append(dialog);
  const status=dialog.querySelector('p'),preview=dialog.querySelector('img'),actions=dialog.querySelector('.score-actions');
  let cardFile=null,cardURL=null,cardGeneration=0;
  const nativeShare=button('',async()=>{
    if(!cardFile)return;
    const t=words[snapshot().lang];
    try{await navigator.share({files:[cardFile],title:t.title,text:`${t.challenge}\n${PLAY_URL}\nGitHub: ${REPO_URL}`})}
    catch(e){if(e.name!=='AbortError')status.textContent=t.failed}
  });
  const download=document.createElement('a');download.download='roach-score.png';download.className='download-card';
  const copy=button('',async()=>{const t=words[snapshot().lang];try{await navigator.clipboard.writeText(`${t.challenge}\n${PLAY_URL}\nGitHub: ${REPO_URL}`);status.textContent=t.copied}catch{status.textContent=`${PLAY_URL} · GitHub: ${REPO_URL}`}});
  const closeCard=button('',()=>dialog.close());actions.append(nativeShare,download,copy,closeCard);
  const sourceLink=document.createElement('a');sourceLink.href=REPO_URL;sourceLink.target='_blank';sourceLink.rel='noopener';sourceLink.textContent='GitHub · Made by Paul';dialog.append(sourceLink);
  dialog.addEventListener('close',()=>{cardGeneration++;if(cardURL)URL.revokeObjectURL(cardURL);cardURL=null;cardFile=null;preview.removeAttribute('src');download.removeAttribute('href')});
  async function openCard(){
    const s=snapshot();if(s.state!=='ended')return;
    const t=words[s.lang],generation=++cardGeneration;
    sync();status.textContent=t.loading;nativeShare.hidden=true;download.hidden=true;preview.hidden=true;dialog.showModal();
    try{
      const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=630;
      const c=canvas.getContext('2d');
      c.fillStyle='#fff2dc';c.fillRect(0,0,1200,630);
      c.strokeStyle='#80593e';c.lineWidth=7;c.strokeRect(24,24,1152,582);
      c.fillStyle='#ead0a9';c.fillRect(48,460,1104,122);
      c.fillStyle='#62402f';c.font='bold 48px system-ui';c.fillText(t.title,65,106);
      c.font='24px system-ui';c.fillText(t.card,68,150);
      const sprite=new Image();sprite.src=new URL('assets/characters-v2.png',import.meta.url).href;
      try{await sprite.decode();c.drawImage(sprite,s.golden?sprite.width/2:0,s.golden?sprite.height/2:0,sprite.width/2,sprite.height/2,880,55,240,240)}catch{}
      const entries=[[t.hits,s.hits],[t.boss,s.bossKills],[t.combo,s.best],[t.cp,s.cp]];
      entries.forEach(([label,value],i)=>{const x=70+i*275;c.fillStyle='#927253';c.font='19px system-ui';c.fillText(label,x,330);c.fillStyle='#62402f';c.font='bold 57px system-ui';c.fillText(Number(value).toLocaleString(),x,406)});
      c.font='bold 27px system-ui';c.fillText(s.golden?t.gold:s.best>=50?t.legend:s.hits>=40?t.hunter:t.rookie,70,221);
      c.font='22px system-ui';c.fillText(s.golden?(s.golden.won?`${t.caught} ${s.golden.seconds.toFixed(2)}s`:t.escaped):t.challenge,70,262);
      c.font='bold 24px system-ui';c.fillText(t.challenge,70,503);c.font='20px system-ui';c.fillText(PLAY_URL,70,539);c.font='16px system-ui';c.fillText('Made by Paul',70,570);
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(!blob)throw new Error('No image');if(generation!==cardGeneration)return;
      cardFile=new File([blob],'roach-score.png',{type:'image/png'});cardURL=URL.createObjectURL(blob);preview.src=cardURL;preview.alt=`${t.card}: ${s.hits} / ${s.bossKills} / ${s.best} / ${s.cp}`;preview.hidden=false;
      download.href=cardURL;download.hidden=false;nativeShare.hidden=!(navigator.share&&navigator.canShare?.({files:[cardFile]}));status.textContent='';
    }catch{if(generation===cardGeneration)status.textContent=t.failed}
  }

  // Original, quiet synth ostinatos: no network audio and no autoplay.
  let audio=null,mode='',step=0,nextNote=0;const voices=new Set();
  function unlock(){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();if(audio.state!=='running')audio.resume().catch(()=>{})}catch{}}
  document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
  function stop(){for(const o of voices){try{o.stop()}catch{}}voices.clear()}
  function note(midi,at,duration,volume,type='sine'){
    const o=audio.createOscillator(),g=audio.createGain();o.type=type;o.frequency.value=440*2**((midi-69)/12);
    g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(volume,at+.008);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
    o.connect(g);g.connect(audio.destination);voices.add(o);o.onended=()=>{voices.delete(o);o.disconnect();g.disconnect()};o.start(at);o.stop(at+duration+.02);
  }
  function musicTick(s){
    const desired=music&&s.state==='playing'&&!document.hidden?(s.bossActive?(s.bossFighting?'boss':''):'kitchen'):'';
    if(mode!==desired){stop();mode=desired;step=0;nextNote=audio?.currentTime||0}
    if(!mode||!audio||audio.state!=='running')return;
    if(nextNote<audio.currentTime)nextNote=audio.currentTime;
    while(nextNote<audio.currentTime+.12){
      const tune=mode==='boss'?[72,75,79,75,74,77,81,77,72,75,79,82,81,77,74,71]:[72,76,79,76,74,77,81,77,76,79,83,79,74,77,79,71];
      note(tune[step%16],nextNote,.13,.032,'triangle');
      if(step%4===0)note(mode==='boss'?48+(step%8?5:0):[48,53,55,55][Math.floor(step/4)%4],nextNote,.22,.05);
      step++;nextNote+=60/(mode==='boss'?150:136)/2;
    }
  }
  let lastVibration=0;
  function hit(){if(vibration&&navigator.vibrate&&performance.now()-lastVibration>70){lastVibration=performance.now();navigator.vibrate(8)}}
  const egg=button('',()=>{if(snapshot().state!=='ready')return;lobbyHit();hit();if(!matchMedia('(prefers-reduced-motion:reduce)').matches)egg.animate([{transform:'scale(.8) rotate(-12deg)'},{transform:'scale(1)'}],{duration:180})});
  egg.className='lobby-roach';egg.innerHTML='<span class="sprite" aria-hidden="true"></span>';document.getElementById('arena').append(egg);
  let previousLanguage='';
  function sync(){
    const s=snapshot(),t=words[s.lang];shareButton.hidden=s.state!=='ended';egg.hidden=s.state!=='ready';
    if(previousLanguage!==s.lang){previousLanguage=s.lang;gear.setAttribute('aria-label',t.settings);settings.querySelector('h2').textContent=t.settings;soundLabel.textContent=t.sound;musicLabel.textContent=t.music;vibrationLabel.textContent=t.vibration;settings.querySelector('.settings-note').textContent=navigator.vibrate?'':t.unsupported;closeSettings.textContent=t.close;shareButton.textContent=t.share;dialog.querySelector('h2').textContent=t.card;nativeShare.textContent=t.share;download.textContent=t.download;copy.textContent=t.copy;closeCard.textContent=t.close;egg.setAttribute('aria-label',t.egg)}
    soundToggle.checked=getSound();musicToggle.checked=music;vibrationToggle.checked=vibration;musicTick(s);
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();mode=''}});
  window.addEventListener('blur',()=>{stop();mode=''});
  setInterval(sync,80);sync();
  return {hit,sync};
}
