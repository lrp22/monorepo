// Import the shared config from the UI package
const { sharedConfig } = require("../../packages/ui/src/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  // We use the shared config as a preset.
  // This ensures the Web app has the exact same tokens (colors, border radius, etc) as Mobile.
  presets: [require("nativewind/preset"), sharedConfig],
  theme: {
    extend: {
      // Add web-specific overrides here if needed
    },
  },
  // Plugins are inherited from sharedConfig, but you can add web-specific ones here
  plugins: [],
};
