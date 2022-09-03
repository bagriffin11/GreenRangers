// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";

import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA7o75YGW8-1pBBlbYyB5aRZQBcXFVf0V8",
    authDomain: "green-rangers.firebaseapp.com",
    projectId: "green-rangers",
    storageBucket: "green-rangers.appspot.com",
    messagingSenderId: "352458105159",
    appId: "1:352458105159:web:287643d045183df9e56c62",
    measurementId: "G-1LLX83GXWP"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();