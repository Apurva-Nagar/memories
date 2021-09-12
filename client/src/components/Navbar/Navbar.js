import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

import { signout } from "../../actions/auth";
import UserDropDown from "./UserDropDown/UserDropDown";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  const handleLogout = () => {
    dispatch(signout());
    setUser(null);
    history.push("/auth");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_auth")));
  }, [location]);

  return (
    <nav className="bg-white flex items-center justify-between flex-wrap pt-4 pb-4 pl-6 pr-6 border-b-2">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <Link
          to={user ? "/feed" : "/"}
          className="text-4xl font-bold tracking-tight"
        >
          Memories
        </Link>
      </div>
      <div className="mt-2 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>

        {!user ? (
          <div>
            <Link
              to="/auth"
              className="inline-block text-sm text-purple-600 px-4 py-2 leading-none border rounded border-purple-600 hover:border-transparent hover:text-white hover:bg-purple-600 mt-4 lg:mt-0"
            >
              Sign-in
            </Link>
          </div>
        ) : (
          <UserDropDown userDetails={user} handleLogout={() => handleLogout} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
