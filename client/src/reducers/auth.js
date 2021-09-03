import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user_auth", JSON.stringify({ ...action?.payload }));
      console.log({ ...state, authData: action?.payload });
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.removeItem("user_auth");
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
