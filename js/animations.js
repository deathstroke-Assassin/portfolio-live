(() => {
  const revealItems = document.querySelectorAll('[data-reveal]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    return;
  }
  document.querySelectorAll('[data-stagger]').forEach(group => {
    [...group.querySelectorAll('[data-reveal]')].forEach((item, index) => item.style.setProperty('--stagger-delay', `${Math.min(index * 65, 390)}ms`));
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .12, rootMargin: '0px 0px -35px 0px' });
  revealItems.forEach(item => observer.observe(item));
})();
