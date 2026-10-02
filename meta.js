export const TOOLS = {
  slipper: { price: 0, damage: 12, icon: '🩴', zh: ['阿嬤拖鞋', '傳說每個台灣家庭都有一雙。', '點一下，啪一下。最純粹的手感。'], en: ['Grandma’s slipper', 'A legend in every Taiwanese home.', 'One tap, one satisfying slap.'] },
  newspaper: { price: 2000, damage: 12, icon: '🗞️', zh: ['報紙捲', '昨天的新聞，今天的戰力。', '輕快短促的連拍，啪啪啪啪！'], en: ['Rolled newspaper', 'Yesterday’s news. Today’s weapon.', 'Crisp, snappy taps. Pak pak pak!'] },
  spray: { price: 6500, damage: 6, icon: '🧴', zh: ['殺蟲劑', '阿嬤說這罐很有用。', '按住並移動，在範圍內持續噴灑。'], en: ['Bug spray', 'Grandma swears by this one.', 'Hold and move to spray a small area.'] },
  electric: { price: 12000, damage: 12, icon: '⚡', zh: ['電蚊拍', '一拍下去，隔壁也有感。', '點擊目標，最多連鎖電到附近兩隻小強。'], en: ['Electric racket', 'The neighbors will feel this one.', 'Tap a target to chain a zap to up to two nearby roaches.'] },
};

export const SCENES = {
  kitchen: { price:0, icon:'🏠', zh:['阿嬤家廚房','熟悉的電鍋、流理台，什麼小強都有可能來。'], en:["Grandma’s kitchen",'The familiar all-rounder. Any roach may drop by.'] },
  noodle: { price:5000, icon:'🍜', zh:['深夜麵店','打烊後才是牠們的宵夜時間。三種限定小強出沒。'], en:['Late-night noodle shop','Closing time is their dinner bell. Three exclusive species live here.'] },
  convenience: { price:10000, icon:'🏪', zh:['便利商店後門','紙箱、飯糰與夜班店員都很忙。三種限定小強出沒。'], en:['Convenience-store back room','Boxes, rice balls and the night clerk stay busy. Three exclusive species live here.'] },
  bathroom: { price:18000, icon:'🫧', zh:['老公寓浴室','水桶、毛巾與排水孔都不太安靜。三種限定小強出沒。'], en:['Old apartment bathroom','Buckets, towels and the drain are suspiciously lively. Three exclusive species live here.'] },
};

export const SCENE_SPECIES = {
  kitchen: ['snack','sleepy','shy'],
  noodle: ['noodle','chili','delivery'],
  convenience: ['clerk','onigiri','box'],
  bathroom: ['bubble','towel','drain'],
};

export const ACHIEVEMENTS = [
  { id:'bored', reward:100, icon:'🪳', hidden:true, zh:['你真的很無聊','在首頁啪小強 100 次。'], en:['You really have time','Slap the lobby roach 100 times.'] },
  { id:'first', reward:50, icon:'🩴', zh:['第一滴血','第一次啪掉小強。'], en:['First slap','Defeat your first roach.'] },
  { id:'combo20', reward:75, icon:'🔥', zh:['手速有點東西','達成 20 Combo。'], en:['Fast hands','Reach a 20-hit combo.'] },
  { id:'combo100', reward:200, icon:'🔥', zh:['你是不是有私人恩怨？','達成 100 Combo。'], en:['Is this personal?','Reach a 100-hit combo.'] },
  { id:'boss', reward:150, icon:'👑', zh:['我比較大隻','第一次擊敗 Boss。'], en:['I’m the bigger one','Defeat your first boss.'] },
  { id:'thousand', reward:500, icon:'🏅', zh:['專業除蟲人士','累積擊倒 1,000 隻小強。'], en:['Pest professional','Defeat 1,000 small roaches.'] },
  { id:'flying', reward:75, icon:'🪽', zh:['幹！牠飛起來了！','第一次擊倒飛天小強。'], en:['Wait! It flies?!','Defeat your first flying roach.'] },
  { id:'gold', reward:150, icon:'✨', zh:['金色傳說','第一次發現黃金小強或黃金王。'], en:['Golden legend','Discover a golden roach or Golden King.'] },
  { id:'primitive', reward:250, icon:'🩴', zh:['原始人','一場 Boss 戰全程只使用拖鞋，並擊敗牠。'], en:['Old school','Defeat a boss using only the slipper throughout its battle.'] },
  { id:'arsenal', reward:300, icon:'🏪', hidden:true, zh:['阿嬤的 VIP','收藏五金行全部四種工具。'], en:['Grandma’s VIP','Own all four tools in the hardware store.'] },
];

