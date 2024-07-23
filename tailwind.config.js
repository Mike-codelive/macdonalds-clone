/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        speedee: ['Speedee'],
      },
      keyframes: {
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        bounceRight: 'bounceRight 0.5s ease-in-out',
      },
      colors: {
        linkcolor: '#006bae',
        customBlack: '#292929',
      },
      fontSize: {
        'md-36': '36px',
      },
      width: {
        '3pc': '3pc',
        '72px': '72px',
      },
      borderWidth: {
        2: '2px',
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
