import { FETCH_PROFILE } from "../constants/actionTypes";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
