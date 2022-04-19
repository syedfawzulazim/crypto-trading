import React from "react";

const Main: React.FC = () => {
  return (
    <div className="md:w-4/12 md:mt-6 md:flex-auto md:p-6">
      <div>
        <h2 className="text-xl font-light">Be the first to know about</h2>
        <div className="text-xl font-bold">crypto news every day</div>
      </div>
      <p className="py-4 text-xs dark:text-[#58667e] text-black">
        Get crypto analysis, news and updates right to your inbox! Sign up here
        so you don't miss a single newsletter.
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
  );
};

export default Main;
