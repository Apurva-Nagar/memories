import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faEdit as farEdit,
} from "@fortawesome/free-regular-svg-icons";

const Post = ({ post, setPostId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user_auth"));
  const postedByUser =
    user?.result?.googleId === post?.creator ||
    user?.result?._id === post?.creator;

  const PostLikes = () => {
    const { likes } = post;
    const likedByUser = likes.find(
      (like) => like === (user?.result?.googleId || user?.result?._id)
    );

    const likeCount = () => {
      if (!likes.length || (likedByUser && likes.length === 1)) {
        return null;
      }
      if (likedByUser) {
        return (
          <span className="pl-1 text-red-600 text-sm">
            {likes.length > 2
              ? `You and ${likes.length - 1} others liked this post`
              : "You and one more person liked this post"}
          </span>
        );
      }
      return (
        <span className="pl-1 text-red-600 text-sm">{`${likes.length} ${
          likes.length > 1 ? "Likes" : "Like"
        }`}</span>
      );
    };

    return (
      <div>
        <button type="button" onClick={() => dispatch(likePost(post._id))}>
          <FontAwesomeIcon
            icon={likedByUser ? faHeart : farHeart}
            className="text-red-600"
            size="lg"
          />
        </button>
        {likeCount()}
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-xl bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 mt-8">
      <div className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-3">
          <img
            className="w-12 rounded-full"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            alt="Alex"
          />
          <div className="ml-3">
            <h1 className="font-bold text-gray-800 cursor-pointer">
              {post.name}
            </h1>
            <p className="text-sm text-gray-800">
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
        </div>
        {postedByUser && (
          <button type="button" onClick={() => setPostId(post._id)}>
            <FontAwesomeIcon icon={farEdit} className="" />
          </button>
        )}
      </div>
      {post?.selectedFile && <img src={post.selectedFile} alt="Post Image" />}
      <div className="py-2 px-6">
        <p className="text-lg font font-thin">{post.caption}</p>
        <p className="text-gray-800 font-thin text-sm">
          Tagged: {post.tags.join(", ")}
        </p>
      </div>
      <hr />
      <div className="flex flex-row justify-between p-6 pt-2 pb-2">
        <PostLikes />
        {postedByUser && (
          <button type="button" onClick={() => dispatch(deletePost(post._id))}>
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
