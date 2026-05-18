const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-img]').forEach((el) => {
  el.style.setProperty('--img', `url(${el.dataset.img})`);
});

gsap.from('.hero .eyebrow, .hero .tag, .hero h1, .hero .sub', {
  y: 42,
  opacity: 0,
  stagger: 0.14,
  duration: 1.15,
  ease: 'power3.out'
});

gsap.to('.sun-ring', { rotate: 360, duration: 18, repeat: -1, ease: 'none' });
gsap.to('.sun', { scale: 1.06, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

gsap.utils.toArray('.section').forEach((section) => {
  const items = section.querySelectorAll('h2, h3, p, li, article, .small, blockquote, .kpis span');
  gsap.from(items, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    stagger: 0.05,
    ease: 'power2.out',
    scrollTrigger: { trigger: section, start: 'top 78%' }
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.target);
    let val = 0;
    const tick = () => {
      val += (target - val) * 0.11;
      if (Math.abs(target - val) < 0.02) val = target;
      el.textContent = target % 1 ? val.toFixed(2) : `${Math.round(val)}`;
      if (val !== target) requestAnimationFrame(tick);
    };
    tick();
    io.unobserve(el);
  });
}, { threshold: 0.35 });
document.querySelectorAll('.count').forEach((el) => io.observe(el));

const growth = document.getElementById('growth');
if (growth) {
  const len = growth.getTotalLength();
  growth.style.strokeDasharray = `${len}`;
  growth.style.strokeDashoffset = `${len}`;
  gsap.to(growth, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.impact', start: 'top 65%' }
  });
}

const moneyPath = document.getElementById('moneyPath');
if (moneyPath) {
  const ml = moneyPath.getTotalLength();
  moneyPath.style.strokeDasharray = `${ml}`;
  moneyPath.style.strokeDashoffset = `${ml}`;
  gsap.to(moneyPath, {
    strokeDashoffset: 0,
    duration: 2.2,
    ease: 'power1.inOut',
    scrollTrigger: { trigger: '.solution', start: 'top 60%' }
  });
}

ScrollTrigger.create({
  trigger: '#hero',
  start: 'top top',
  end: 'bottom top',
  scrub: true,
  onUpdate: (self) => gsap.to('.hero-content', { y: self.progress * 120, opacity: 1 - self.progress * 0.35, overwrite: true })
});
