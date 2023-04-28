// import db from "../../firebase/config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const authSignUpUser =
  () =>
  async ({ dispatch, getState }) => {
    // ({ email, password }) =>
    // async (dispatch, getState) => {
    try {
      // const user = await db
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password);
      // console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
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
