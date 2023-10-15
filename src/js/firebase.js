import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './login/global';

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
      email.value.trim(),
      password.value.trim()
    );

    if (userCredential && auth.currentUser) {
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: name.value.trim(),
        photoURL: 'https://picsum.photos/50/50?random=1',
      });
      Notify.success('Registration was successful!', notifyOptions);

      setTimeout(function () {
        window.location.href = '/teamwork-js/';
      }, 500);
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Notify.warning(
        'This email address is already registered. Please go to the tab signin.',
        {
          timeout: 3000,
          clickToClose: true,
        }
      );
    } else {
      Notify.error('An error occurred during registration.', notifyOptions);
    }
  }
}

export async function signin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value.trim()
    );
    const user = userCredential.user;
    Notify.success('Authorization was successful!', notifyOptions);

    setTimeout(function () {
      window.location.href = '/teamwork-js/';
    }, 500);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    error = 'Invalid user email or password';
    Notify.failure(error, notifyOptions);
  }
}
