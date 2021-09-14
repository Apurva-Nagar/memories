import { AUTH, SIGNOUT } from "../constants/actionTypes";
import * as api from "../api/index";
import { API } from "../api/index";

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

export const signout = (history) => async (dispatch) => {
  try {
    const { data } = await api.signOut();
    dispatch({ type: SIGNOUT, payload: data });
    history.push("/auth");
  } catch (err) {
    console.log(err);
  }
};

export const xsrftoken = () => async (dispatch) => {
  try {
    const { data } = await api.getXSRFToken();
    API.defaults.headers.post["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.put["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.patch["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.delete["X-CSRF-Token"] = data.xsrfToken;
  } catch (err) {
    console.log(err);
  }
};
