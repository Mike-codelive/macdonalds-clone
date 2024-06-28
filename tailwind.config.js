/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        bounceRight: 'bounceRight 0.5s ease-in-out',
      },
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
