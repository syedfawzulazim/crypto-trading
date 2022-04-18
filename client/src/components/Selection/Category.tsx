const Category = () => {
  return (
    <div className="relative flex  items-center py-2 space-x-4 overflow-x-auto overflow-y-hidden text-sm no-scrollbar whitespace-nowrap text-slate-700 dark:text-white">
      <div>
        <a href="/">
          <button className="p-1 text-blue-600 rounded-md dark:text-white bg-slate-200 dark:bg-slate-700">
            Cryptocurrencies
          </button>
        </a>
      </div>
      <div>
        <a href="/">
          <button>Categories</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button>DeFi</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button>NFT</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button>Metaverse</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button>BNB Chain</button>
        </a>
      </div>
    </div>
  );
};

export default Category;
