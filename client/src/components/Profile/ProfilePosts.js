import React from "react";
import { useSelector } from "react-redux";

const ProfilePosts = () => {
  const posts = useSelector((state) => state.profile.posts);

  return posts.length ? (
    <div className="mt-8 px-8">
      <h1 className="text-lg pb-4">Your Posts</h1>
      <div className="mt-4 grid grid-cols-3 gap-4 pb-20">
        {posts.map((post) => {
          return (
            <div className="flex justify-center align-center bg-gray-800">
              <img src={post.selectedFile} className="object-contain h-64" />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p>Empty State - Nothing to show</p>
  );
};

export default ProfilePosts;
