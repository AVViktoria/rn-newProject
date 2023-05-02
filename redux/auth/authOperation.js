// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { authSlice } from "./authReducer";
// import { auth } from "../../firebase/config";
// import firebase from "../../firebase/config";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    console.log("login, email, password", login, email, password);
    try {
      // const user = await firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password);
      // const user = await createUserWithEmailAndPassword(auth, email, password);
      // console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error message", error.message);
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
// export { authSignUpUser, authSignInUser, authSignOutUser };
