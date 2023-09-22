/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '576px', //bootstrap default
      // => @media (min-width: 640px) { ... } tailwind default

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
}