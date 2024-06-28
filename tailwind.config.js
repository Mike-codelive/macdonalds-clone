/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '3pc': '3pc',
        '72px': '72px',
      },
      height: {
        '3pc': '3pc',
      },
      boxShadow: {
        nav: '0 .0625rem .5rem 0 rgba(0, 0, 0, .04), 0 .0625rem .3125rem 0 rgba(0, 0, 0, .04)',
      },
    },
  },
  plugins: [],
};
