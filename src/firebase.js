import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmdWJJoja116MqhrBYbQuLheR-AssiwNw",
  authDomain: "fb-clone-gjs.firebaseapp.com",
  projectId: "fb-clone-gjs",
  storageBucket: "fb-clone-gjs.appspot.com",
  messagingSenderId: "395267445004",
  appId: "1:395267445004:web:18cd7c7e02dd16fc037929",
  measurementId: "G-GYK5R2RZLT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // for database... firestore
const auth = firebaseApp.auth(); // for authentication...
const provider = new firebase.auth.GoogleAuthProvider(); // provider... like passport OAuth0

// EXPORTS
export { auth, provider };
export default db;
