import { FETCH_PROFILE, ERROR } from "../constants/actionTypes";
import * as api from "../api/index";

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};
