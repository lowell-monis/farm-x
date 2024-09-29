// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHt1Wi0d3m2cjCYN3wNKrSeNzHck749MQ",
  authDomain: "farmx-672aa.firebaseapp.com",
  projectId: "farmx-672aa",
  storageBucket: "farmx-672aa.appspot.com",
  messagingSenderId: "883805210436",
  appId: "1:883805210436:web:eaea0cd71ed04f793f3911",
  measurementId: "G-T09LQ3XYTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);