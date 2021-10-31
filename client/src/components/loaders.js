export const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-purple-600"></div>
    </div>
  );
};

export const ButtonLoader = ({ buttonStyle, buttonText }) => {
  return (
    <button type="button" className={buttonStyle} disabled>
      <div className="h-5 w-5">
        <span className="hidden"></span>
      </div>
      <span className="">{buttonText}</span>{" "}
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="#f1edf7"
          fill="none"
          stroke-width="4"
        />
        <path
          className=""
          fill="white"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </button>
  );
};
