const Category = () => {
  return (
    <div className="relative flex py-2 space-x-4 overflow-x-auto overflow-y-hidden text-sm no-scrollbar whitespace-nowrap">
      <div>
        <a href="/">
          <button>Cryptocurrencies</button>
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
