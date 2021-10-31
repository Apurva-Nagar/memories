import React, { useRef, useCallback } from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Loader } from "../loaders";

const Posts = ({ setPostId, setPage, isLoading }) => {
  const postPagination = useSelector((state) => state.pagination.posts);
  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && postPagination) {
          setPage(postPagination.nextPage);
        }
      });
      if (node) observer.current.observe(node);
    },
    [postPagination, isLoading]
  );

  const posts = useSelector((state) => state.posts);

  return posts.length ? (
    <>
      <h1 className="text-xl font-semibold ml-5">Your Feed</h1>
      <div className="flex flex-row flex-wrap">
        {posts.map((post, idx) => {
          if (posts.length === idx + 1)
            return (
              <Post
                ref={lastPostRef}
                key={post._id}
                post={post}
                setPostId={setPostId}
              />
            );
          else return <Post key={post._id} post={post} setPostId={setPostId} />;
        })}
      </div>
      {isLoading && <Loader />}
    </>
  ) : (
    <>
      <p>loading...</p>
    </>
  );
};

export default Posts;
