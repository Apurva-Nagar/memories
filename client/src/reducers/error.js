import { ERROR, CLEAR_ERROR } from "../constants/actionTypes";

const errorReducer = (error = "", action) => {
  switch (action.type) {
    case ERROR:
      return action.payload.join(", ");
    case CLEAR_ERROR:
      return "";
    default:
      return error;
  }
};

export default errorReducer;
