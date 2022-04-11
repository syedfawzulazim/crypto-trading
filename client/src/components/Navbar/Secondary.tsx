const Secondary = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-slate-900 ... "></div>
      <div className="flex space-x-3 no-scrollbar px-4 py-2 overflow-x-auto overflow-y-hidden text-[11px] border-t  whitespace-nowrap border-slate-800 text-white">
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
