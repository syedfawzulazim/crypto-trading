import React from "react";
const Text: React.FC = () => {
  return (
    <div>
      <h1 className="pt-2 pb-1 font-bold text-slate-100 dark:text-white sm:text-sm xl:text-2xl">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <div className="pb-2 ">
        <p className="dark:text-[#a1a7bb] text-zinc-200 text-sm">
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
