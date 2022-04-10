import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#1f222c] px-4 pb-4 w-full mx-auto xl:max-w-[1400px]">
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
      <div className="flex space-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
        <div className=" bg-[#17171a] px-4 py-3 rounded-lg">
          <a href="" className="flex items-center -2 w-72 ">
            <div className="w-16 h-16 mr-4 ">
              <Image
                src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1649259001456_Bitcoin-2022-Miami-Graphic_280x136.jpg"
                alt=""
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <p>Bitcoin 2022</p>
              <p className="whitespace-normal">
                Live Updates: BTC 2022 in Miami!
              </p>
            </div>
          </a>
        </div>
        <div className=" bg-[#17171a] px-4 py-3 rounded-lg">
          <a href="" className="flex items-center w-72 ">
            <div className="w-16 h-16 mr-4">
              <Image
                src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1649259001456_Bitcoin-2022-Miami-Graphic_280x136.jpg"
                alt=""
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <p>Bitcoin 2022</p>
              <p className="whitespace-normal">
                Live Updates: BTC 2022 in Miami!
              </p>
            </div>
          </a>
        </div>
        <div className=" bg-[#17171a] px-4 py-3 rounded-lg">
          <a href="" className="flex items-center -2 w-72 ">
            <div className="w-16 h-16 mr-4 ">
              <Image
                src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1649259001456_Bitcoin-2022-Miami-Graphic_280x136.jpg"
                alt=""
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <p>Bitcoin 2022</p>
              <p className="whitespace-normal">
                Live Updates: BTC 2022 in Miami!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
