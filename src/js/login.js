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
  try {
    // створюєм нового користувача
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      refs.email.value,
      refs.password.value
    );

    // якщо створено успішно
    if (userCredential && auth.currentUser) {
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: refs.inputName.value,
        photoURL: 'https://picsum.photos/50/50?random=1',
      });
      Notify.success('Registration was successful!');

      setTimeout(function () {
        window.location.href = '/teamwork-js/';
      }, 500);
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Notify.warning(
        'This email address is already registered. Please go to the tab signin.'
      );
    } else {
      Notify.error('An error occurred during registration.');
    }
  }
}

async function signin() {
  try {
    //звертаємось до юзера (повертається url, name, email)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      refs.email.value,
      refs.password.value
    );
    const user = userCredential.user;
    console.log(user); // повертається  url, name, email
    // localStorage.setItem('user', JSON.stringify(user));
    refs.form.reset();
    error = '';
    Notify.success('Authorization was successful!');

    setTimeout(function () {
      window.location.href = '/teamwork-js/';
    }, 500);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    error = 'Invalid user email or password';
    Notify.failure(error);
  }
}
// перевірка, якщо юзер авторизований - змінюємо розмітку 
auth.onAuthStateChanged(function (user) {
  console.log('perevirka', user);

  if (user) {
    Notify.success(
      `Successful authorized! You will be redirected to the home page`
    );
  } else {
    Notify.info('Need authorized');
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
