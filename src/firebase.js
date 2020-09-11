import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2qDwfPy6KaLF1mFAPjdO_RrLkFtfUQRQ",
  authDomain: "clone-a069e.firebaseapp.com",
  databaseURL: "https://clone-a069e.firebaseio.com",
  projectId: "clone-a069e",
  storageBucket: "clone-a069e.appspot.com",
  messagingSenderId: "537708539602",
  appId: "1:537708539602:web:988f45dda80ce9872a470b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
