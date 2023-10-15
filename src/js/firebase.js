import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

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
const db = getFirestore(app);
const shoppingRef = collection(db, 'shopping-list');

export async function signup(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value.trim()
    );

    // якщо створено успішно

    if (userCredential && auth.currentUser) {
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: name.value.trim(),
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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value.trim()
    );
    const user = userCredential.user;
    console.log(user); // повертається  url, name, email
    // refs.form.reset();
    error = '';
    Notify.success('Authorization was successful!');

    setTimeout(function () {
      window.location.href = '/teamwork-js/';
    }, 500);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
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

export function addBooksToUserCart(bookId) {
  console.log('test');
  const user = auth.currentUser;

  console.log(user);
  //як дістати з бази всі книги
  // const querySnapshot = getDocs(shoppingRef).then(res => {
  //   res.forEach(doc => {
  //     console.log(doc.data());
  //   });
  // });

  //як додати до бази даних книгу с айді
  setDoc(doc(shoppingRef, 'cart'), {
    id: bookId,
  });
}
