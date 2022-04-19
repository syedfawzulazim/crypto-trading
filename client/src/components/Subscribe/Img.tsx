import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Img: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const mode = theme === "dark" ? "dark" : "light";
  let imgLink = `https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_${mode}.svg`;

  return (
    <div className="mt-4 md:mt-0 md:flex-auto ">
      <div>
        <Image
          src={imgLink}
          width={600}
          height={400}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
};

export default Img;
