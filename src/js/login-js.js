//firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw',
  authDomain: 'book-bc5e2.firebaseapp.com',
  projectId: 'book-bc5e2',
  storageBucket: 'book-bc5e2.appspot.com',
  messagingSenderId: '258455649332',
  appId: 'YOUR_APP_ID',
};

// open / close modal

const refs = {
  openModalBtn: document.querySelector('.js-login-open'),
  closeModalBtn: document.querySelector('.js-login-btn'),
  modal: document.querySelector('.js-backdrop'),
  form: document.querySelector('.js-login-form'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.form.addEventListener('submit', onFormSubmit);

// change class is-hidden
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

// form element submit

function onFormSubmit(e) {
  e.preventDefault();
  const userName = e.target.elements['user_name'].value;
  const userEmail = e.target.elements['user_email'].value;
  const userPass = e.target.elements['user_password'].value;
  console.log(userName, userEmail, userPass);

  //======================
  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then(userCredential => {
      // Користувача успішно зареєстровано
      const user = userCredential.user;
      console.log('User registered:', user);

      // Додайте код для збереження інформації користувача, наприклад, імені, в базі даних
      // Наприклад, ви можете використовувати Firestore для збереження списку покупок користувача.

      e.target.reset();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);
    });
}

//======================

// e.target.reset();
