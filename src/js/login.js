import { signup, signin } from './firebase';

let activeTab = 'signup';

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
