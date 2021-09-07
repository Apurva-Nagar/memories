import { useState } from "react";
import avatar from "../../../assets/avatar.png";

const UserDropDown = ({ userDetails, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center">
        <div className="bg-white w-64 shadow flex justify-center items-center">
          <div className="" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="flex justify-center items-center space-x-3 cursor-pointer mr-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-600">
                <img
                  src={userDetails.imageUrl ? userDetails.imageUrl : avatar}
                  alt={userDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold text-gray-900 text-lg">
                <div className="cursor-pointer">{userDetails.name}</div>
              </div>
            </div>
            {menuOpen && (
              <div
                onMouseLeave={() => setMenuOpen(!menuOpen)}
                className="absolute w-1/6 px-5 py-3 bg-white rounded-lg shadow border mt-2"
              >
                <ul className="space-y-3">
                  <li className="font-medium">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      Account
                    </a>
                  </li>
                  <li className="font-medium">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      Setting
                    </a>
                  </li>
                  <hr className="" />
                  <li className="font-medium">
                    <button
                      onClick={handleLogout()}
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600 w-full"
                    >
                      <div className="mr-3 text-red-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDropDown;
