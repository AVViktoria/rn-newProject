import db from "../../firebase/config";

// import {
//   createUserWithEmailAndPassword,
//   // signInWithEmailAndPassword,
//   // updateProfile,
//   // signOut,
//   // onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import { authSlice } from "./authReducer";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
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
