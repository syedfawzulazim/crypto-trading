import Image from "next/image";

const Img = () => {
  return (
    <div className="mt-4 md:mt-0 md:flex-auto">
      <div className="">
        <Image
          src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_dark.svg"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Img;
