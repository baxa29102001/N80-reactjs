// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6dI5xg7TXQkd5qW2wlmBB-p7vZ9CFHPo",
  authDomain: "test-book-e1835.firebaseapp.com",
  databaseURL: "https://test-book-e1835-default-rtdb.firebaseio.com",
  projectId: "test-book-e1835",
  storageBucket: "test-book-e1835.appspot.com",
  messagingSenderId: "689631593950",
  appId: "1:689631593950:web:328f4892c01ddff9e4c94f",
  measurementId: "G-0D1THX0J2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
