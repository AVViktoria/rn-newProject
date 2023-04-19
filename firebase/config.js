// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGPCIuka_UOVmVTJWhfUsE82RkLzAzYpo",
  authDomain: "rn-project-46bde.firebaseapp.com",
  projectId: "rn-project-46bde",
  storageBucket: "rn-project-46bde.appspot.com",
  messagingSenderId: "400356625283",
  appId: "1:400356625283:web:9b06768c01c0199210c4b6",
  measurementId: "G-FE6MC69ZMZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
