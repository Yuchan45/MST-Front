/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'ua-',
  theme: {
    colors: {
      'secondary-grey': '#5f5f61',
      'regular-grey': '#f5f5f5',
      'light-grey': '#f6f6f6',
      black: '#181818',
      white: '#FFFFFF',
      transparent: 'transparent',
      'grey-100': '#FFFFFF',
      'grey-200': '#E6E6E6',
      'grey-300': '#ADACB0',
      'grey-400': '#7F7D83',
      'grey-500': '#0A090B',
      'red-100': '#FFE3E3',
      'red-200': '#D01717',
      'red-300': '#C11515',
      'red-400': '#961616',
      'green-100': '#D3E7C8',
      'green-200': '#7BB65A',
      'green-300': '#56883B',
      'green-400': '#456C2F',
      'yellow-100': '#FFF6E7',
      'yellow-200': '#FFC76A',
      'yellow-300': '#FFB945',
      'yellow-400': '#EC980C',
    },
    extend: {
      boxShadow: {
        light: '0 3px 4px rgba(103, 103, 103, 0.1)',
        default: '0px 1px 2px rgba(24, 24, 28, 0.06)',
        strong: '0px 10px 18px -2px rgba(10, 9, 11, 0.07)',
        grey: '0px 1.5px 4px -1px rgba(10, 9, 11, 0.07)',
      },
    },
  },
  plugins: [],
};