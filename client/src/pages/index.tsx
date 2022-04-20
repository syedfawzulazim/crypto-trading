import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { Hero, Selection, Subscribe, Table } from "../components";
import { IData } from "../types";
import axios from "axios";

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  const data: IData[] = response.data;

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(props.data);
  return (
    <div className="text-white ">
      <div className="bg-gradient-to-b dark:from-[#222531] dark:to-[#000000] from-[#7190bd] to-[#f8fafd">
        <Hero />
        <Selection />
        <Table data={props.data} />
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
