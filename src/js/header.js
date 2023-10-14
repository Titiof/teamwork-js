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

// // Get references to the signup and user containers
// const signupContainer = document.getElementById('signup-container');
// const userContainer = document.getElementById('profile-container');

// // Get a reference to the signup form and the signup button
// const signupForm = document.getElementById('js-login-form');
// const signupButton = document.getElementById('login-submit-btn');

// // Add an event listener to the signup button
// signupButton.addEventListener('click', () => {
//   // Assuming you've successfully signed up the user
//   // You can add your signup logic here

//   // Hide the signup container
//   signupContainer.classList.add('is-hidden');

//   // Show the user container
//   userContainer.classList.remove('is-hidden');
//   // You can populate the user container with user-specific content here
// });

const signupContainer = document.querySelector('.signup-container');
const userContainer = document.querySelector('.profile-container');
const userNameBtn = document.querySelector('.profile-text');
const logoutButton = document.querySelector('.logout-container');
const userImageBtn = document.querySelector('#userImage');
const defaultUserImage = './images/sprite.svg#user';
auth.onAuthStateChanged(user => {
  if (user) {
    signupContainer.classList.add('is-hidden');
    userContainer.classList.remove('is-hidden');
   
    // const userImageURL = user.photoURL; 
     const userImageURL = ''; 

if (userImageURL) {
  userImage.src = userImageURL;
  userImage.classList.remove('is-hidden'); 
  userImage.nextElementSibling.classList.add('is-hidden'); 
} else {
  
  userImage.classList.add('is-hidden'); 
  userImage.nextElementSibling.classList.remove('is-hidden'); 
}

    const userName = user.displayName || 'User';
    userNameBtn.textContent = `${userName}`;
  } else {
    
    signupContainer.classList.remove('is-hidden');
    userContainer.classList.add('is-hidden');
  }
});

logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
  });
});




logoutButton.classList.add('is-hidden'); 

userContainer.addEventListener('mouseenter', () => {
  setTimeout(() => {
    logoutButton.classList.remove('is-hidden');
  }, 300); 
});

logoutButton.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); 
});

let hideTimeout; 

userContainer.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    logoutButton.classList.add('is-hidden');
  }, 300); 
});

logoutButton.addEventListener('mouseleave', () => {
  clearTimeout(hideTimeout); 
});