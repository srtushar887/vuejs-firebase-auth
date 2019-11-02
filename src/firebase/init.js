
import firebase from "firebase/app";
import firestore from 'firebase/firestore';

const Config = {
  apiKey: "AIzaSyADEs9MdqTNKpVPjqR-NyyQghmRFsjr6Ks",
  authDomain: "chat-38b81.firebaseapp.com",
  databaseURL: "https://chat-38b81.firebaseio.com",
  projectId: "chat-38b81",
  storageBucket: "chat-38b81.appspot.com",
  messagingSenderId: "1043448782554",
  appId: "1:1043448782554:web:7eed268a3c506800ff0fe3",
  measurementId: "G-GJNX9XQ1MV"
};

const firebaseApp = firebase.initializeApp(Config);

export default firebaseApp.firestore();

