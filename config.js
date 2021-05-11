import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC9n08qxN8B1Gqeg_stMQ9Hh64h6oozJ8o",
  authDomain: "book-app-686b9.firebaseapp.com",
  projectId: "book-app-686b9",
  storageBucket: "book-app-686b9.appspot.com",
  messagingSenderId: "1099090106138",
  appId: "1:1099090106138:web:0909af9ee7ea858d2fbea3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()