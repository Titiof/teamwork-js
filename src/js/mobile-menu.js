import { getAuth } from 'firebase/auth';
const auth = getAuth();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');

    if (!isMenuOpen) {
      mobileMenu.classList.remove('is-hidden');
      setTimeout(() => {
        mobileMenu.classList.add('is-open');
      }, 400);
    } else {
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

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  hideMenuOnSmallScreen();
})();

(() => {
  const hideMenuOnSmallScreen = matches => {
    const menu = document.querySelector('.menu');
    if (matches) {
      menu.classList.add('is-hidden');
    } else {
      menu.classList.remove('is-hidden');
    }
  };

  const mediaQuery = window.matchMedia('(max-width: 767px)');

  hideMenuOnSmallScreen(mediaQuery.matches);

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

  toggleVisibility();

  mediaQuery.addEventListener('change', toggleVisibility);
})();

// =============================================

const loginContainer = document.querySelector('.mobile-loginbtn-container');
const mobProContainer = document.querySelector('.mobile-profile-container');
const userMobNameBtn = document.querySelector('.profile-mob-text');
const logoutButton = document.querySelector('.mobile-logoutbtn-container');
const userMobImageBtn = document.querySelector('#userMobImage');
const defaultUserImage = './images/sprite.svg#user';
const menuList = document.querySelector('.mobile-menu');
auth.onAuthStateChanged(user => {
  if (user) {
    loginContainer.classList.add('is-hidden');
    mobProContainer.classList.remove('is-hidden');

    // const userImageURL = user.photoURL;
    const userImageURL = '';

    if (userImageURL) {
      userMobImageBtn.src = userImageURL;
      userMobImageBtn.classList.remove('is-hidden');
      userMobImageBtn.nextElementSibling.classList.add('is-hidden');
    } else {
      userMobImageBtn.classList.add('is-hidden');
      userMobImageBtn.nextElementSibling.classList.remove('is-hidden');
    }

    const userName = user.displayName || 'User';
    userMobNameBtn.textContent = `${userName}`;
    menuList.classList.remove('is-hidden');
  } else {
    loginContainer.classList.remove('is-hidden');
    mobProContainer.classList.add('is-hidden');
    menuList.classList.add('is-hidden');
  }
});

logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    mobProContainer.classList.add('is-hidden');
    logoutButton.classList.add('is-hidden');
  });
});