const copy = {
  zh: {shop:'阿嬤五金行',scenes:'出沒地點',collection:'居家害蟲觀察手冊',achievements:'不太正經的成就',career:'我的除蟲生涯',shopShort:'五金行',scenesShort:'場景',collectionShort:'圖鑑',achievementsShort:'成就',careerShort:'生涯',close:'收起來',wallet:'存款',shopNote:'先存一雙新手感，再慢慢收齊工具。連擊最多加成 50% CP，稀有遭遇會帶來額外驚喜。',sceneNote:'買下地點後永久開放。每局開始前選好，場景會帶來自己的限定小強。',exclusive:'限定圖鑑',buy:'帶走並裝備',unlock:'買下地點',visit:'去這裡',selected:'目前地點',nextRound:'本局進行中',equip:'換這個',equipped:'使用中',short:'還差',owned:'已收藏',collectionNote:'遇見才知道。每一隻都有自己的宵夜計畫。',unknown:'尚未發現',habit:'觀察筆記',location:'出沒地',rarity:'稀有度',kitchen:'家裡廚房',noodle:'深夜麵店',convenience:'便利商店後門',bathroom:'老公寓浴室',common:'常見',unusual:'有點少見',rare:'稀有',bossRare:'大傢伙',encounters:'遭遇',defeated:'擊倒',escaped:'逃跑',fastest:'最快擊敗',discovered:'已發現',reward:'獎勵',claimed:'已領取',locked:'尚未完成',achievementNote:'達成就自動領 CP。沒有額外傷害加成。',careerNote:'遊玩時間、普通擊倒與累積收入，自收藏版開始記錄；既有 CP、最高 Combo 與 Boss 紀錄都會保留。',playTime:'遊玩時間',sessions:'完成場次',started:'開始場次',kills:'總擊倒',bossWins:'Boss 擊敗',best:'最高 Combo',earned:'累積 CP',favorite:'最常使用',species:'已發現種類',done:'已完成成就',noUsage:'還沒出手',seconds:'秒',progress:'進度'},
  en: {shop:'Grandma’s Hardware',scenes:'Roach hotspots',collection:'Household Roach Field Notes',achievements:'Very Serious Achievements',career:'My Pest-control Career',shopShort:'Shop',scenesShort:'Places',collectionShort:'Field notes',achievementsShort:'Achievements',careerShort:'Career',close:'Close',wallet:'Wallet',shopNote:'Save for a new play style, then build your collection. Combos add up to 50% CP; rare encounters bring a bonus.',sceneNote:'Buy a place once and keep it forever. Choose before a round to meet its exclusive species.',exclusive:'Exclusive notes',buy:'Buy & equip',unlock:'Unlock place',visit:'Go here',selected:'Current place',nextRound:'Round in progress',equip:'Equip',equipped:'Equipped',short:'Need',owned:'Collected',collectionNote:'Meet them first. Every roach has a midnight-snack story.',unknown:'Undiscovered',habit:'Field notes',location:'Habitat',rarity:'Rarity',kitchen:'Home kitchen',noodle:'Late-night noodle shop',convenience:'Convenience-store back room',bathroom:'Old apartment bathroom',common:'Common',unusual:'Unusual',rare:'Rare',bossRare:'Big visitor',encounters:'Met',defeated:'Beaten',escaped:'Escaped',fastest:'Fastest win',discovered:'Discovered',reward:'Reward',claimed:'Claimed',locked:'Not yet',achievementNote:'Earn CP automatically. No extra damage boosts.',careerNote:'Time played, small-roach defeats and lifetime earnings are tracked from this collection update. Existing CP, best combo and boss records are preserved.',playTime:'Time played',sessions:'Rounds finished',started:'Rounds started',kills:'Small roaches beaten',bossWins:'Bosses beaten',best:'Best combo',earned:'Lifetime CP',favorite:'Favorite tool',species:'Species discovered',done:'Achievements earned',noUsage:'No hits yet',seconds:'s',progress:'Progress'},
};
const subjects = [
  ['normal','小茶','Chai','只是出來找宵夜，不知道為什麼被你打。','Just looking for a snack. Why the slipper?','common'],
  ['fast','阿飆','Zoom','宵夜店要打烊了，借過借過！','The snack shop is closing. Coming through!','unusual'],
  ['flying','飛飛','Flappy','牠沒有想嚇你，牠只是想抄近路。','Not trying to scare you. Just taking a shortcut.','unusual'],
  ['golden','小金','Goldie','不知道吃了什麼，整隻閃閃發亮。','Whatever it ate, it’s glowing now.','rare'],
  ['baby','小小強','Baby roach','媽媽說出來打個招呼就好。','Mom said to come out and say hello.','unusual'],
  ['king','大強 · KING ROACH','KING ROACH','我們不知道牠吃了什麼。我們也不想知道。','We don’t know what it ate. We don’t want to.','bossRare'],
  ['bossFlying','飛天王 · FLYING KING','FLYING KING','這麼大隻，竟然還飛得起來。','Something that big should not be airborne.','bossRare'],
  ['mama','媽媽 · MAMA ROACH','MAMA ROACH','包包裡不是菜，是全家的晚餐。','That handbag holds dinner for the whole family.','bossRare'],
  ['bossGolden','黃金王 · GOLDEN KING','GOLDEN KING','阿嬤說，看到牠要把拖鞋握緊。','Grandma says: hold that slipper tight.','rare'],
  ['snack','小饅','Bao','一手抱饅頭，一手顧肚子，跑得比較慢。','One hand on the bun, one on the belly. A slow getaway.','unusual'],
  ['sleepy','睏寶','Dozy','本來慢吞吞，醒來才發現拖鞋在後面。','Sleepwalking until it notices the slipper behind it.','unusual'],
  ['shy','害羞強','Bashful','圍巾拉高一點，沒被看見就不算出門。','Scarf up. If nobody sees me, I never left home.','rare'],
  ['helmet','鍋蓋強','Pothead','借了阿嬤的小鍋子，要多啪一下才肯走。','Borrowed Grandma’s pot. Needs an extra slap.','rare'],
  ['noodle','麵麵','Noodler','抱著一碗麵，逃跑前還想再吸最後一口。','Still trying to finish one last noodle while escaping.','unusual','noodle'],
  ['chili','辣辣','Chili','吃辣之後腳步特別快，脾氣也是。','Spicy, speedy, and taking this very personally.','rare','noodle'],
  ['delivery','外送強','Dash','這單送太久，保溫袋裡可能只剩 CP。','Delivery took too long. The bag may contain only CP now.','rare','noodle'],
  ['clerk','店員強','Clerk','夜班掃條碼太久，現在看到什麼都想嗶一下。','After a long night shift, it wants to scan everything.','unusual','convenience'],
  ['onigiri','飯糰強','Onigiri','緊緊抱住最後一顆飯糰，絕對不提供加熱。','Holding the last rice ball. Heating is unavailable.','unusual','convenience'],
  ['box','紙箱強','Boxie','先假裝只是紙箱，等你走近再突然逃跑。','Just a box—until you get close and it bolts.','rare','convenience'],
  ['bubble','泡泡強','Bubble','躲進泡泡裡，得先啪破保護罩。','Safe inside a soap bubble—pop the shield first.','unusual','bathroom'],
  ['towel','毛巾強','Towel','洗完澡不肯走，還把阿嬤的毛巾穿走。','Finished bathing and borrowed Grandma’s towel without asking.','unusual','bathroom'],
  ['drain','排水強','Drain','扛著排水孔蓋衝刺，完全沒有要低調。','Charging in with a drain cover and zero intention of hiding.','rare','bathroom'],
];
const bossKey = id => ({king:'king',bossFlying:'flying',mama:'mama',bossGolden:'golden'})[id];

