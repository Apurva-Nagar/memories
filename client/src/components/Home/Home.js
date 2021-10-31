import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { getPosts } from "../../actions/posts";
import { Redirect, useLocation } from "react-router-dom";

import { POST_LIMIT } from "../../constants/general";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [postId, setPostId] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("user_auth")));
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await dispatch(getPosts({ page: page, limit: POST_LIMIT }));
      setIsLoading(false);
    }
    fetchData();
  }, [dispatch, page]);

  return !isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="mt-5 p-5 pb-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Posts
            setPostId={setPostId}
            setPage={(pageNumber) => setPage(pageNumber)}
            isLoading={isLoading}
          />
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
