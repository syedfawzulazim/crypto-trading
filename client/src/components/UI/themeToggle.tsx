import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const content = theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {content}
    </button>
  );
};

export default ThemeToggle;
