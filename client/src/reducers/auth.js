import {
  AUTH,
  GOOGLE_AUTH,
  SIGNOUT,
  XSRF_TOKEN,
} from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "user_auth",
        JSON.stringify({ ...action?.payload?.user })
      );
      return { ...state, authData: action?.payload?.user };
    case GOOGLE_AUTH:
      localStorage.setItem("user_auth", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case SIGNOUT:
      localStorage.removeItem("user_auth");
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
