import { AUTH, LOGOUT, SIGNOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "user_auth",
        JSON.stringify({ ...action?.payload?.user })
      );
      return { ...state, authData: action?.payload?.user };
    case SIGNOUT:
      localStorage.removeItem("user_auth");
      return { ...state, authData: null };
    case LOGOUT:
      localStorage.removeItem("user_auth");
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
