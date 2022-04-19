import React from "react";
import Category from "./Category";
import Options from "./Options";

const Index: React.FC = () => {
  return (
    <div className="dark:bg-[#1f222c] px-4 w-full mx-auto xl:max-w-[1400px]">
      <Options />
      <Category />
    </div>
  );
};

export default Index;
