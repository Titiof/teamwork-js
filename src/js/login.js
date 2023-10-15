import { signup, signin, checkAuthState } from './firebase';

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
  activeTab === 'signup'
    ? await signup(refs.email, refs.password, refs.inputName)
    : await signin(refs.email, refs.password);
}

// перевірка, якщо юзер авторизований - змінюємо розмітку

checkAuthState();

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
