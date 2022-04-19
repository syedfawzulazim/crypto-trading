import React from "react";
import Img from "./Img";
import Main from "./Main";

const Index: React.FC = () => {
  return (
    <div className="dark:bg-[#171924] bg-[#f8fafd]">
      <div className="w-full mx-auto xl:max-w-[1400px] px-4 py-4 md:flex md:items-center">
        <Main />
        <Img />
      </div>
    </div>
  );
};

export default Index;
