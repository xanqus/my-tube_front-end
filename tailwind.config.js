/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
        124: '31rem',
        126: '31.5rem',
        128: '32rem',
        192: '48rem',
        208: '52rem',
      },
      width: {
        144: '36rem',
        180: '45rem',
        240: '60rem',
        281: '70.25rem',
      },
      inset: {
        '11px': '11px',
        '15px': '15px',
      },
      minWidth: {
        170: '42.5rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};
