import React from "react";
import Text from "./Text";
import Card from "./Card";

const Index: React.FC = () => {
  return (
    <div className="dark:bg-[#1f222c] px-4 pb-4 w-full mx-auto xl:max-w-[1400px]">
      <Text />
      <Card />
    </div>
  );
};

export default Index;
