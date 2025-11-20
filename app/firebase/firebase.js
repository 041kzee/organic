"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc6Xms_FrZ0o-wBmbbpcfxMzywQHBytVY",
  authDomain: "green-fields-39a3c.firebaseapp.com",
  projectId: "green-fields-39a3c",
  storageBucket: "green-fields-39a3c.appspot.com",

  messagingSenderId: "869729853208",
  appId: "1:869729853208:web:4b64b1f555d2e71526086d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);