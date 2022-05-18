module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.2s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
      },

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
