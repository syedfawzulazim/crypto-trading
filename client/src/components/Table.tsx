import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Table = () => {
  return (
    <div className="xl:max-w-[1400px] mx-auto  pr-4 lg:pr-0 ">
      <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap lg:pr-0">
        <table className="table-auto w-full ">
          <thead className="">
            <tr className="border-b border-slate-800 text-xs">
              <th className="sticky left-0 bg-black ">Name</th>
              <th className="pl-6 py-2 text-right ">Price</th>
              <th className="pl-6 py-2 text-right">24h %</th>
              <th className="pl-6 py-2 text-right">7d %</th>
              <th className="pl-6 py-2 text-right">Market Cap</th>
              <th className="pl-6 py-2 text-right">Volume(24h)</th>
              <th className="pl-6 py-2 text-right">Circulating Supply</th>
              <th className="px-6 py-2 text-right">Last 7 Days</th>
            </tr>
          </thead>
          <tbody className=" font-semibold">
            <tr className="border-b border-slate-800">
              <td className="sticky left-0 bg-black px-8 py-1">
                <div className="flex items-center">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <a href="">
                    <div className="flex items-center">
                      <BsCurrencyBitcoin />
                      <div className="px-2">
                        <p>Bitcoin</p>
                        <div className="ml-2 flex space-x-2 text-xs">
                          <p>1</p>
                          <p>BTC</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </td>
              <td className="pl-8 text-right">$42,551.34</td>
              <td className="pl-8 text-right">0.19%</td>
              <td className="pl-8 text-right">7.80%</td>
              <td className="pl-8 text-right">$808,286,091,224</td>
              <td className="pl-8 text-right">$14,696,942,052</td>
              <td className="pl-8 text-right">19,007,806 BTC</td>
              <td className="px-6 text-right">7 days Graph</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="sticky left-0 bg-black px-8 py-1">
                <div className="flex items-center">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <a href="">
                    <div className="flex items-center">
                      <BsCurrencyBitcoin />
                      <div className="px-2">
                        <p>Bitcoin</p>
                        <div className="ml-2 flex space-x-2 text-xs">
                          <p>1</p>
                          <p>BTC</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </td>
              <td className="text-right">$3,243.59</td>
              <td className="text-right">1.03%</td>
              <td className="text-right">6.82%</td>
              <td className="text-right">$389,977,803,255</td>
              <td className="text-right">$8,877,751,073</td>
              <td className="text-right">120,319,490 ETH</td>
              <td className="px-6 text-right">7 days Graph</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="sticky left-0 bg-black px-8 py-1">
                <div className="flex items-center">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <a href="">
                    <div className="flex items-center">
                      <BsCurrencyBitcoin />
                      <div className="px-2">
                        <p>Bitcoin</p>
                        <div className="ml-2 flex space-x-2 text-xs">
                          <p>1</p>
                          <p>BTC</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </td>
              <td className="text-right">$42,551.34</td>
              <td className="text-right">0.19%</td>
              <td className="text-right">7.80%</td>
              <td className="text-right">$808,286,091,224</td>
              <td className="text-right">$14,696,942,052</td>
              <td className="text-right">19,007,806 BTC</td>
              <td className="px-6 text-right">7 days Graph</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center  justify-center">
        <a
          href="#"
          className="flex flex-initial items-center px-4 py-2 text-gray-500  rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Table;
