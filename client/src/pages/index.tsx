import type { NextPage } from "next";
import { Hero, Selection, Subscribe, Table } from "../components";

const Home: NextPage = () => {
  return (
    <div className="text-white ">
      <div className="bg-gradient-to-b dark:from-[#222531] dark:to-[#000000] from-[#7190bd] to-[#f8fafd">
        <Hero />
        <Selection />
        <Table />
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
