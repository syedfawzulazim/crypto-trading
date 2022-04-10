import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#171924]">
      <div className="w-full mx-auto xl:max-w-[1400px] px-4 py-4 md:flex md:items-center">
        <div className="md:w-4/12 md:mt-6 md:flex-auto md:p-6">
          <div>
            <h2 className="text-xl  font-light">Be the first to know about</h2>
            <div className="text-xl font-bold">crypto news every day</div>
          </div>
          <p className="py-4 text-xs text-[#58667e]">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter.
          </p>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-2 lg:items-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent border  border-[#40424e] p-2 rounded md:w-5/6 lg:w-2/4"
            />
            <button className="bg-[#3861fb] p-2 rounded font-semibold md:w-2/4 lg:w-1/4">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="mt-4  md:mt-0 md:flex-auto">
          <div className="">
            <Image
              src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_dark.svg"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
