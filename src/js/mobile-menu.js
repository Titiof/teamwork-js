(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    
    if (!isMenuOpen) {
      // If the menu is closed, open it
      mobileMenu.classList.remove('is-hidden');
      mobileMenu.classList.add('is-open');
    } else {
      // If the menu is open, close it
      mobileMenu.classList.remove('is-open');
       setTimeout(() => {
      mobileMenu.classList.add('is-hidden');
    }, 400);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  const hideMenuOnSmallScreen = () => {
    if (window.innerWidth <= 320 && !mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.add('is-hidden');
    } else {
      mobileMenu.classList.remove('is-hidden');
    }
  };

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  hideMenuOnSmallScreen();
})();