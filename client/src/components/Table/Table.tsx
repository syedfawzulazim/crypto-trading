import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

import { IData } from "../../types";
import axios from "axios";
import { PaginationContext } from "../../context";

interface Props {
  data: IData[];
}

const Table: React.FC = () => {
  const { pageNumber } = useContext(PaginationContext);

  const [data, setData] = useState<IData[]>([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false`
    );
    setData(response.data);
  }, [pageNumber]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const modifiedData: IData[] = [];

  data.map((coin) => {
    modifiedData.push({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      market_cap_rank: coin.market_cap_rank,
      fully_diluted_valuation: coin.fully_diluted_valuation,
      total_volume: coin.total_volume,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_24h: coin.price_change_24h,
      price_change_percentage_24h: parseFloat(
        coin.price_change_percentage_24h.toFixed(2)
      ),
      market_cap_change_24h: coin.market_cap_change_24h,
      market_cap_change_percentage_24h: coin.market_cap_change_percentage_24h,
      circulating_supply: coin.circulating_supply,
      total_supply: coin.total_supply,
      max_supply: coin.max_supply,
      ath: coin.ath,
      ath_change_percentage: coin.ath_change_percentage,
      ath_date: coin.ath_date,
      atl: coin.atl,
      atl_change_percentage: coin.atl_change_percentage,
      atl_date: coin.atl_date,
      roi: coin.roi,
      last_updated: coin.last_updated,
    });
  });

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap lg:pr-0">
      <table className="w-full table-auto ">
        <thead>
          <tr className="text-xs border-b dark:border-slate-800 border-slate-400">
            <th className="sticky left-0 dark:bg-slate-800 bg-slate-100 ">
              Name
            </th>
            <th className="py-2 pl-6 text-right ">Price</th>
            <th className="py-2 pl-6 text-right">24h %</th>
            <th className="py-2 pl-6 text-right">24hr High</th>
            <th className="py-2 pl-6 text-right">Market Cap</th>
            <th className="py-2 pl-6 text-right">Circulating Supply</th>
            <th className="py-2 pl-6 text-right">ATH</th>
            <th className="px-6 py-2 text-right">ATL</th>
          </tr>
        </thead>
        <tbody className="font-semibold ">
          {modifiedData.map((coin) => (
            <tr
              className="border-b dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800"
              key={coin.id}
            >
              <td className="sticky left-0 px-2 py-2  dark:bg-[#1f222c]  bg-slate-100 ">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col justify-center cursor-pointer">
                    <AiOutlineStar />
                  </div>
                  <a href="">
                    <div className="flex items-center space-x-6">
                      <div className="flex m-4">
                      <p className="text-sm">{coin.market_cap_rank}</p>
                      </div>
                      <div className="flex">
                      <Image src={coin.image} width={30} height={30} />
                      <div className="flex px-2 space-x-4 items-center lg-m-w:hidden">
                        <p className="text-sm">{coin.name}</p>
                        <p className="text-xs">{coin.symbol}</p>
                      </div>
                      </div>
                     
                      <div className="px-2 lg:hidden">
                        <div className="flex ml-2 space-x-2 text-xs">
                          <p>{coin.symbol}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </td>
              <td className="pl-8 text-right">${coin.current_price}</td>
              <td className="pl-8 text-right">
                {coin.price_change_percentage_24h}%
              </td>
              <td className="pl-8 text-right">
                <p>${coin.high_24h}</p>
              </td>
              <td className="pl-8 text-right">
                <p>${coin.market_cap}</p>
              </td>
              <td className="pl-8 text-right">
                <p>{coin.circulating_supply}</p>
              </td>
              <td className="pl-8 text-right">
                <p>${coin.ath}</p>
              </td>
              <td className="px-6 text-right">
                <p>${coin.atl}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
