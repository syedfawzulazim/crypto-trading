const Text = () => {
  return (
    <div>
      <h1 className="pt-2 pb-1 text-sm font-semibold">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <div className="pb-2 ">
        <p className="text-[#a1a7bb] text-sm">
          The global crypto market cap is <span>$1.34T, </span>a
          <span> 3.02 </span>
          decrease over the last day.
          <a
            href=""
            className="ml-2 text-xs text-blue-200 underline underline-offset-1"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default Text;
