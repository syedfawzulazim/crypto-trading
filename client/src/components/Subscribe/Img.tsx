import Image from "next/image";
import { useTheme } from "next-themes";

const Img = () => {
  const { theme, setTheme } = useTheme();

  const mode = theme === "dark" ? "dark" : "light";
  let imgLink = `https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_${mode}.svg`;

  return (
    <div className="mt-4 md:mt-0 md:flex-auto ">
      <div>
        <Image src={imgLink} width={600} height={400} layout="responsive" />
      </div>
    </div>
  );
};

export default Img;
