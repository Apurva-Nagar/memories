import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as farWindowClose } from "@fortawesome/free-regular-svg-icons";

const FlashError = () => {
  const [showFlashError, setShowFlashError] = useState(false);

  return (
    <>
      {showFlashError && (
        <div className="grid grid-cols-12 w-full p-3 bg-purple-500 text-center text-white font-semibold">
          <div className="col-span-11 ml-20">Placeholder</div>
          <button
            type="button"
            className="col-span-1"
            onClick={() => setShowFlashError(false)}
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
