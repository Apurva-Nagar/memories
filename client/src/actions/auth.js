import { AUTH, SIGNOUT } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/feed");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/feed");
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => async (dispatch) => {
  try {
    const { data } = await api.signOut();
    dispatch({ type: SIGNOUT, payload: data });
  } catch (err) {
    console.log(err);
  }
};
