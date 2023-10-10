// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw",
  authDomain: "book-bc5e2.firebaseapp.com",
  projectId: "book-bc5e2",
  storageBucket: "book-bc5e2.appspot.com",
  messagingSenderId: "258455649332",
  appId: "1:258455649332:web:4a54c5fd8564a412d79e61",
  measurementId: "G-2EMZHHRVM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);