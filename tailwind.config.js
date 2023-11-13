
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white-100': '#FEFEFE',
        'bide-400': '#a68673',
        'bide-600': '#3d312f',
        'text-color': '#ddcfca',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
    },
  },
  presets: [keepPreset],
};
