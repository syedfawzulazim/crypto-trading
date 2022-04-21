import React, { useContext } from "react";
import { PaginationContext } from "../../context";

const Pagination: React.FC = () => {
  const { pageNumber, setPageNumber } = useContext(PaginationContext);

  const classActive = `px-3 py-2 cursor-pointer text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`;
  const classNotActive = `px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`;

  return (
    <nav className="flex items-center justify-center ">
      <ul className="inline-flex py-2 -space-x-px overflow-x-auto whitespace-nowarp no-scrollbar">
        <li>
          <a
            onClick={() => pageNumber >= 2 && setPageNumber(pageNumber - 1)}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <li key={item}>
            <a
              aria-current="page"
              onClick={() => setPageNumber(item)}
              className={`${
                pageNumber === item ? classActive : classNotActive
              }`}
            >
              {item}
            </a>
          </li>
        ))}

        <li>
          <a
            onClick={() => pageNumber < 8 && setPageNumber(pageNumber + 1)}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
