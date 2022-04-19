import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import Pagination from "./Pagination";

const Index = () => {
  return (
    <div className="pt-1 bg-slate-100 dark:bg-[#1f222c] text-slate-900 dark:text-white">
      <div className="xl:max-w-[1400px] mx-auto  pr-4 lg:pr-0 ">
        <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap lg:pr-0">
          <table className="w-full table-auto ">
            <thead>
              <tr className="text-xs border-b dark:border-slate-800 border-slate-400">
                <th className="sticky left-0 dark:bg-black bg-slate-300 ">
                  Name
                </th>
                <th className="py-2 pl-6 text-right ">Price</th>
                <th className="py-2 pl-6 text-right">24h %</th>
                <th className="py-2 pl-6 text-right">7d %</th>
                <th className="py-2 pl-6 text-right">Market Cap</th>
                <th className="py-2 pl-6 text-right">Volume(24h)</th>
                <th className="py-2 pl-6 text-right">Circulating Supply</th>
                <th className="px-6 py-2 text-right">Last 7 Days</th>
              </tr>
            </thead>
            <tbody className="font-semibold ">
              <tr className="border-b dark:border-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800">
                <td className="sticky left-0 px-8 py-1 dark:bg-black bg-slate-200">
                  <div className="flex items-center">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <a href="">
                      <div className="flex items-center">
                        <BsCurrencyBitcoin />
                        <div className="px-2">
                          <p>Bitcoin</p>
                          <div className="flex ml-2 space-x-2 text-xs">
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
              <tr className="border-b dark:border-slate-800">
                <td className="sticky left-0 px-8 py-1 dark:bg-black bg-slate-200">
                  <div className="flex items-center">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <a href="">
                      <div className="flex items-center">
                        <BsCurrencyBitcoin />
                        <div className="px-2">
                          <p>Bitcoin</p>
                          <div className="flex ml-2 space-x-2 text-xs">
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
              <tr className="border-b dark:border-slate-800">
                <td className="sticky left-0 px-8 py-1 dark:bg-black bg-slate-200">
                  <div className="flex items-center">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <a href="">
                      <div className="flex items-center">
                        <BsCurrencyBitcoin />
                        <div className="px-2">
                          <p>Bitcoin</p>
                          <div className="flex ml-2 space-x-2 text-xs">
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
        <Pagination />
      </div>
    </div>
  );
};

export default Index;
