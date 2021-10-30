import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000" });

const token = JSON.parse(localStorage.getItem("user_auth"))?.token;
if (token) {
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
}

API.defaults.withCredentials = true;

// Post APIs
export const fetchPosts = (params) => API.get("/posts", { params });
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/like-post`);

// User and Auth APIs
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const signOut = () => API.delete("/user/signout");
export const getXSRFToken = () => API.get("user/xsrf");
