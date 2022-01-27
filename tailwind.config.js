module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        bottom: "inset 0px -11px 0px   #ef4444",
        bottom2: "inset 0px -13px 0px   #ef4444",
        bottom3: "inset 0px -14px 0px   #ef4444",
        bottom4: "inset 0px -11px 0px   #525252",
      },
      backgroundImage: {
        hero: "url('/wave2.svg')",
      },
      colors: {
        highlight: "#ef4444",
      },
      fontFamily: {
        logo: ["Play"],
        display: ["Poppins"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
