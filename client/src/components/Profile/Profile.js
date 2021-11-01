import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProfile } from "../../actions/profile";

import ProfilePosts from "./ProfilePosts";
import { PostSkeletonLoader } from "../loaders";
import avatar from "../../assets/avatar.png";

const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  const profile = useSelector((state) => state.profile.profile_details);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_auth")));
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await dispatch(getProfile(user.id));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return !isLoggedIn ? (
    <Redirect to="/" />
  ) : profile ? (
    <>
      <div className="w-3/4 m-auto">
        <div className="flex flex-row py-8 border-b-2 ">
          <div className="w-40 h-40 p-4 rounded-full overflow-hidden border-2 border-purple-600">
            <img src={avatar} />
          </div>
          <div className="flex flex-col">
            <div className="text-3xl ml-8 mt-4">{profile.name}</div>
          </div>
        </div>
        <ProfilePosts />
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};

export default Profile;
