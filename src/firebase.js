// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLdhDllXripkPDqYGQ6i_J9iXWg8UpxLs",
  authDomain: "clone-6b26d.firebaseapp.com",
  projectId: "clone-6b26d",
  storageBucket: "clone-6b26d.appspot.com",
  messagingSenderId: "633315802899",
  appId: "1:633315802899:web:5aac702009d2aa7b5364e6",
  measurementId: "G-KEHWX929DN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};