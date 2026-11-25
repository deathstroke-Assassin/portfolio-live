(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('mak-portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const themeButton = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function updateThemeControl() {
    const light = root.dataset.theme === 'light';
    themeButton?.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
    if (themeButton) themeButton.innerHTML = `<i class="fa-regular ${light ? 'fa-moon' : 'fa-sun'}" aria-hidden="true"></i><span class="theme-label">${light ? 'Dark' : 'Light'}</span>`;
    themeMeta?.setAttribute('content', light ? '#F3F8FF' : '#17121d');
  }
  updateThemeControl();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('mak-portfolio-theme', root.dataset.theme);
    updateThemeControl();
  });
})();
