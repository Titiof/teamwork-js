import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
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

const logoutLink = document.querySelector('#logout-link');

logoutLink.addEventListener('click', onLogoutClick);

async function onLogoutClick() {
  try {
    const user = await auth.currentUser;
    if (user) {
      await auth.signOut();
      Notify.info('The user has logged out of the account');
    } else {
      Notify.info('The user is not authorized');
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    Notify.success(`Authorized user: ${user.displayName}`);
  } else {
    // Notify.info('The user is not authorized');
  }
});
