// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDbuKGftf7ws-10ij8UeiVqA8l9fvT_dXQ",
  authDomain: "clone-5d997.firebaseapp.com",
  projectId: "clone-5d997",
  storageBucket: "clone-5d997.appspot.com",
  messagingSenderId: "27773141896",
  appId: "1:27773141896:web:e4e5737205006e1b56f03d",
  measurementId: "G-1VFE35GSX0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };