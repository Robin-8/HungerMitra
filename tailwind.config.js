/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // very important
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // include flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
