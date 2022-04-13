import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
      <div className=" bg-[#17171a] px-4 py-3 rounded-lg">
        <Link href="">
          <a className="flex items-center -2 w-72 ">
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
        </Link>
      </div>
      <div className=" bg-[#17171a] px-4 py-3 rounded-lg">
        <a className="flex items-center w-72 ">
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
        <a className="flex items-center -2 w-72 ">
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
  );
};

export default Card;
