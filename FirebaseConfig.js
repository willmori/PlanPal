// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4i3xN0KB7PzsiF9ybdK4WuR2ILGIilRE",
  authDomain: "planpal-992f9.firebaseapp.com",
  projectId: "planpal-992f9",
  storageBucket: "planpal-992f9.appspot.com",
  messagingSenderId: "493837676775",
  appId: "1:493837676775:web:f156343e6215b8bb537242",
  measurementId: "G-M9EBWP7VZT"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);