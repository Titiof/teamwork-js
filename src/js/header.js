import { getAuth } from 'firebase/auth';
const auth = getAuth();

const currentPath = window.location.pathname;
// додава авторизацію Владислав
const user = JSON.parse(localStorage.getItem('user'));
// console.log(user);

// додати прослуховувача подій для кнопки logout і видаляй свого юсера з локалсторедж (код нижче)
// localStorage.removeItem('user');
// =============================

function setActiveLink(className, currentPath) {
  const links = document.querySelectorAll(`.${className}`);

  links.forEach(link => {
    if (link.href) {
      try {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } catch (error) {
        console.error(`Invalid URL for link: ${link.href}`);
      }
    }
  });
}

setActiveLink('mob-link', currentPath);
setActiveLink('nav-link', currentPath);

const signupContainer = document.querySelector('.signup-container');
const userContainer = document.querySelector('.profile-container');
const userNameBtn = document.querySelector('.profile-text');
const logoutButton = document.querySelector('.logout-container');
const userImageBtn = document.querySelector('#userImage');
const defaultUserImage = './images/sprite.svg#user';
const navList = document.querySelector('.nav-list');

let hideTimeout;

auth.onAuthStateChanged(user => {
  const windowWidth = window.innerWidth;

  if (user) {
    userContainer.classList.remove('is-hidden');

    if (windowWidth < 768) {
      signupContainer.classList.add('is-hidden');
    } else {
      signupContainer.classList.remove('is-hidden');
    }

    // const userImageURL = user.photoURL;
    const userImageURL = '';

    if (userImageURL) {
      userImageBtn.src = userImageURL;
      userImageBtn.classList.remove('is-hidden');
      userImageBtn.nextElementSibling.classList.add('is-hidden');
    } else {
      userImageBtn.classList.add('is-hidden');
      userImageBtn.nextElementSibling.classList.remove('is-hidden');
    }

    const userName = user.displayName || 'User';
    userNameBtn.textContent = userName;

    logoutButton.classList.add('is-hidden');

    userContainer.addEventListener('mouseenter', () => {
      hideTimeout = setTimeout(() => {
        logoutButton.classList.remove('is-hidden');
      }, 300);
    });
    userContainer.addEventListener('mouseleave', () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        logoutButton.classList.add('is-hidden');
      }, 300);
    });

    navList.classList.remove('is-hidden');
  } else {
    if (windowWidth < 768) {
      signupContainer.classList.add('is-hidden');
    } else {
      signupContainer.classList.remove('is-hidden');
    }

    userContainer.classList.add('is-hidden');
    logoutButton.classList.add('is-hidden');
    navList.classList.add('is-hidden');
  }
});

logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {});
});

// function hideSignupContainer() {
//   signupContainer.classList.add('is-hidden');
// }

// function showSignupContainer() {
//   signupContainer.classList.remove('is-hidden');
// }

// function hideProfileContainer() {
//   userContainer.classList.add('is-hidden');
// }

// function showProfileContainer() {
//   userContainer.classList.remove('is-hidden');
// }

// window.addEventListener('resize', () => {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 767) {
//     hideSignupContainer();
//     hideProfileContainer();
//   } else {
//     showSignupContainer();
//     showProfileContainer();
//   }
// });

// const screenWidth = window.innerWidth;

// if (screenWidth < 767) {
//   hideSignupContainer();
//   hideProfileContainer();
// } else {
//   showSignupContainer();
//   showProfileContainer();
// }
