import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { getPosts } from "../../actions/posts";
import { Redirect, useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [postId, setPostId] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("user_auth")));
  }, [location]);

  useEffect(() => {
    dispatch(getPosts({ page: 1, limit: 5 }));
  }, [dispatch]);

  return !isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="mt-5 p-5 pb-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Posts setPostId={setPostId} />
        </div>
        <div className="col-span-1">
          <div className="flex justify-center mt-10">
            <Form postId={postId} setPostId={setPostId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
