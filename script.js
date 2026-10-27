// 修改这里的日期为你们真正确定关系的日期，格式：年, 月(从1开始), 日
const RELATIONSHIP_START = new Date(2026, 5, 29); // 当前默认：2026年6月29日

function updateCounter() {
  const today = new Date();
  const start = new Date(RELATIONSHIP_START.getFullYear(), RELATIONSHIP_START.getMonth(), RELATIONSHIP_START.getDate());
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diff = Math.max(0, Math.floor((now - start) / 86400000));
  document.getElementById('daysTogether').textContent = diff;
  document.getElementById('startDateLabel').textContent =
    `${start.getFullYear()}.${String(start.getMonth()+1).padStart(2,'0')}.${String(start.getDate()).padStart(2,'0')}`;
}
updateCounter();

const envelope = document.getElementById('envelope');
const letterMessage = document.getElementById('letterMessage');
document.getElementById('openLetter').addEventListener('click', () => {
  envelope.classList.add('open');
  letterMessage.hidden = false;
  setTimeout(() => letterMessage.scrollIntoView({behavior:'smooth', block:'center'}), 250);
});
document.getElementById('closeLetter').addEventListener('click', () => {
  letterMessage.hidden = true;
  envelope.classList.remove('open');
});

const surpriseLines = [
  '今日份的偏爱，已送达。♡',
  '世界很大，但我想把好多小事都讲给你听。',
  '希望你今天开心，明天也开心，以后的每一天都有人认真爱你。',
  '恭喜你解锁隐藏成就：被我偷偷喜欢着。✦',
  '如果可以的话，未来的很多个纪念日，我也想和你一起过。'
];
let surpriseIndex = 0;
document.getElementById('surpriseBtn').addEventListener('click', (event) => {
  document.getElementById('surpriseMessage').textContent = surpriseLines[surpriseIndex % surpriseLines.length];
  surpriseIndex++;
  burstHearts(event.clientX || window.innerWidth/2, event.clientY || window.innerHeight/2);
});
function burstHearts(x,y) {
  const symbols = ['♡','♥','✦','✧','💗'];
  for(let i=0;i<18;i++){
    const el=document.createElement('span');
    el.className='heart-burst';
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=x+'px'; el.style.top=y+'px';
    el.style.setProperty('--dx', (Math.random()*300-150)+'px');
    el.style.setProperty('--dy', (Math.random()*-260-30)+'px');
    el.style.color=['#d47f96','#b86d83','#e7a7b5','#c79aab'][i%4];
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1450);
  }
}
