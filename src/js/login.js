import { initializeApp } from 'firebase/app';

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: 'AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw',
  authDomain: 'book-bc5e2.firebaseapp.com',
  projectId: 'book-bc5e2',
  storageBucket: 'book-bc5e2.appspot.com',
  messagingSenderId: '258455649332',
  appId: '1:258455649332:web:4a54c5fd8564a412d79e61',
  measurementId: 'G-2EMZHHRVM8',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let activeTab = 'signup';
let error = '';

const refs = {
  signinBtn: document.querySelector('.login-sign-in'),
  signupBtn: document.querySelector('.login-sign-up'),
  closeModalBtn: document.querySelector('.js-login-btn'),
  modal: document.querySelector('.js-backdrop'),
  form: document.querySelector('.js-login-form'),
  inputName: document.querySelector('#user_name'),
  email: document.querySelector('#user_email'),
  password: document.querySelector('#user_password'),
  loginSubmitBtn: document.querySelector('.login-submit-btn'),
  containerNameInput: document.querySelector('#login-field-name'),
};

refs.closeModalBtn.addEventListener('click', onCloseModalClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.signinBtn.addEventListener('click', onSigninClick);
refs.signupBtn.addEventListener('click', onSignupClick);

function onSigninClick() {
  refs.form.reset();

  activeTab = 'signin';
  changeActiveTab();
}

function onSignupClick() {
  refs.form.reset();

  activeTab = 'signup';
  changeActiveTab();
}

function changeActiveTab() {
  if (activeTab === 'signin') {
    refs.signupBtn.classList.remove('active');
    refs.signinBtn.classList.add('active');
    refs.containerNameInput.classList.add('is-hidden');
    refs.inputName.required = false;

    refs.loginSubmitBtn.textContent = 'Sign in';
  }
  if (activeTab === 'signup') {
    refs.signupBtn.classList.add('active');
    refs.signinBtn.classList.remove('active');
    refs.containerNameInput.classList.remove('is-hidden');
    refs.inputName.required = true;
    refs.loginSubmitBtn.textContent = 'Sign up';
  }
}

function onCloseModalClick() {
  window.history.back();
}

async function onFormSubmit(e) {
  e.preventDefault();
  activeTab === 'signup' ? signup() : signin();
}

async function signup() {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    refs.email.value,
    refs.password.value
  );
  if (userCredential && auth.currentUser) {
    try {
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: refs.inputName.value,
        photoURL: 'https://picsum.photos/50/50?random=1',
      });
      setTimeout(function () {
        window.location.href = '/teamwork-js/';
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
}

async function signin() {
  signInWithEmailAndPassword(auth, refs.email.value, refs.password.value)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      refs.form.reset();
      error = '';
      // Notify.success('Authorization was successful!');

      setTimeout(function () {
        // window.location.href = '/teamwork-js/';
      }, 3000);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      error = 'invalid user email or passsword';

      Notify.failure(error);
    });
}

//=======Для кнопки логаут

document.querySelector('.login-logout').addEventListener('click', function () {
  auth
    .signOut()
    .then(function () {
      localStorage.removeItem('user');
      console.log('Користувач не авторизований');
    })
    .catch(function (error) {
      console.error('Error whith enter', error);
    });
});

auth.onAuthStateChanged(function (user) {
  console.log(user);

  if (user) {
    Notify.success(`Authorized user: ${user.email}`);
  } else {
    Notify.info('Need authrized');
  }
});
/// це додати в шопінг ліст
// import {
//   collection,
//   doc,
//   getDocs,
//   getFirestore,
//   setDoc,
// } from 'firebase/firestore';

// const db = getFirestore(app);

// const shoppingRef = collection(db, 'shopping-list');

// //як дістати з бази всі книги
// const querySnapshot = getDocs(shoppingRef).then(res => {
//   res.forEach(doc => {
//     console.log(doc.data());
//   });
// });

// //як додати до бази даних книгу с айді
// setDoc(doc(shoppingRef, 'list_name'), {
//   id: 231231,
// });
