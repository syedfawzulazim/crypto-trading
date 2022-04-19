import React from "react";

const Secondary: React.FC = () => {
  return (
    <div className="relative ">
      <div className="xl:hidden absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-slate-100 ... dark:from-slate-800 ... "></div>
      <div className="flex space-x-3 no-scrollbar px-4 py-1 overflow-x-auto overflow-y-hidden text-[11px] border-t  whitespace-nowrap border-slate-300 dark:border-slate-800 ">
        <span>Cryptos:</span>
        <span>Exchanges:</span>
        <span>Market Cap:</span>
        <span>24h Vol:</span>
        <span>Dominance:</span>
        <span>ETH Gas:</span>
      </div>
    </div>
  );
};

export default Secondary;
