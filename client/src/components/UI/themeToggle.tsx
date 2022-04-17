import React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const content = theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />;

  return (
    <button
      className="bg-red"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {content}
    </button>
  );
};

export default ThemeToggle;
