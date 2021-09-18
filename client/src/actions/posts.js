import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  ERROR,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const updatePost = (postId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({ type: DELETE, payload: postId });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({ type: ERROR, payload: errors });
  }
};
