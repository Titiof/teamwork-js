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

      setTimeout(() => {
        mobileMenu.classList.remove('is-open');
      }, 500);
      setTimeout(() => {
        mobileMenu.classList.add('is-hidden');
      }, 800);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  const hideMenuOnSmallScreen = () => {
    if (!mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.add('is-hidden');
    } else {
      mobileMenu.classList.remove('is-hidden');
    }
  };

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  hideMenuOnSmallScreen();
})();

(() => {
  // Function to hide the menu on small screens
  const hideMenuOnSmallScreen = matches => {
    const menu = document.querySelector('.menu');
    if (matches) {
      menu.classList.add('is-hidden');
    } else {
      menu.classList.remove('is-hidden');
    }
  };

  // Check if the screen width matches the condition
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  // Initial check and setup
  hideMenuOnSmallScreen(mediaQuery.matches);

  // Add a listener to detect changes in screen width
  mediaQuery.addEventListener('change', e => {
    hideMenuOnSmallScreen(e.matches);
  });
})();

(() => {
  const profileContainer = document.querySelector('.profile-container');
  const signupContainer = document.querySelector('.signup-container');

  const mediaQuery = window.matchMedia('(max-width: 767px)');

  const toggleVisibility = () => {
    if (mediaQuery.matches) {
      profileContainer.classList.add('is-hidden');
      signupContainer.classList.add('is-hidden');
    } else {
      profileContainer.classList.add('is-hidden');
      signupContainer.classList.remove('is-hidden');
    }
  };

  // Initial check and setup
  toggleVisibility();

  // Add a listener to detect changes in screen width
  mediaQuery.addEventListener('change', toggleVisibility);
})();
