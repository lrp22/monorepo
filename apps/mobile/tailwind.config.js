const { hairlineWidth } = require("nativewind/theme");
const { sharedConfig } = require("../../packages/ui/src/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset"), sharedConfig],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};
