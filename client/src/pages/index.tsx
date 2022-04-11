import type { NextPage } from "next";
import {
  Footer,
  Hero,
  Navbar,
  Selection,
  Subscribe,
  Table,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="text-white bg-[#17171a] ">
      <div className="bg-gradient-to-b from-[#222531] to-[#000000] ">
        <Hero />
        <Selection />
        <Table />
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
