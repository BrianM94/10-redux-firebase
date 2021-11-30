import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFFtB-aL8u-559WxjWOmMwKRbTnugvSJY",
  authDomain: "crud-react-2f0e8.firebaseapp.com",
  projectId: "crud-react-2f0e8",
  storageBucket: "crud-react-2f0e8.appspot.com",
  messagingSenderId: "606158134541",
  appId: "1:606158134541:web:ebf71187253fde3f72e444",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
