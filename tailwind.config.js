
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
        'bide-300': '#E7D6D5',
        'bide-400': '#a68673',
        'bide-500': '#7e5f4e',
        'bide-600': '#492f02',
        'bide-700': '#3d312f',
        'text-color': '#ddcfca',
        'base-100': '#F3ACB2',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
    },
  },
  presets: [keepPreset],
};
