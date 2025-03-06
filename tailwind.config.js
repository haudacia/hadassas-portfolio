/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '3rem',
      },
      backgroundImage: {
        'wine-grain': 'url(/wine-grain.svg)'
      },
      backgroundSize: {
        // 'wine-grain': '300px 300px',
        'wine-grain': 'cover'
      },
      // backgroundRepeat: {
      //   'wine-grain': 'repeat',
      // },
      backgroundPosition: {
        'wine-grain': 'center',
      },
      colors: {
        c1: 'rgb(18, 0, 211)',
        c2: 'rgb(204, 239, 254)',
        c3: 'rgb(234, 207, 207)'
      },
      fontFamily: {
        'lekton': ['Lekton', 'monospace'],
        // 'space-mono': ['Space Mono', 'monospace'],
        // 'abril-fatface': ['Abril Fatface', 'serif']
      },
      boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
        'vaporwave': '5px 5px 6px rgba(255, 0, 255, 0.6), -5px -5px 6px rgba(0, 255, 255, 0.6)',
        'crisp': '-7px 7px 0px rgba(0, 0, 0, 1)'
      },
      spacing: {
        'base': '2rem',
        'double-base': '4rem',
        'triple-base': '6rem'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

