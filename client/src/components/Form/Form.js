import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ postId, setPostId }) => {
  const post = useSelector((state) =>
    postId ? state.posts.find((post) => post._id === postId) : null
  );
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post, postId]);

  const user = JSON.parse(localStorage.getItem("user_auth"));

  const dispatch = useDispatch();

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
    setPostId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postId) {
      dispatch(updatePost(postId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }

    clear();
  };

  return (
    <div className="w-2/3 border rounded-md border-gray-300 p-5 ">
      <h1 className="text-lg font-semibold">Create a new memory!</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mt-4"
          required="required"
          type="text"
          name="title"
          id="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 p-2 mt-4"
          required="required"
          name="message"
          id="message"
          rows={5}
          cols={5}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          placeholder="Tags"
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mt-4"
          required="required"
          type="text"
          name="tags"
          id="tags"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="mt-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="flex align-center justify-center">
          <button
            className="w-2/3 mt-5 py-2 px-4 text-white font-semibold rounded-lg bg-purple-600 shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
