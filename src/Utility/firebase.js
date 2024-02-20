import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-GWKiv7BtjmV4XCtz5as3hP8dHelG-Z4",
  authDomain: "clone-681ac.firebaseapp.com",
  projectId: "clone-681ac",
  storageBucket: "clone-681ac.appspot.com",
  messagingSenderId: "1041213366446",
  appId: "1:1041213366446:web:7809013cd0c54b3e9d4d3f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()