import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faEdit as farEdit,
} from "@fortawesome/free-regular-svg-icons";

const Post = ({ post, setPostId }) => {
  const dispatch = useDispatch();

  return (
    <div class="container mx-auto max-w-xs bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 mt-8">
      <div class="flex items-center justify-between px-4 border-b-2">
        <div class="flex justify-between items-center py-4">
          <img
            class="w-12 rounded-full border-2 border-purple-600"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            alt="Alex"
          />
          <div class="ml-3">
            <h1 class="text-xl font-bold text-gray-800 cursor-pointer">
              {post.creator}
            </h1>
            <p class="text-sm text-gray-800 hover:underline cursor-pointer">
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <button type="button" onClick={() => setPostId(post._id)}>
          <FontAwesomeIcon icon={farEdit} className="" />
        </button>
      </div>
      {post?.selectedFile && <img src={post.selectedFile} alt="Post Image" />}
      <div class="p-6 pb-4">
        <h1 class="text-3xl font-bold text-gray-800 cursor-pointer ">
          {post.title}
        </h1>
        <h2 class="text-gray-800 font-semibold">
          Tags: {post.tags.join(", ")}
        </h2>
        <p class="text-lg font font-thin">{post.message}</p>
      </div>
      <hr />
      <div class="flex flex-row justify-between p-6 pt-2 pb-2">
        <div>
          <button type="button" onClick={() => dispatch(likePost(post._id))}>
            <FontAwesomeIcon
              icon={farHeart}
              className="text-red-600"
              size="lg"
            />
          </button>
          <span className="pl-1 text-red-600">{post.likeCount}</span>
        </div>
        <button type="button" onClick={() => dispatch(deletePost(post._id))}>
          <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Post;
