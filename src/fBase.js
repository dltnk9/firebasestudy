import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDveJkGQzLGlgbYKIosfIjTzmmHNS-0Sbo",
  authDomain: "nwitter-ba387.firebaseapp.com",
  projectId: "nwitter-ba387",
  storageBucket: "nwitter-ba387.appspot.com",
  messagingSenderId: "70326087607",
  appId: "1:70326087607:web:40311a9ad559c796d70232"
};

// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

// export const authService = firebase.auth();

const app = initializeApp(firebaseConfig);
export const authService = getAuth();