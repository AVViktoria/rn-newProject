// import firebase from "firebase";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBGPCIuka_UOVmVTJWhfUsE82RkLzAzYpo",
//   authDomain: "rn-project-46bde.firebaseapp.com",
//   projectId: "rn-project-46bde",
//   storageBucket: "rn-project-46bde.appspot.com",
//   messagingSenderId: "400356625283",
//   appId: "1:400356625283:web:9b06768c01c0199210c4b6",
//   measurementId: "G-FE6MC69ZMZ",
// };

// export default firebase.initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBGPCIuka_UOVmVTJWhfUsE82RkLzAzYpo",
  authDomain: "rn-project-46bde.firebaseapp.com",
  projectId: "rn-project-46bde",
  storageBucket: "rn-project-46bde.appspot.com",
  messagingSenderId: "400356625283",
  appId: "1:400356625283:web:9b06768c01c0199210c4b6",
  measurementId: "G-FE6MC69ZMZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
