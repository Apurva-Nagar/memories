import { POST_PAGE } from "../constants/actionTypes";

const paginationReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case POST_PAGE:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default paginationReducer;