export function createMetaUI({ snapshot, purchase, equip, purchaseScene, selectScene, pause, changeLanguage }) {
  const dialog = document.getElementById('meta-dialog');
  dialog.tabIndex = -1;
  const title = document.getElementById('meta-title');
  const content = document.getElementById('meta-content');
  const tabs = document.getElementById('meta-tabs');
  let view = 'shop';
  const recordFor = (s,id) => bossKey(id) ? s.bossRecords[bossKey(id)] : s.records[id];
  const art = id => bossKey(id) ? `boss-sprite boss-art-${bossKey(id)}` : `sprite species-art-${id}`;
  const stat = (label, value) => `<div class="career-stat"><span>${label}</span><strong>${value}</strong></div>`;
  const number = n => Math.floor(n).toLocaleString();
  const sceneSpecies = (s,t,id) => {const ids=SCENE_SPECIES[id],known=ids.filter(key=>s.records[key]?.encounters>0).length;return `<div class="scene-species"><span>${t.exclusive} ${known}/${ids.length}</span><div>${ids.map(key=>{const found=s.records[key]?.encounters>0;return `<i class="${found?`sprite species-art-${key}`:'scene-species-unknown'}" aria-label="${found?t.discovered:t.unknown}">${found?'':'?'}</i>`}).join('')}</div></div>`};

  function render() {
    const s = snapshot(), t = copy[s.lang];
    document.querySelectorAll('[data-meta]').forEach(el => el.textContent = t[`${el.dataset.meta}Short`]);
    document.getElementById('meta-close').textContent = t.close;
    document.getElementById('meta-language').textContent = s.lang === 'zh' ? 'English' : '繁體中文';
    title.textContent = t[view];
    document.getElementById('meta-wallet').textContent = `${t.wallet} · ${number(s.wallet)} CP`;
    tabs.innerHTML = ['shop','scenes','collection','achievements','career'].map(key => `<button type="button" data-view="${key}" aria-pressed="${view===key}">${t[`${key}Short`]}</button>`).join('');
    if (view === 'shop') {
      content.innerHTML = `<p class="meta-note">${t.shopNote}</p><div class="shop-grid">${Object.entries(TOOLS).map(([id,tool]) => {
        const owned = s.owned.includes(id), active = s.equipped === id, enough = s.wallet >= tool.price;
        return `<article class="tool-card ${active?'selected':''}"><div class="tool-art tool-${id}" aria-hidden="true"></div><span class="tool-price">${owned?t.owned:`${number(tool.price)} CP`}</span><h3>${tool[s.lang][0]}</h3><p>${tool[s.lang][1]}</p><p class="tool-how">${tool[s.lang][2]}</p><button type="button" data-tool="${id}" ${active||(!owned&&!enough)?'disabled':''}>${active?t.equipped:owned?t.equip:enough?t.buy:`${t.short} ${number(tool.price-s.wallet)} CP`}</button></article>`;
      }).join('')}</div>`;
    } else if (view === 'scenes') {
      content.innerHTML=`<p class="meta-note">${t.sceneNote}</p><div class="scene-grid">${Object.entries(SCENES).map(([id,scene])=>{const owned=s.ownedScenes.includes(id),active=s.selectedScene===id,enough=s.wallet>=scene.price,busy=s.state==='paused';return `<article class="scene-card ${active?'selected':''}"><div class="scene-preview scene-${id}" aria-hidden="true"><span>${scene.icon}</span></div><h3>${scene[s.lang][0]}</h3><p>${scene[s.lang][1]}</p>${sceneSpecies(s,t,id)}<b>${owned?t.owned:`${number(scene.price)} CP`}</b><button type="button" data-scene="${id}" ${active||busy||(!owned&&!enough)?'disabled':''}>${active?t.selected:busy?t.nextRound:owned?t.visit:enough?t.unlock:`${t.short} ${number(scene.price-s.wallet)} CP`}</button></article>`}).join('')}</div>`;
    } else if (view === 'collection') {
      const count = subjects.filter(([id]) => recordFor(s,id).encounters > 0).length;
      content.innerHTML = `<p class="meta-note">${t.collectionNote} <b>${count} / ${subjects.length}</b></p><div class="collection-grid">${subjects.map(([id,zh,en,noteZh,noteEn,rarity,location='kitchen'],i)=>{
        const r=recordFor(s,id),known=r.encounters>0;
        return `<article class="specimen ${known?'':'unknown'}"><span class="specimen-number">No.${String(i+1).padStart(3,'0')}</span>${known?`<div class="specimen-art ${art(id)}" aria-hidden="true"></div><span class="discovered-stamp">${t.discovered}</span>`:'<div class="mystery-art" aria-hidden="true">?</div>'}<h3>${known?(s.lang==='zh'?zh:en):'???'}</h3><p>${known?(s.lang==='zh'?noteZh:noteEn):`${t.habit}：???`}</p><small>${t.location}：${known?t[location]:'???'} · ${t.rarity}：${known?t[rarity]:'???'}</small>${known?`<div class="specimen-counts"><span>${t.encounters} <b>${r.encounters}</b></span><span>${t.defeated} <b>${r.defeated}</b></span><span>${t.escaped} <b>${r.escaped}</b></span></div>${r.fastest!=null?`<small>${t.fastest}：${r.fastest.toFixed(2)} ${t.seconds}</small>`:''}`:`<div class="unknown-label">${t.unknown}</div>`}</article>`;
      }).join('')}</div>`;
    } else if (view === 'achievements') {
      content.innerHTML = `<p class="meta-note">${t.achievementNote} <b>${s.unlocked.length} / ${ACHIEVEMENTS.length}</b></p><div class="achievement-list">${ACHIEVEMENTS.map(a=>{
        const done=s.unlocked.includes(a.id),secret=a.hidden&&!done;
        return `<article class="achievement ${done?'achieved':''}"><span class="achievement-icon">${secret?'🔒':a.icon}</span><div><h3>${secret?'???':a[s.lang][0]}</h3><p>${secret?'???':a[s.lang][1]}</p><small>${secret?'???':`+${a.reward} CP`} · ${done?t.claimed:t.locked}</small></div><span class="achievement-check">${done?'✓':'○'}</span></article>`;
      }).join('')}</div>`;
    } else {
      const seconds=Math.floor(s.career.playSeconds),formatted=`${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor(seconds/60)%60).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
      const favorite=Object.entries(s.career.usage).sort((a,b)=>b[1]-a[1])[0];
      const wins=Object.values(s.bossRecords).reduce((sum,r)=>sum+r.defeated,0),found=subjects.filter(([id])=>recordFor(s,id).encounters>0).length;
      content.innerHTML=`<div class="career-grid">${stat(t.playTime,formatted)}${stat(t.sessions,number(s.career.completed))}${stat(t.started,number(s.career.started))}${stat(t.kills,number(s.career.kills))}${stat(t.bossWins,wins)}${stat(t.best,s.best)}${stat(t.earned,number(s.career.totalCP))}${stat(t.species,`${found} / ${subjects.length}`)}${stat(t.done,`${s.unlocked.length} / ${ACHIEVEMENTS.length}`)}${stat(t.favorite,favorite&&favorite[1]>0?TOOLS[favorite[0]][s.lang][0]:t.noUsage)}</div><p class="meta-note">${t.careerNote}</p>`;
    }
  }
  document.querySelectorAll('[data-meta]').forEach(button => button.addEventListener('click',()=>{
    pause();view=button.dataset.meta;render();dialog.showModal();dialog.focus({preventScroll:true});
  }));
  tabs.addEventListener('click',e=>{const button=e.target.closest('[data-view]');if(button){view=button.dataset.view;render();tabs.querySelector(`[data-view="${view}"]`).focus()}});
  content.addEventListener('click',e=>{const button=e.target.closest('[data-tool]');if(!button)return;const id=button.dataset.tool,s=snapshot();s.owned.includes(id)?equip(id):purchase(id);render();content.querySelector(`[data-tool="${id}"]`)?.focus()});
  content.addEventListener('click',e=>{const button=e.target.closest('[data-scene]');if(!button)return;const id=button.dataset.scene,s=snapshot();s.ownedScenes.includes(id)?selectScene(id):purchaseScene(id);render();content.querySelector(`[data-scene="${id}"]`)?.focus()});
  document.getElementById('meta-close').addEventListener('click',()=>dialog.close());
  document.getElementById('meta-language').addEventListener('click',()=>{changeLanguage();render()});
  return { refresh:render, get open(){return dialog.open} };
}
