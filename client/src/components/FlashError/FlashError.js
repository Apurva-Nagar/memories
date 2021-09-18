import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as farWindowClose } from "@fortawesome/free-regular-svg-icons";

const FlashError = () => {
  const dispatch = useDispatch();
  const [showFlashError, setShowFlashError] = useState(false);
  const errorMessage = useSelector((state) => state.error);

  useEffect(() => {
    if (errorMessage) {
      setShowFlashError(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [errorMessage]);

  const handleClose = () => {
    setShowFlashError(false);
    dispatch({ type: "CLEAR_ERROR" });
  };

  return (
    <>
      {showFlashError && (
        <div className="grid grid-cols-12 w-full p-3 bg-red-500 text-center text-white font-semibold">
          <div className="col-span-11 ml-20">{errorMessage}</div>
          <button
            type="button"
            className="col-span-1"
            onClick={() => handleClose()}
          >
            <FontAwesomeIcon
              icon={farWindowClose}
              className="text-white"
              size="lg"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FlashError;
