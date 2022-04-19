import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <a
        href="#"
        className="flex items-center flex-initial px-4 py-2 text-gray-500 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </a>

      <a
        href="#"
        className="px-1 py-2 sm:px-4 sm:py-2 flex-initial text-gray-400  rounded-md hover:bg-[#6188ff] hover:text-white"
      >
        1
      </a>
      <a
        href="#"
        className="px-1 py-2 sm:px-4 sm:py-2 flex-initial text-gray-400  rounded-md hover:bg-[#6188ff] hover:text-white"
      >
        2
      </a>
      <a
        href="#"
        className="px-1 py-2 sm:px-4 sm:py-2 flex-initial text-gray-400  rounded-md hover:bg-[#6188ff] hover:text-white"
      >
        3
      </a>
      <a
        href="#"
        className="px-1 py-2 sm:px-4 sm:py-2 flex-initial text-gray-500  rounded-md hover:bg-[#6188ff] hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
