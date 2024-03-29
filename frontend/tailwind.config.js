/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: ['hover'], // Enable hover for text shadow if you have a plugin for text shadows
      transform: ['hover'], // Enable hover for transform
      colors: {
        primary: '#1c2830',
        secondary: '#354955',
        tertiary: '#65787b',
        h1text: '#e6cec0',
        h2text: '#a2979d',
        dustyblue: {
          '50': '#f5f6f6',
          '100': '#e4e9e9',
          '200': '#ccd4d5',
          '300': '#a8b6b8',
          '400': '#7d9093',
          '500': '#65787b',
          '600': '#546266',
          '700': '#485356',
          '800': '#40484a',
          '900': '#383e41',
          '950': '#232729',
      },
      blue: {
        '50': '#f2f7f9',
        '100': '#dfecee',
        '200': '#c2d9df',
        '300': '#98bec8',
        '400': '#669aaa',
        '500': '#4b7e8f',
        '600': '#416979',
        '700': '#395765',
        '800': '#354a55',
        '900': '#32434d',
        '950': '#1c2830',
    },
    dustygray: {
      '50': '#f8f8f8',
      '100': '#f2f1f1',
      '200': '#e7e4e5',
      '300': '#d3ced0',
      '400': '#bab2b6',
      '500': '#a2979d',
      '600': '#857980',
      '700': '#6d6369',
      '800': '#5d545a',
      '900': '#514a4f',
      '950': '#2b262a',
  },
  peach: {
    '50': '#fbf7f5',
    '100': '#f6eeea',
    '200': '#f0e1d8',
    '300': '#e6cec0',
    '400': '#d4ac95',
    '500': '#c18f72',
    '600': '#ab7657',
    '700': '#8f6146',
    '800': '#77523d',
    '900': '#654837',
    '950': '#35241a',
},   
      }
    },
  },
  plugins: [],
}