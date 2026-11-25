(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const topButton = document.querySelector('.back-to-top');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    document.body.classList.add('custom-cursor');
    window.addEventListener('pointermove', event => {
      const point = `translate(${event.clientX}px, ${event.clientY}px)`;
      dot.style.transform = point;
      ring.style.transform = point;
    }, { passive: true });
  }

  function closeMenu() {
    menu?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  }
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => {
      const active = link.hash === `#${visible.target.id}` || (visible.target.id === 'work-with' && link.hash === '#skills');
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .1, .3, .6] });
  sections.forEach(section => sectionObserver.observe(section));

  const topObserver = new IntersectionObserver(([entry]) => topButton?.classList.toggle('visible', !entry.isIntersecting), { threshold: 0 });
  const hero = document.querySelector('#home');
  if (hero) topObserver.observe(hero);
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'instant' }));

  document.querySelectorAll('img[data-fallback]').forEach(image => {
    const showFallback = () => {
      const fallback = document.createElement('div');
      fallback.className = `image-fallback ${image.classList.contains('profile-image') ? 'profile-image' : 'about-image'}`;
      fallback.setAttribute('role', 'img');
      fallback.setAttribute('aria-label', image.alt);
      fallback.textContent = image.dataset.fallback;
      image.replaceWith(fallback);
    };
    image.addEventListener('error', showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
  document.querySelector('#year').textContent = new Date().getFullYear();

})();
