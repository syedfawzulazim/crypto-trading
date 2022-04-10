import type { NextPage } from "next";
import { Hero, Navbar, Selection } from "../components";

const Home: NextPage = () => {
  return (
    <div className="text-white bg-[#17171a]">
      <Navbar />

      <div className="bg-gradient-to-b from-[#222531] to-[#000000] ">
        <Hero />
        <Selection />
      </div>

      <div className="text-2xl bg-slate-600 ">Hello World</div>
    </div>
  );
};

export default Home;
