import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQcoZNloP5RULkvQZ-hrWLPa4-eXzuqE",
  authDomain: "project70-af500.firebaseapp.com",
  projectId: "project70-af500",
  storageBucket: "project70-af500.appspot.com",
  messagingSenderId: "667961794382",
  appId: "1:667961794382:web:4beaf30b6e45934c7a881f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
