import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = ({ setPostId }) => {
  const posts = useSelector((state) => state.posts);

  return posts.length ? (
    <>
      <h1 className="text-xl font-semibold ml-5">Your Feed</h1>
      <div className="flex flex-row flex-wrap">
        {posts.map((post) => (
          <Post key={post.id} post={post} setPostId={setPostId} />
        ))}
      </div>
    </>
  ) : (
    <>Your feed is empty</>
  );
};

export default Posts;
