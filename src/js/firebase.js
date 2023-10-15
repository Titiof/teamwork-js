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

export async function signup(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    // якщо створено успішно

    if (userCredential && auth.currentUser) {
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: name.value,
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

export async function signin(email, password) {
  try {
    //звертаємось до юзера (повертається url, name, email)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    console.log(user); // повертається  url, name, email
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

export function checkAuthState() {
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
}

export function setDarkMode(value) {
  // if (auth.currentUser) {
  //   sendEmailVerification(auth.currentUser);
  //   updateProfile(auth.currentUser, {
  //     darkMode: value,
  //   });
  // }
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;

    // Отримайте посилання на документ користувача в Firestore (зазвичай за його ID користувача).
    const userDoc = firestore().collection('users').doc(userId);

    // Оновіть поле darkMode в документі користувача.
    userDoc
      .update({
        darkMode: value,
      })
      .then(() => {
        console.log('Значення darkMode оновлено в Firestore.');
      })
      .catch(error => {
        console.error('Помилка при оновленні darkMode в Firestore: ', error);
      });
  }
}

export function addBooksToUserCart(cart) {
  const user = firebase.auth().currentUser;
  if (user) {
    const userDocRef = db.collection('users').doc(user.uid);
    userDocRef.update({
      cart,
    });
  }
  console.log(12314);
}
