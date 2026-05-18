const lenis = new Lenis({ smoothWheel: true, lerp: 0.075 });
requestAnimationFrame(function raf(t){ lenis.raf(t); requestAnimationFrame(raf); });
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-img]').forEach(el=>el.style.setProperty('--img', `url(${el.dataset.img})`));

const stages = [
  { sel: '.hope', bg: '#f5fff7', ink: '#173022', filter: 'saturate(1.1)' },
  { sel: '.waiting,.drought,.burden,.system', bg: '#f3f0e8', ink: '#2f2d26', filter: 'saturate(.55) sepia(.18)' },
  { sel: '.turning,.model,.amina,.impact', bg: '#f6fbf7', ink: '#15261b', filter: 'saturate(1)' },
  { sel: '.closing', bg: '#ffffff', ink: '#111a14', filter: 'saturate(1)' }
];

stages.forEach(stage => {
  ScrollTrigger.create({
    trigger: stage.sel.split(',')[0],
    start: 'top 45%',
    end: 'bottom 45%',
    onEnter: () => {
      document.body.style.background = stage.bg;
      document.body.style.color = stage.ink;
      document.getElementById('atmosphere').style.filter = stage.filter;
    },
    onEnterBack: () => {
      document.body.style.background = stage.bg;
      document.body.style.color = stage.ink;
      document.getElementById('atmosphere').style.filter = stage.filter;
    }
  });
});

gsap.utils.toArray('.month').forEach(month=>{
  const targets = month.querySelectorAll('h1,h2,p,.line,.month-label,article,span,strong');
  gsap.from(targets,{opacity:0,y:28,duration:1,stagger:0.045,ease:'power2.out',scrollTrigger:{trigger:month,start:'top 76%'}});
});

const io = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting) return;
  const el=entry.target; const target=parseFloat(el.dataset.target); let n=0;
  const step=()=>{ n += (target-n)*0.1; if(Math.abs(target-n)<0.02) n=target; el.textContent = target%1 ? n.toFixed(2) : `${Math.round(n)}`; if(n!==target) requestAnimationFrame(step);};
  step(); io.unobserve(el);
}),{threshold:.45});
document.querySelectorAll('.count').forEach(el=>io.observe(el));

gsap.to('#grain',{opacity:.08,duration:2.2,repeat:-1,yoyo:true,ease:'sine.inOut'});
