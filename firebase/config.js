// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/auth";

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
// const app = initializeApp(firebaseConfig);
// export default firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
