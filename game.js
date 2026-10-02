import { createMetaUI, TOOLS, ACHIEVEMENTS, SCENES, SCENE_SPECIES } from './meta.js?v=dialogfocus1';
import { createBossSystem, BOSS_TYPES } from './boss.js?v=bosssound1';
import { createPolish } from './polish.js?v=share2';
const translations = {
zh:{title:'小強！別跑',location:'阿嬤家・廚房',slogan:'看到就<span>啪。</span>',subtitle:'今天的壓力，就交給這雙拖鞋。',stamp1:'生活太難',stamp2:'打牠很簡單',hits:'命中次數',combo:'連擊',best:'最高連擊',room:'🏠 廚房出沒中',mode:'無限練習・沒有倒數',ready:'拖鞋準備好了嗎？',instructions:'點小強，連續點，壓力通通啪掉。',start:'🩴 開始除蟲',input:'滑鼠點擊 / 手指輕點，都可以。',floor:'小心，牠只是長得可愛。',weapon:'阿嬤的拖鞋',weaponNote:'傳說每個台灣家庭都有一雙。',pause:'休息一下',hint:'一隻小強，一點小快樂。',prototype:'手感試玩版 · 先啪再說',resume:'🩴 繼續啪',rest:'休息一下，牠等你。',restNote:'連擊暫停，準備好再回來。',target:'啪小強',cheers:['手速有點東西！','牠跟你有仇嗎？','拖鞋戰神！'],slap:'啪！'},
en:{title:'Roach! Don’t Run',location:'GRANDMA’S KITCHEN',slogan:'See it? <span>Slap it.</span>',subtitle:'Let your slippers handle the stress today.',stamp1:'Life is hard.',stamp2:'Slapping is easy.',hits:'HITS',combo:'COMBO',best:'BEST COMBO',room:'🏠 Kitchen patrol',mode:'FREE PLAY · NO TIMER',ready:'Slippers at the ready?',instructions:'Tap the little roach. Keep going. Feel better.',start:'🩴 Let’s slap',input:'Click with a mouse or tap with a finger.',floor:'Don’t be fooled by that cute face.',weapon:'Grandma’s slipper',weaponNote:'A legend in every Taiwanese home.',pause:'Take a break',hint:'One little roach. One little joy.',prototype:'Feel prototype · Just slap',resume:'🩴 Keep slapping',rest:'Take a breather.',restNote:'Your combo is paused. Come back when ready.',target:'Slap the roach',cheers:['NICE HANDS!','Something personal?','SLIPPER LEGEND!'],slap:'SLAP!'}
};
Object.assign(translations.zh,{mode:'90 秒・隨機除蟲',instructions:'追著小強啪！連擊賺更多 CP，小心突然熱鬧起來。',prototype:'隨機除蟲版 · 先啪再說',hits:'擊倒',time:'剩餘時間',roundCP:'本局',wallet:'存款',normal:'小茶',fast:'阿飆',flying:'飛飛',golden:'小金',normalEvent:'🏠 廚房出沒中',rushEvent:'一大群！拖鞋拿穩！',fastEvent:'牠們趕著去吃宵夜！',quietEvent:'怎麼突然這麼安靜……',rareEvent:'剛剛是不是有金光？',flyingEvent:'等一下，牠會飛！',done:'廚房暫時安全了。',doneNote:'拖鞋辛苦了。下一局會遇到誰？',again:'🩴 再啪一局',escaped:'逃跑',roundBest:'最高連擊',restNote:'時間與連擊都已暫停，準備好再回來。',earned:'獲得 CP',bait:'糟糕，牠帶朋友來了！'});
Object.assign(translations.en,{mode:'90 SECONDS · RANDOM ENCOUNTERS',instructions:'Chase, tap, and earn CP. Keep your combo going. Expect surprises!',prototype:'Random sessions · Just slap',hits:'SQUASHED',time:'TIME LEFT',roundCP:'THIS ROUND',wallet:'WALLET',normal:'Chai',fast:'Zoom',flying:'Flappy',golden:'Goldie',normalEvent:'🏠 Kitchen patrol',rushEvent:'A whole crowd! Slippers ready!',fastEvent:'Someone’s late for a midnight snack!',quietEvent:'Suspiciously quiet…',rareEvent:'Was that a golden sparkle?',flyingEvent:'Wait. That one can fly!',done:'The kitchen is safe. For now.',doneNote:'Nice work, slippers. Who’s next?',again:'🩴 One more round',escaped:'ESCAPED',roundBest:'BEST COMBO',restNote:'Time and combo are paused. Come back when ready.',earned:'CP EARNED',bait:'It brought friends!'});
Object.assign(translations.zh,{bossWarning:'⚠️ 有個大傢伙來了……',bossHit:'啪 Boss',bossHealth:'Boss 血量',sessionFrozen:'⏸ 本局倒數暫停',bossVictory:'比牠大隻的是你的拖鞋！',bossVictoryNote:'大量 CP 入袋，繼續除蟲！',bossFirst:'✨ 首次發現！已記錄這次遭遇。',bossEscaped:'牠逃走了！',bossEscapeNote:'下次一定抓到牠。',bossKills:'Boss 擊敗',bossSeen:'Boss 遭遇',baby:'小小強',prototype:'Boss 出沒版 · 先啪再說',instructions:'啪小強、賺 CP。偶爾有個大傢伙，等你拿拖鞋招呼。'});
Object.assign(translations.en,{bossWarning:'⚠️ Something BIG is coming…',bossHit:'Slap the boss',bossHealth:'Boss health',sessionFrozen:'⏸ Session clock paused',bossVictory:'Your slipper wins!',bossVictoryNote:'A pocketful of CP. Back to the kitchen!',bossFirst:'✨ NEW DISCOVERY! Encounter recorded.',bossEscaped:'It got away!',bossEscapeNote:'Next time, that roach is yours.',bossKills:'BOSSES BEATEN',bossSeen:'BOSSES MET',baby:'Baby roach',prototype:'Boss encounters · Just slap',instructions:'Slap roaches. Earn CP. Occasionally, something much bigger turns up.'});
Object.assign(translations.zh,{prototype:'收藏版 · 先啪再說',discovery:'✨ 新朋友！已加入圖鑑',achievement:'🏆 成就解鎖'});
Object.assign(translations.en,{prototype:'Collect & slap',discovery:'✨ NEW DISCOVERY! Field notes updated.',achievement:'🏆 ACHIEVEMENT UNLOCKED'});
Object.assign(translations.zh,{snack:'小饅',sleepy:'睏寶',shy:'害羞強',helmet:'鍋蓋強',snackEvent:'宵夜時間！誰偷拿了饅頭？'});
Object.assign(translations.en,{snack:'Bao',sleepy:'Dozy',shy:'Bashful',helmet:'Pothead',snackEvent:'Midnight snacks! Who took the bun?'});
Object.assign(translations.zh,{noodle:'麵麵',chili:'辣辣',delivery:'外送強',noodleEvent:'🍜 麵店打烊，宵夜開動！',kitchenRoom:'🏠 廚房出沒中',noodleRoom:'🍜 深夜麵店出沒中'});
Object.assign(translations.en,{noodle:'Noodler',chili:'Chili',delivery:'Dash',noodleEvent:'🍜 Shop closed. Midnight snacks begin!',kitchenRoom:'🏠 Kitchen patrol',noodleRoom:'🍜 Late-night noodle shop'});
Object.assign(translations.zh,{clerk:'店員強',onigiri:'飯糰強',box:'紙箱強',convenienceEvent:'🏪 後門補貨中，紙箱會動！',convenienceRoom:'🏪 便利商店後門出沒中'});
Object.assign(translations.en,{clerk:'Clerk',onigiri:'Onigiri',box:'Boxie',convenienceEvent:'🏪 Restocking out back. That box moved!',convenienceRoom:'🏪 Convenience-store back room'});
Object.assign(translations.zh,{bubble:'泡泡強',towel:'毛巾強',drain:'排水強',bathroomEvent:'🫧 浴室積水，排水孔有動靜！',bathroomRoom:'🛁 老公寓浴室出沒中'});
Object.assign(translations.en,{bubble:'Bubble',towel:'Towel',drain:'Drain',bathroomEvent:'🫧 Water on the floor. The drain is moving!',bathroomRoom:'🛁 Old apartment bathroom'});
Object.assign(translations.zh,{chooseScene:'選擇出沒地點',ownedScene:'已收藏',unlockScene:'解鎖',needScene:'還差',lockedStart:'先解鎖這個場景',previousScene:'上一個場景',nextScene:'下一個場景',exclusiveNotes:'限定圖鑑'});
Object.assign(translations.en,{chooseScene:'Choose a hotspot',ownedScene:'Owned',unlockScene:'Unlock',needScene:'Need',lockedStart:'Unlock this place first',previousScene:'Previous place',nextScene:'Next place',exclusiveNotes:'Exclusive notes'});
const $=id=>document.getElementById(id),arena=$('arena'),effects=$('effects'),enemyLayer=$('enemies');
let saved={};try{saved=JSON.parse(localStorage.getItem('roach-feel-settings')||'{}')||{}}catch{}
const validNumber=n=>Number.isFinite(n)&&n>=0?n:0;
let lang=saved.lang==='en'?'en':'zh',sound=saved.sound!==false,best=validNumber(saved.best),wallet=validNumber(saved.wallet);
let state='ready',hits=0,combo=0,roundBest=0,roundCP=0,escaped=0,timeLeft=90,comboLeft=0,lastFrame=0,spawnIn=0,eventIn=0,event='normal',eventAge=0,eventLabel='normalEvent',audio,nextId=0;
const enemies=new Map(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,comboWindow=1.9;
const species={
 baby:{speed:34,life:5,cp:3,hp:12},normal:{speed:23,life:7,cp:4,hp:12},
 fast:{speed:60,life:4.5,cp:6,hp:12},flying:{speed:36,life:6,cp:8,hp:12},golden:{speed:32,life:4.8,cp:60,hp:12},
 snack:{speed:18,life:8,cp:5,hp:12},sleepy:{speed:12,life:7,cp:6,hp:12},
 shy:{speed:44,life:3.8,cp:8,hp:12},helmet:{speed:20,life:7,cp:10,hp:24},
 noodle:{speed:16,life:8,cp:7,hp:12},chili:{speed:68,life:4,cp:10,hp:12},delivery:{speed:48,life:5.5,cp:9,hp:12},
 clerk:{speed:30,life:6.5,cp:8,hp:12},onigiri:{speed:20,life:7.5,cp:8,hp:12},box:{speed:10,life:6.5,cp:11,hp:12},
 bubble:{speed:22,life:8,cp:12,hp:24},towel:{speed:14,life:9,cp:10,hp:12},drain:{speed:72,life:4.5,cp:13,hp:12}
};
const bossRecords = Object.fromEntries(Object.keys(BOSS_TYPES).map(kind => {
  const previous = saved.bossRecords?.[kind] || {};
  return [kind, {encounters:validNumber(previous.encounters), defeated:validNumber(previous.defeated), escaped:validNumber(previous.escaped), fastest:Number.isFinite(previous.fastest)&&previous.fastest>=0?previous.fastest:null}];
}));
const records=Object.fromEntries(Object.keys(species).map(kind=>{const old=saved.records?.[kind]||{};return [kind,{encounters:validNumber(old.encounters),defeated:validNumber(old.defeated),escaped:validNumber(old.escaped)}]}));
const owned=[...new Set(['slipper',...(Array.isArray(saved.owned)?saved.owned.filter(id=>TOOLS[id]):[])])];
let equipped=owned.includes(saved.equipped)?saved.equipped:'slipper';
const ownedScenes=[...new Set(['kitchen',...(Array.isArray(saved.ownedScenes)?saved.ownedScenes.filter(id=>SCENES[id]):[])])];
let selectedScene=ownedScenes.includes(saved.selectedScene)?saved.selectedScene:'kitchen',activeScene=selectedScene,previewScene=selectedScene;
const unlocked=Array.isArray(saved.unlocked)?[...new Set(saved.unlocked.filter(id=>ACHIEVEMENTS.some(a=>a.id===id)))]:[];
const career={playSeconds:validNumber(saved.career?.playSeconds),started:validNumber(saved.career?.started),completed:validNumber(saved.career?.completed),kills:validNumber(saved.career?.kills),totalCP:validNumber(saved.career?.totalCP),slipperBoss:validNumber(saved.career?.slipperBoss),usage:Object.fromEntries(Object.keys(TOOLS).map(id=>[id,validNumber(saved.career?.usage?.[id])]))};
let bossSlipperOnly=true,spraying=false,sprayX=0,sprayY=0,sprayIn=0,sprayPointer=null;
let toastTimer=null;const toastQueue=[];
function notify(key,detail=''){toastQueue.push({key,detail});if(!toastTimer)nextToast()}
function nextToast(){const next=toastQueue.shift();if(!next){$('toast').hidden=true;toastTimer=null;return}$('toast').textContent=`${translations[lang][next.key]}${next.detail?' · '+next.detail:''}`;$('toast').hidden=false;toastTimer=setTimeout(()=>{toastTimer=null;nextToast()},2800)}
function awardCP(amount){wallet+=amount;career.totalCP+=amount;if(state==='playing')roundCP+=amount}
function checkAchievements(){
 const wins=Object.values(bossRecords).reduce((sum,r)=>sum+r.defeated,0);
 const qualified={bored:career.lobbyHits>=100,first:career.kills>=1,combo20:best>=20,combo100:best>=100,boss:wins>=1,thousand:career.kills>=1000,flying:records.flying.defeated>0,gold:records.golden.encounters>0||bossRecords.golden.encounters>0,primitive:career.slipperBoss>0,arsenal:owned.length===Object.keys(TOOLS).length};
 for(const achievement of ACHIEVEMENTS){if(qualified[achievement.id]&&!unlocked.includes(achievement.id)){unlocked.push(achievement.id);awardCP(achievement.reward);notify('achievement',`${achievement[lang][0]} +${achievement.reward} CP`)}}
}
function updateWeapon(){const tool=TOOLS[equipped];document.querySelector('.weapon>span').className=`tool-art tool-${equipped}`;document.querySelector('.weapon>span').textContent='';document.querySelector('.weapon strong').textContent=tool[lang][0];document.querySelector('.weapon small').textContent=tool[lang][2];arena.classList.toggle('spray-equipped',equipped==='spray')}
function equipTool(id){if(!owned.includes(id))return;stopSpray();equipped=id;if(boss.active&&id!=='slipper')bossSlipperOnly=false;updateWeapon();persist()}
function purchaseTool(id){const tool=TOOLS[id];if(!tool||owned.includes(id)||wallet<tool.price)return;wallet-=tool.price;owned.push(id);equipTool(id);checkAchievements();persist();renderHUD()}
function applyScene(){arena.dataset.scene=activeScene;document.querySelector('[data-i18n="location"]').textContent=SCENES[activeScene][lang][0];document.querySelector('.room-tag').textContent=translations[lang][`${activeScene}Room`]}
function selectScene(id){if(!ownedScenes.includes(id)||state==='paused')return;previewScene=selectedScene=id;if(state!=='playing')activeScene=id;applyScene();persist();renderScenePicker()}
function purchaseScene(id){const scene=SCENES[id];if(!scene||ownedScenes.includes(id)||wallet<scene.price||state==='paused')return;wallet-=scene.price;ownedScenes.push(id);previewScene=selectedScene=activeScene=id;applyScene();persist();renderHUD();renderScenePicker()}
function renderScenePicker(){document.body.dataset.previewScene=previewScene;const picker=$('scene-picker');if(!picker)return;picker.hidden=state!=='ready';if(state!=='ready')return;const t=translations[lang],scene=SCENES[previewScene],owned=ownedScenes.includes(previewScene),enough=wallet>=scene.price,ids=Object.keys(SCENES),locals=SCENE_SPECIES[previewScene],known=locals.filter(id=>records[id].encounters>0).length,portraits=locals.map(id=>records[id].encounters>0?`<i class="sprite species-art-${id}" title="${t[id]}"></i>`:'<i class="scene-species-unknown">?</i>').join('');$('scene-prev').setAttribute('aria-label',t.previousScene);$('scene-next').setAttribute('aria-label',t.nextScene);$('scene-choice').innerHTML=`<div class="scene-choice-image scene-${previewScene}" aria-hidden="true"><span>${scene.icon}</span></div><div class="scene-choice-copy"><small>${t.chooseScene} · ${ids.indexOf(previewScene)+1}/${ids.length}</small><strong>${scene[lang][0]}</strong><span>${scene[lang][1]}</span><div class="picker-species"><em>${previewScene==='kitchen'?(lang==='zh'?'常見朋友':'Familiar faces'):t.exclusiveNotes} ${known}/${locals.length}</em>${portraits}</div>${owned?`<b>✓ ${t.ownedScene}</b>`:`<button type="button" id="scene-unlock" ${enough?'':'disabled'}>${enough?`${t.unlockScene} · ${scene.price.toLocaleString()} CP`:`${t.needScene} ${(scene.price-wallet).toLocaleString()} CP`}</button>`}</div>`;const unlock=$('scene-unlock');if(unlock)unlock.addEventListener('click',()=>purchaseScene(previewScene));$('start').disabled=!owned;$('start').textContent=owned?t.start:t.lockedStart}
function stepScene(direction){const ids=Object.keys(SCENES),index=ids.indexOf(previewScene);previewScene=ids[(index+direction+ids.length)%ids.length];if(ownedScenes.includes(previewScene))selectScene(previewScene);else renderScenePicker()}
function countHit(){polish.hit();combo=comboLeft>0?combo+1:1;comboLeft=comboWindow;roundBest=Math.max(roundBest,combo);best=Math.max(best,combo);career.usage[equipped]++;checkAchievements()}
function attackDamage(){return TOOLS[equipped].damage*(combo>0&&combo%8===0?2:1)}
function zapNearby(x,y,except){
 const nearby=[...enemies.values()].filter(e=>e.id!==except&&Math.hypot(e.x-x,e.y-y)<=110).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y)).slice(0,2);
 for(const e of nearby){effect('zap',e.x,e.y,'⚡');const rect=arena.getBoundingClientRect();slap(e,rect.left+e.x,rect.top+e.y,true)}
}
function stopSpray(){spraying=false;sprayPointer=null;$('spray-area').hidden=true}
function sprayTick(elapsed){if(!spraying||equipped!=='spray'||state!=='playing')return;sprayIn-=elapsed;if(sprayIn>0)return;sprayIn=.14;if(boss.active&&!boss.fighting)return;
 const rect=arena.getBoundingClientRect();const px=sprayX-rect.left,py=sprayY-rect.top;
 $('spray-area').style.left=`${px}px`;$('spray-area').style.top=`${py}px`;
 for(const e of [...enemies.values()])if(Math.hypot(e.x-px,e.y-py)<75+e.el.offsetWidth*.25)slap(e,sprayX,sprayY,true);
 if(boss.fighting&&boss.near(sprayX,sprayY,75))boss.strike(sprayX,sprayY);
}
let roundBossKills=0,roundBossSeen=0,bossCooldown=0,roundGolden=null;
const boss = createBossSystem({arena,reduced,text:key=>translations[lang][key],record:bossRecords,
  sound:bossSound,canPointerHit:()=>equipped!=='spray',beforeHit:()=>advanceClock(performance.now()),
  onHit:(clientX,clientY)=>{
    unlockAudio();countHit();if(equipped!=='slipper')bossSlipperOnly=false;
    const damage=attackDamage(),r=arena.getBoundingClientRect();
    effect('damage',clientX-r.left,clientY-r.top,`−${damage}${damage>12?'!':''}`);
    effect('ring',clientX-r.left,clientY-r.top);if(equipped==='electric')zapNearby(clientX-r.left,clientY-r.top,null);persist();renderHUD();return damage;
  },
  onBaby:()=>{spawn('baby');spawn('baby')},
  onDone:({kind,won,reward,seconds})=>{
    if(kind==='golden')roundGolden={won,seconds};
    if(won){roundBossKills++;awardCP(reward);if(bossSlipperOnly)career.slipperBoss++;for(let i=0;i<(reduced?1:16);i++)effect('reward',arena.clientWidth*(.15+Math.random()*.7),arena.clientHeight*(.35+Math.random()*.4),'🪙')}
    for(const e of [...enemies.values()])removeEnemy(e);
    bossCooldown=10+Math.random()*14;eventIn=2;spawnIn=.4;event='normal';eventLabel='normalEvent';
    checkAchievements();persist();renderHUD();
  },
  onCancel:()=>{roundBossSeen--;bossCooldown=10+Math.random()*14;eventIn=2;spawnIn=.4;event='normal';eventLabel='normalEvent';persist();renderHUD()}
});
// Boss voices: a rising countdown, a signature entrance and hit sound per boss.
let noiseBuffer=null;
function tone(from,to,type,at,duration,volume,wobble=0){
  const o=audio.createOscillator(),g=audio.createGain();let lfo=null;
  o.type=type;o.frequency.setValueAtTime(from,at);if(to!==from)o.frequency.exponentialRampToValueAtTime(to,at+duration);
  if(wobble){lfo=audio.createOscillator();const depth=audio.createGain();lfo.frequency.value=wobble;depth.gain.value=from*.08;lfo.connect(depth);depth.connect(o.frequency);lfo.start(at);lfo.stop(at+duration+.02)}
  g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(volume,at+.012);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
  o.connect(g);g.connect(audio.destination);o.start(at);o.stop(at+duration+.02);o.onended=()=>{o.disconnect();g.disconnect();lfo?.disconnect()};
}
function thump(at,duration,volume,cutoff){
  if(!noiseBuffer){noiseBuffer=audio.createBuffer(1,audio.sampleRate/2,audio.sampleRate);const d=noiseBuffer.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
  const n=audio.createBufferSource(),f=audio.createBiquadFilter(),g=audio.createGain();n.buffer=noiseBuffer;f.type='lowpass';f.frequency.value=cutoff;
  g.gain.setValueAtTime(volume,at);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
  n.connect(f);f.connect(g);g.connect(audio.destination);n.start(at);n.stop(at+duration);n.onended=()=>{n.disconnect();f.disconnect();g.disconnect()};
}
function bossSound(name,kind,beat){
  if(!sound||!audio)return;
  const now=audio.currentTime;
  if(name==='tick'){
    // 3 → 2 → 1 climbs in pitch, with a drum under each beat.
    const f={3:392,2:494,1:587}[beat]||392;
    tone(f,f,'square',now,.12,.07);tone(f*2,f*2,'sine',now,.1,.05);thump(now,beat===1?.3:.18,.4,180);
    if(beat===1)tone(90,180,'sawtooth',now,.75,.05);
    return;
  }
  if(name==='roar'){
    thump(now,.45,.5,kind==='golden'?600:140);
    if(kind==='king'){tone(110,55,'sawtooth',now,.7,.12);tone(165,82,'sawtooth',now,.7,.07);[196,262,392].forEach((f,i)=>tone(f,f,'square',now+.15+i*.1,.2,.06))}
    else if(kind==='flying'){tone(220,660,'sawtooth',now,.6,.09,38);tone(330,990,'square',now+.05,.5,.04,42)}
    else if(kind==='mama'){tone(300,600,'triangle',now,.15,.16);tone(600,300,'triangle',now+.15,.15,.16);tone(400,800,'triangle',now+.32,.24,.16)}
    else [1047,1319,1568,2093,2637].forEach((f,i)=>{tone(f,f,'sine',now+i*.06,.5,.07);tone(f/2,f/2,'triangle',now+i*.06,.3,.04)});
    return;
  }
  if(name==='hit'){
    if(kind==='king'){tone(140,55,'square',now,.14,.13);thump(now,.12,.35,160)}
    else if(kind==='flying')tone(420,240,'sawtooth',now,.1,.1,45);
    else if(kind==='mama')tone(760,520,'triangle',now,.1,.16);
    else{tone(1568,1568,'sine',now,.25,.08);tone(2349,2349,'sine',now,.2,.05)}
    return;
  }
  const notes=name==='sparkle'?[880,1108,1320,1760]:name==='win'?[220,330,440,660]:[240,150];
  notes.forEach((frequency,i)=>tone(frequency,frequency*.55,equipped==='electric'?'sawtooth':'triangle',now+i*.08,.22,.2));
}
function beginBoss(){
  for(const e of [...enemies.values()])removeEnemy(e,true);
  effects.replaceChildren();$('cheer').textContent='';combo=0;comboLeft=0;
  const r=Math.random(),kind=r<.44?'king':r<.72?'flying':r<.97?'mama':'golden';
  bossSlipperOnly=equipped==='slipper';roundBossSeen++;const first=bossRecords[kind].encounters===0;boss.enter(kind);if(first)notify('discovery');checkAchievements();persist();renderHUD();
}
function persist(){try{localStorage.setItem('roach-feel-settings',JSON.stringify({version:5,lang,sound,best,wallet,bossRecords,records,owned,equipped,ownedScenes,selectedScene,unlocked,career}))}catch{}}
function renderHUD(){$('hits').textContent=String(hits).padStart(3,'0');$('combo').textContent=`× ${combo}`;$('timer').textContent=timeLeft.toFixed(1);$('timer').classList.toggle('urgent',timeLeft<=10&&!boss.active);$('timer').classList.toggle('frozen',boss.active);$('round-cp').textContent=roundCP.toLocaleString();$('wallet').textContent=wallet.toLocaleString();$('combo-progress').style.transform=`scaleX(${comboLeft/comboWindow})`}
function renderOverlay(){document.body.dataset.state=state;$('back-menu').hidden=state!=='ended';$('back-menu').textContent=lang==='zh'?'回主選單':'Main menu';document.querySelector('.menu-logo').innerHTML=lang==='zh'?'<span>小強！</span><strong>別跑</strong>':'<span>Roach!</span><strong>Don’t Run</strong>';document.querySelector('.menu-logo').setAttribute('aria-label',translations[lang].title);arena.style.touchAction=state==='playing'?'none':'pan-y';const t=translations[lang],welcome=$('welcome');welcome.hidden=state==='playing';$('pause').hidden=state!=='playing';$('hint').hidden=state!=='ready';enemyLayer.hidden=state==='paused';$('results').hidden=state!=='ended';if(state==='paused'){welcome.querySelector('h2').textContent=t.rest;welcome.querySelector('p').textContent=t.restNote;$('start').disabled=false;$('start').textContent=t.resume}else if(state==='ended'){welcome.querySelector('h2').textContent=t.done;welcome.querySelector('p').textContent=t.doneNote;$('start').disabled=false;$('start').textContent=t.again;$('results').innerHTML=`<div><span>${t.hits}</span><strong>${hits}</strong></div><div><span>${t.roundBest}</span><strong>× ${roundBest}</strong></div><div><span>${t.escaped}</span><strong>${escaped}</strong></div><div><span>${t.earned}</span><strong>+${roundCP}</strong></div><div><span>${t.bossSeen}</span><strong>${roundBossSeen}</strong></div><div><span>${t.bossKills}</span><strong>${roundBossKills}</strong></div>`}renderScenePicker()}
function localize(){const t=translations[lang];document.documentElement.lang=lang==='zh'?'zh-Hant':'en';document.title=t.title;$('language').textContent=lang==='zh'?'English':'繁體中文';document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t[el.dataset.i18n]);document.querySelector('[data-i18n="location"]').textContent=SCENES[activeScene][lang][0];for(const e of enemies.values())e.el.setAttribute('aria-label',`${t.target} · ${t[e.kind]}`);document.querySelector('.room-tag').textContent=eventLabel==='normalEvent'?t[`${activeScene}Room`]:t[eventLabel];$('cheer').textContent='';boss.localize();updateWeapon();meta.refresh();renderOverlay();renderHUD();persist()}
function unlockAudio(){if(!sound)return;try{audio ||= new (window.AudioContext||window.webkitAudioContext)();if(audio.state!=='running')audio.resume().catch(()=>{})}catch{}}
function hitSound(){if(!sound||!audio)return;const now=audio.currentTime,o=audio.createOscillator(),g=audio.createGain();o.type=equipped==='electric'?'sawtooth':'triangle';o.frequency.setValueAtTime((equipped==='electric'?620:equipped==='spray'?180:340)+Math.min(combo,35)*17,now);o.frequency.exponentialRampToValueAtTime(100,now+.085);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.22,now+.005);g.gain.exponentialRampToValueAtTime(.0001,now+(equipped==='newspaper'?.06:.11));o.connect(g);g.connect(audio.destination);o.start(now);o.stop(now+.12);o.onended=()=>{o.disconnect();g.disconnect()}}
function effect(className,px,py,text=''){const e=document.createElement('span');e.className=className;e.style.left=`${px}px`;e.style.top=`${py}px`;e.textContent=text;e.style.setProperty('--drift',`${-50+Math.random()*80}px`);effects.append(e);e.addEventListener('animationend',()=>e.remove(),{once:true});return e}
function announce(key){$('cheer').textContent=translations[lang][key];$('cheer').classList.remove('pop');void $('cheer').offsetWidth;$('cheer').classList.add('pop')}
function removeEnemy(e,escape=false){if(!enemies.has(e.id))return;enemies.delete(e.id);e.el.remove();if(escape){escaped++;records[e.kind].escaped++}}
function clearEnemies(){for(const e of enemies.values())e.el.remove();enemies.clear();effects.replaceChildren()}
function positionEnemy(e){const w=arena.clientWidth,h=arena.clientHeight,r=e.el.offsetWidth/2;const minY=Math.min(h-r-28,Math.max(r+48,h*.43));const maxY=Math.max(minY,h-r-28);e.x=Math.max(r+5,Math.min(w-r-5,e.x));e.y=Math.max(minY,Math.min(maxY,e.y));e.el.style.left=`${e.x}px`;e.el.style.top=`${e.y}px`;return {left:r+5,right:w-r-5,top:minY,bottom:maxY}}
function spawn(kind='normal',bait=false){if(state!=='playing'||enemies.size>=9)return;const info=species[kind],el=document.createElement('button');el.className=`roach ${kind}`;el.setAttribute('aria-label',`${translations[lang].target} · ${translations[lang][kind]}`);el.innerHTML=`<span class="sprite" aria-hidden="true"></span><span class="roach-shadow"></span>`;const w=arena.clientWidth,h=arena.clientHeight,angle=Math.random()*Math.PI*2;const e={id:++nextId,kind,el,bait,hp:info.hp,age:0,turn:0,x:w*(.16+Math.random()*.68),y:h*(.5+Math.random()*.28),vx:Math.cos(angle),vy:Math.sin(angle)*.55};const first=records[kind].encounters===0;records[kind].encounters++;if(first)notify('discovery',translations[lang][kind]);checkAchievements();persist();enemies.set(e.id,e);enemyLayer.append(el);positionEnemy(e);el.addEventListener('pointerdown',ev=>{if((ev.pointerType==='mouse'&&ev.button!==0)||equipped==='spray')return;ev.preventDefault();slap(e,ev.clientX,ev.clientY)});el.addEventListener('click',ev=>{if(ev.detail===0){const r=el.getBoundingClientRect();slap(e,r.left+r.width/2,r.top+r.height/2)}});if(!reduced)el.querySelector('.sprite').animate([{transform:'scale(.2)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:200,easing:'ease-out'})}
function start(){unlockAudio();if(state!=='paused'){activeScene=selectedScene;applyScene();career.started++;roundGolden=null;boss.reset();roundBossKills=roundBossSeen=0;bossCooldown=0;clearEnemies();hits=combo=roundBest=roundCP=escaped=0;timeLeft=90;comboLeft=0;event='normal';eventLabel='normalEvent';eventAge=0;eventIn=5+Math.random()*4;spawnIn=.6}const wasPaused=state==='paused';state='playing';boss.pause(false);lastFrame=performance.now();localize();if(!wasPaused){spawn(activeScene==='noodle'?'noodle':activeScene==='convenience'?'clerk':activeScene==='bathroom'?'bubble':'normal');spawn('normal')}if(boss.active)boss.focus();else enemies.values().next().value?.el.focus({preventScroll:true})}
function advanceClock(now){const elapsed=Math.max(0,(now-lastFrame)/1000);lastFrame=now;career.playSeconds+=boss.active?elapsed:Math.min(elapsed,timeLeft);if(!boss.active)timeLeft=Math.max(0,timeLeft-elapsed);else boss.tick(elapsed);comboLeft=Math.max(0,comboLeft-elapsed);if(comboLeft===0)combo=0;return elapsed}
function pause(){stopSpray();if(state!=='playing')return;advanceClock(performance.now());if(timeLeft===0){finish();return}state='paused';boss.pause(true);localize();$('start').focus({preventScroll:true});persist()}
function finish(){stopSpray();boss.reset();career.completed++;state='ended';timeLeft=0;for(const e of [...enemies.values()])removeEnemy(e,true);clearEnemies();persist();localize();$('start').focus({preventScroll:true})}
function setEvent(next){event=next;eventAge=0;eventIn=5+Math.random()*5;eventLabel=`${next}Event`;document.querySelector('.room-tag').textContent=next==='normal'?translations[lang][`${activeScene}Room`]:translations[lang][eventLabel];if(next!=='normal')announce(eventLabel);if(next==='quiet'){for(const e of [...enemies.values()])removeEnemy(e,true);spawn('normal',true);spawnIn=999}else if(next==='rush'){for(let i=0;i<5;i++)spawn();spawnIn=.3}else if(next==='rare'){spawn('golden');spawnIn=1.3}else if(next==='snack'){spawn(['snack','sleepy','shy','helmet'][Math.floor(Math.random()*4)]);spawnIn=1}else if(next==='noodle'){spawn(['noodle','chili','delivery'][Math.floor(Math.random()*3)]);spawnIn=.75}else if(next==='convenience'){spawn(['clerk','onigiri','box'][Math.floor(Math.random()*3)]);spawnIn=.75}else if(next==='bathroom'){spawn(['bubble','towel','drain'][Math.floor(Math.random()*3)]);spawnIn=.75}else{spawnIn=.2}}
function chooseEvent(){if(bossCooldown<=0&&Math.random()<.23){beginBoss();return}const r=Math.random(),local=activeScene==='noodle'?'noodle':activeScene==='convenience'?'convenience':activeScene==='bathroom'?'bathroom':'snack';setEvent(r<.23?'normal':r<.43?'rush':r<.57?'fast':r<.7?'flying':r<.81?'quiet':r<.96?local:'rare')}
function nextSpecies(){
 if(event==='fast'&&Math.random()<.75)return 'fast';
 if(event==='flying'&&Math.random()<.7)return 'flying';
 if(event==='snack'&&Math.random()<.8)return ['snack','sleepy','shy','helmet'][Math.floor(Math.random()*4)];
 if(event==='noodle'&&Math.random()<.85)return ['noodle','chili','delivery'][Math.floor(Math.random()*3)];
 if(event==='convenience'&&Math.random()<.85)return ['clerk','onigiri','box'][Math.floor(Math.random()*3)];
 if(event==='bathroom'&&Math.random()<.85)return ['bubble','towel','drain'][Math.floor(Math.random()*3)];
 if(activeScene==='noodle'&&Math.random()<.4)return ['noodle','chili','delivery'][Math.floor(Math.random()*3)];
 if(activeScene==='convenience'&&Math.random()<.4)return ['clerk','onigiri','box'][Math.floor(Math.random()*3)];
 if(activeScene==='bathroom'&&Math.random()<.4)return ['bubble','towel','drain'][Math.floor(Math.random()*3)];
 const r=Math.random();return r<.5?'normal':r<.62?'fast':r<.72?'flying':r<.82?'snack':r<.89?'sleepy':r<.95?'shy':r<.99?'helmet':'golden';
}
function slap(e,clientX,clientY,chained=false){
 if(state!=='playing'||!enemies.has(e.id)||(boss.active&&!boss.fighting))return;
 advanceClock(performance.now());if(timeLeft===0){finish();return}if(!enemies.has(e.id))return;
 unlockAudio();countHit();const damage=attackDamage();e.hp-=damage;
 const rect=arena.getBoundingClientRect(),px=clientX-rect.left,py=clientY-rect.top;
 effect('damage',px,py,`−${damage}`);effect('ring',px,py);hitSound();
 if(e.hp>0){e.el.querySelector('.sprite').animate([{filter:'brightness(1.8)',transform:'scale(.9)'},{filter:'brightness(1)',transform:'scale(1)'}],{duration:120});renderHUD();persist();return}
 hits++;career.kills++;records[e.kind].defeated++;if(e.kind==='golden')bossSound('sparkle');
 const base=species[e.kind].cp,bonus=Math.floor(base*Math.min(.5,Math.floor(combo/10)*.1)),reward=base+bonus;awardCP(reward);effect('reward',e.x,e.y+25,`+${reward} CP`);
 for(let i=0;i<(reduced?0:7);i++){const p=effect('spark',px,py),a=Math.random()*Math.PI*2;p.style.setProperty('--x',`${Math.cos(a)*(25+Math.random()*35)}px`);p.style.setProperty('--y',`${Math.sin(a)*(25+Math.random()*35)}px`)}
 const ghost=document.createElement('div');ghost.className=`roach defeated ${e.kind}`;ghost.style.left=`${e.x}px`;ghost.style.top=`${e.y}px`;ghost.innerHTML=e.el.innerHTML;effects.append(ghost);
 ghost.querySelector('.sprite').animate(reduced?[{opacity:1},{opacity:0}]:[{transform:'scale(1)',filter:'brightness(1.65)'},{transform:'scale(.90,.84) rotate(-8deg)',offset:.2},{transform:'scale(1.09,1.05) rotate(5deg)',offset:.48},{transform:'scale(1.2,.15)',opacity:0}],{duration:equipped==='newspaper'?130:260,easing:'ease-out'}).finished.then(()=>ghost.remove()).catch(()=>ghost.remove());
 effect('little-ghost',e.x,e.y,'👻');const wasBait=e.bait;removeEnemy(e);
 if(equipped==='electric'&&!chained){effect('zap',e.x,e.y,'⚡');zapNearby(e.x,e.y,e.id)}
 if(wasBait){setEvent('rush');announce('bait')}else if(combo%10===0){$('cheer').textContent=translations[lang].cheers[combo>=50?2:combo>=20?1:0];$('cheer').classList.remove('pop');void $('cheer').offsetWidth;$('cheer').classList.add('pop')}
 if(enemies.size<2&&event!=='quiet')spawnIn=Math.min(spawnIn,.16);checkAchievements();renderHUD();persist();
}
function frame(now){if(state==='playing'){const elapsed=advanceClock(now),dt=Math.min(.06,elapsed);if(timeLeft<=0){finish()}else{if(!boss.active){bossCooldown=Math.max(0,bossCooldown-elapsed);eventIn-=elapsed;eventAge+=elapsed;spawnIn-=elapsed;if(eventIn<=0)chooseEvent();if(!boss.active&&spawnIn<=0){spawn(nextSpecies());spawnIn=event==='rush'?.32+Math.random()*.25:.65+Math.random()*.6}}for(const e of [...enemies.values()]){e.age+=dt;e.turn-=dt;if(e.age>species[e.kind].life){removeEnemy(e,true);continue}if(e.turn<=0){e.turn=.8+Math.random()*1.4;const a=Math.random()*Math.PI*2;e.vx=Math.cos(a);e.vy=Math.sin(a)*.55;if(e.kind==='flying'&&!reduced){e.el.querySelector('.sprite').animate([{transform:'translateY(0) rotate(0)'},{transform:'translateY(-22px) rotate(8deg)',offset:.5},{transform:'translateY(0) rotate(0)'}],{duration:550})}}const bounds=positionEnemy(e);if(!reduced){const speed=e.kind==='sleepy'&&e.age>3?48:e.kind==='box'&&e.age>2.5?55:species[e.kind].speed;e.x+=e.vx*speed*dt;e.y+=e.vy*speed*dt;if(e.x<=bounds.left||e.x>=bounds.right)e.vx*=-1;if(e.y<=bounds.top||e.y>=bounds.bottom)e.vy*=-1;positionEnemy(e)}e.el.classList.toggle('escaping',e.age>species[e.kind].life-1)}sprayTick(elapsed);renderHUD()}}requestAnimationFrame(frame)}
$('start').addEventListener('click',start);$('pause').addEventListener('click',pause);$('language').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';localize()});document.addEventListener('visibilitychange',()=>{if(document.hidden)pause()});document.addEventListener('keydown',e=>{if(e.key==='Escape')pause()});window.addEventListener('pagehide',()=>{pause();persist()});window.addEventListener('resize',()=>{for(const e of enemies.values())positionEnemy(e)});
$('back-menu').addEventListener('click',()=>{state='ready';previewScene=selectedScene;applyScene();localize()});
$('scene-prev').addEventListener('click',()=>stepScene(-1));$('scene-next').addEventListener('click',()=>stepScene(1));
const meta=createMetaUI({snapshot:()=>({lang,state,wallet,best,bossRecords,records,owned,equipped,ownedScenes,selectedScene,unlocked,career}),purchase:purchaseTool,equip:equipTool,purchaseScene,selectScene,pause,changeLanguage:()=>{lang=lang==='zh'?'en':'zh';localize()}});
arena.addEventListener('pointerdown',e=>{if(equipped!=='spray'||state!=='playing'||(e.pointerType==='mouse'&&e.button!==0)||spraying)return;e.preventDefault();unlockAudio();spraying=true;sprayPointer=e.pointerId;sprayX=e.clientX;sprayY=e.clientY;sprayIn=0;$('spray-area').hidden=false;arena.setPointerCapture(e.pointerId);sprayTick(0)});
arena.addEventListener('pointermove',e=>{if(spraying&&e.pointerId===sprayPointer){sprayX=e.clientX;sprayY=e.clientY}});
for(const eventName of ['pointerup','pointercancel','lostpointercapture'])arena.addEventListener(eventName,stopSpray);
window.addEventListener('blur',pause);
// Cancel native panning from the start of an active arena gesture, including
// empty floor taps. Track it on document because a defeated target is removed.
let arenaTouch = false;
document.addEventListener('pointerdown', e => {
  if(e.pointerType === 'touch' && e.isPrimary) {
    arenaTouch = state === 'playing' && arena.contains(e.target) && !$('welcome').contains(e.target);
  }
}, {capture:true,passive:true});
document.addEventListener('touchstart', e => {
  if(e.touches.length === e.changedTouches.length) {
    arenaTouch = arenaTouch || (state === 'playing' && arena.contains(e.target) && !$('welcome').contains(e.target));
  }
  if(arenaTouch && e.cancelable) e.preventDefault();
}, {passive:false});
document.addEventListener('touchmove', e => {
  if(arenaTouch && e.cancelable) e.preventDefault();
}, {passive:false});
for(const name of ['touchend','touchcancel']) document.addEventListener(name, e => {
  if(!e.touches.length) arenaTouch = false;
}, {passive:true});
career.lobbyHits=validNumber(saved.career?.lobbyHits);
const polish=createPolish({getSound:()=>sound,setSound:on=>{sound=on;unlockAudio();persist()},snapshot:()=>({lang,state,hits,bossKills:roundBossKills,best:roundBest,cp:roundCP,golden:roundGolden,bossActive:boss.active,bossFighting:boss.fighting}),pause,lobbyHit:()=>{career.lobbyHits++;awardCP(1);unlockAudio();hitSound();checkAchievements();renderHUD();persist()}});
applyScene();checkAchievements();localize();requestAnimationFrame(frame);
