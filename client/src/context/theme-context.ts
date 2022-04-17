import React from "react";

const ThemeContext = React.createContext({
  theme: false,
  setTheme: (theme: boolean) => {},
});

export default ThemeContext;
