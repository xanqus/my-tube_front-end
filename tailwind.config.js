/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "32rem",
        208: "52rem",
      },
      width: {
        144: "36rem",
        240: "60rem",
      },
      inset: {
        "11px": "11px",
        "15px": "15px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      scale: ["focus-within"],
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
