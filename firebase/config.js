import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnzWn5LjnAzkUpC1uOIGhu7QmngIOcjpQ",
  authDomain: "rn-project-67ba0.firebaseapp.com",
  projectId: "rn-project-67ba0",
  storageBucket: "rn-project-67ba0.appspot.com",
  messagingSenderId: "886864657697",
  appId: "1:886864657697:web:d2690b8c67707242b3d260",
  measurementId: "G-9Y1ZFGGG8R",
};

// export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
