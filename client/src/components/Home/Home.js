import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { getPosts } from "../../actions/posts";

const Home = () => {
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="mt-5 p-5 mb-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Posts setPostId={setPostId} />
        </div>
        <div className="col-span-1">
          <div className="flex justify-center mt-10 sticky top-10">
            <Form postId={postId} setPostId={setPostId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
