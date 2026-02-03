(function () {
  const menuButton = document.querySelector('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  function closeMenu() {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (!mobileMenu || !menuButton) return;
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', toggleMenu);

    mobileMenu.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const buttons = document.querySelectorAll('button');
  buttons.forEach((b) => {
    if (b.textContent && b.textContent.trim() === 'Register') {
      b.addEventListener('click', () => {
        alert('Next: we will connect this button to Django registrations + M-Pesa payments.');
      });
    }
  });
})();
