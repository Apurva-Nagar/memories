import { useState, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";

import { ReactComponent as PizzaSVG } from "../../assets/pizza_sharing.svg";
import { ReactComponent as FamilySVG } from "../../assets/family.svg";
import { ReactComponent as FatherSVG } from "../../assets/undraw_fatherhood.svg";
import { ReactComponent as WeddingSVG } from "../../assets/undraw_wedding.svg";
import { ReactComponent as GameDaySVG } from "../../assets/undraw_game_day.svg";
import { ReactComponent as VictorySVG } from "../../assets/undraw_finish_line.svg";

const LandingPage = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user_auth"))
  );

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("user_auth")));
  }, [location]);

  return isLoggedIn ? (
    <Redirect to="/feed" />
  ) : (
    <div className="bg-white min-h-full pt-5">
      <div className="grid grid-cols-2">
        <div className="flex h-full flex-col items-start justify-center ml-10">
          <h1 className="text-3xl font-bold text-gray-600">
            create, share and
          </h1>
          <h1 className="text-6xl font-bold text-gray-800">make Memories</h1>
          <p className="mt-5 font-semibold text-gray-700 break-words w-1/2">
            Never let your best moments go away. Create memories and share with
            your loved ones.
          </p>
          <div className="flex flex-row w-1/2">
            <Link
              to={{
                pathname: "/auth",
                state: {
                  fromLandingPage: true,
                },
              }}
              className="w-full"
            >
              <button className="w-full mt-8 py-2 px-4 text-white font-semibold rounded-lg bg-purple-600 shadow-lg">
                Join Now
              </button>
            </Link>
            <Link to="/auth" className="w-full">
              <button className="ml-5 w-full mt-8 p-2 border-2 rounded-lg text-purple-600 border-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-y-2">
          <div className="grid grid-cols-2">
            <div>
              <GameDaySVG className="w-48 h-48" />
            </div>
            <div>
              <VictorySVG className="w-48 h-48" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <FatherSVG className="w-48 h-48" />
            </div>
            <div>
              <WeddingSVG className="w-48 h-48" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <PizzaSVG className="w-48 h-48" />
            </div>
            <div>
              <FamilySVG className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#B794F4"
            fill-opacity="0.6"
            d="M0,160L26.7,154.7C53.3,149,107,139,160,128C213.3,117,267,107,320,101.3C373.3,96,427,96,480,122.7C533.3,149,587,203,640,213.3C693.3,224,747,192,800,154.7C853.3,117,907,75,960,58.7C1013.3,43,1067,53,1120,85.3C1173.3,117,1227,171,1280,170.7C1333.3,171,1387,117,1413,90.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
