import React from "react";
import Main from "./Main";
import Secondary from "./Secondary";

const Index: React.FC = () => {
  return (
    <div className="text-black bg-white dark:bg-black dark:text-[#a0a0a0]">
      <div className="w-full mx-auto xl:max-w-[1400px]">
        <Main />
        <Secondary />
      </div>
    </div>
  );
};

export default Index;
