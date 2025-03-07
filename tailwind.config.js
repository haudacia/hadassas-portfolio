/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
export const theme = {
  extend: {
    backgroundImage: {
      // 'c1-2': '#ff0000',
      // 'c1': 'linear-gradient(45deg, rgb(194, 183, 200) 100%, rgb(194, 183, 200) 100%)',
      'blurry': 'url(/blurry.svg)'
    },
    colors: {
      'base-color': 'rgb(234, 207, 207)',
      'highlight-1': 'rgb(0, 84, 28)',
      'highlight-2': 'rgb(0, 255, 255)',
    },
    boxShadow: {
      'vaporwave': '5px 5px 6px rgba(255, 0, 255, 0.6), -5px -5px 6px rgba(0, 255, 255, 0.6)',
      'crisp': '-5px 5px 0px rgba(0, 0, 0, 1)'
    },
  },
}
export const plugins = [
  require('daisyui'),
]

