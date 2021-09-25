import { AUTH, SIGNOUT, ERROR } from "../constants/actionTypes";
import * as api from "../api/index";
import { API } from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/feed");
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/feed");
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const signout = (history) => async (dispatch) => {
  try {
    const { data } = await api.signOut();
    dispatch({ type: SIGNOUT, payload: data });
    history.push("/auth");
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const xsrftoken = () => async (dispatch) => {
  try {
    const { data } = await api.getXSRFToken();
    API.defaults.headers.post["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.put["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.patch["X-CSRF-Token"] = data.xsrfToken;
    API.defaults.headers.delete["X-CSRF-Token"] = data.xsrfToken;
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};
