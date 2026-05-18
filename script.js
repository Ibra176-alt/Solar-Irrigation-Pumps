// HERVeg.05 cinematic proposal interactions
const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf);} requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

// dynamic image bindings so uploaded assets are easy to swap
for (const section of document.querySelectorAll('[data-img]')) {
  section.style.setProperty('--img', `url(${section.dataset.img})`);
}

gsap.from('.hero .reveal, .hero .sub, .eyebrow', { y: 40, opacity: 0, stagger: 0.15, duration: 1.2, ease: 'power3.out' });
gsap.to('.sun-ring', { rotate: 360, duration: 18, repeat: -1, ease: 'none' });
gsap.to('.sun', { scale: 1.06, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });

document.querySelectorAll('.section h2, .section p, .section article, .kpis span').forEach(el=>{
  gsap.from(el,{opacity:0,y:25,duration:.7,scrollTrigger:{trigger:el,start:'top 88%'}})
});

const io = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const el = entry.target; const end = parseFloat(el.dataset.target); let cur = 0;
  const step = () => { cur += (end - cur) * 0.12; if (Math.abs(end-cur) < 0.01) cur = end;
    el.textContent = end % 1 ? cur.toFixed(2) : Math.round(cur);
    if (cur !== end) requestAnimationFrame(step);
  }; step(); io.unobserve(el);
}), { threshold: 0.4 });
document.querySelectorAll('.count').forEach(el => io.observe(el));

const growth = document.getElementById('growth');
const length = growth.getTotalLength();
growth.style.strokeDasharray = `${length}`; growth.style.strokeDashoffset = `${length}`;
gsap.to(growth,{strokeDashoffset:0,duration:2,ease:'power2.out',scrollTrigger:{trigger:'.impact',start:'top 65%'}});
