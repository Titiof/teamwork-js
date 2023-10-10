import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

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

const refs = {
  closeModalBtn: document.querySelector('.js-login-btn'),
  modal: document.querySelector('.js-backdrop'),
  form: document.querySelector('.js-login-form'),
};

// refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', onCloseModalClick);
refs.form.addEventListener('submit', onFormSubmit);

// change class is-hidden
// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
// }

function onCloseModalClick() {
  window.history.back();
}

async function onFormSubmit(e) {
  e.preventDefault();
  const userName = e.target.elements['user_name'].value;
  const email = e.target.elements['user_email'].value;
  const password = e.target.elements['user_password'].value;

  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user))
      e.target.reset();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
