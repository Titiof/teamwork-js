import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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
  refs.signupBtn.classList.toggle('active');
  refs.signinBtn.classList.toggle('active');
  if (activeTab === 'signin') {
    refs.containerNameInput.classList.add('is-hidden');
    refs.loginSubmitBtn.textContent = 'Sign in';
  }
  if (activeTab === 'signup') {
    refs.containerNameInput.classList.remove('is-hidden');
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
  await createUserWithEmailAndPassword(
    auth,
    refs.email.value,
    refs.password.value
  )
    .then(userCredential => {
      const user = userCredential.user;
      const displayName = refs.inputName.value;
      console.log(displayName);
      user.updateProfile({
        displayName: displayName,
      });

      localStorage.setItem('user', JSON.stringify(user));
      refs.form.reset();
      error = '';
      Notify.success('Registration was successful!');

      setTimeout(function () {
      window.location.href = '/teamwork-js/';
      }, 3000);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-login-credentials') {
        error = 'invalid user email or passsword2';
        Notify.failure(error);
      }
    });
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
        window.location.href = '/teamwork-js/';
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
