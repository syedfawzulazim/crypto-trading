import type { NextPage } from "next";
import { Hero, Navbar, Selection, Subscribe, Table } from "../components";

const Home: NextPage = () => {
  return (
    <div className="text-white bg-[#17171a]">
      <Navbar />

      <div className="bg-gradient-to-b from-[#222531] to-[#000000] ">
        <Hero />
        <Selection />
        <Table />
        <Subscribe />
      </div>

      <div className="text-2xl bg-slate-600 ">Hello World</div>
    </div>
  );
};

export default Home;
