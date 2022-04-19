import React from "react";
import Link from "next/link";

const Category: React.FC = () => {
  return (
    <div className="relative flex items-center py-2 space-x-4 overflow-x-auto overflow-y-hidden text-sm no-scrollbar whitespace-nowrap text-slate-700 dark:text-white">
      <div>
        <a>
          <button className="p-1 text-blue-600 rounded-md dark:text-white bg-slate-200 dark:bg-slate-700">
            Cryptocurrencies
          </button>
        </a>
      </div>
      <div>
        <a>
          <button>Categories</button>
        </a>
      </div>
      <div>
        <a>
          <button>DeFi</button>
        </a>
      </div>
      <div>
        <a>
          <button>NFT</button>
        </a>
      </div>
      <div>
        <a>
          <button>Metaverse</button>
        </a>
      </div>
      <div>
        <a>
          <button>BNB Chain</button>
        </a>
      </div>
    </div>
  );
};

export default Category;
