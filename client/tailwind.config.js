module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#17171a",
      },
      backgroundColor: {
        dark: "#17171a",
      },
      screens: {
        "lg-m-w": { max: "1023px" },
      },
    },
  },
  plugins: [],
};
