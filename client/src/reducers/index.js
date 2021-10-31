import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import error from "./error";
import pagination from "./pagination";

export default combineReducers({
  posts,
  auth,
  error,
  pagination,
});
