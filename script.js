const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
requestAnimationFrame(function raf(t){ lenis.raf(t); requestAnimationFrame(raf); });
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-img]').forEach(el=>el.style.setProperty('--img', `url(${el.dataset.img})`));

gsap.utils.toArray('.act').forEach((act)=>{
  gsap.from(act.querySelectorAll('.line,.kicker,h2,h3,p,article,span'),{
    opacity:0,y:30,stagger:0.05,duration:1,ease:'power2.out',
    scrollTrigger:{trigger:act,start:'top 78%'}
  });
});

const io = new IntersectionObserver((entries)=>entries.forEach(entry=>{
  if(!entry.isIntersecting) return;
  const el=entry.target,target=parseFloat(el.dataset.target);let v=0;
  const step=()=>{v += (target-v)*0.09; if(Math.abs(target-v)<0.02) v=target;
    el.textContent = target%1 ? v.toFixed(2) : `${Math.round(v)}`;
    if(v!==target) requestAnimationFrame(step);
  }; step(); io.unobserve(el);
}),{threshold:.5});
document.querySelectorAll('.count').forEach(el=>io.observe(el));

['impactPath'].forEach(id=>{const p=document.getElementById(id);if(!p)return;const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;gsap.to(p,{strokeDashoffset:0,duration:2.4,ease:'power2.out',scrollTrigger:{trigger:'.impact',start:'top 65%'}})});

gsap.to('.noise',{opacity:.09,duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
