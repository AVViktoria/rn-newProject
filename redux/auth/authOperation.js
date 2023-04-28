// import {
//   createUserWithEmailAndPassword,
// signInWithEmailAndPassword,
// updateProfile,
// signOut,
// onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import { authSlice } from "./authReducer";

// export const authSignUpUser =
//   () =>
//   async ({ dispatch, getState }) => {
//     // ({ email, password }) =>
//     // async (dispatch, getState) => {
//     try {
//       // const user = await db
//       //   .auth()
//       //   .createUserWithEmailAndPassword(email, password);
//       // console.log("user", user);
//     } catch (error) {
//       console.log("error", error);
//       console.log("error.message", error.message);
//     }
//   };
export const authSignUpUser = () => async (dispatch, getState) => {
  // const { email, password } = inputState;
  try {
    // await auth.signInWithEmailAndPassword("email", "password");
    // await createUserWithEmailAndPassword(auth, email, password);
    // await updateProfile(auth.currentUser, {
    //   displayName: inputState.login,
    // });
    // const user = auth.currentUser;
    // console.log(user);
  } catch (error) {
    throw error;
  }
};
export const authSignInUser =
  () =>
  async ({ dispatch, getState }) => {
    try {
    } catch (error) {
      console.log("error", error);
      console.log("error message", error.message);
    }
  };

export const authSignOutUser =
  () =>
  async ({ dispatch, getState }) => {
    try {
    } catch (error) {
      console.log("error", error);
      console.log("error message", error.message);
    }
  };
// export const authSignUpUser = () => async (dispatch, getState) => {};
// export const authSignInUser = () => async (dispatch, getState) => {};
// export const authSignOutUser = () => async (dispatch, getState) => {};
