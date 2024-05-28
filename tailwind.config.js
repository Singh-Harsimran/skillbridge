/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        light: 'var(--color-textLight)',
        darkBG: 'var(--color-darkBackground)',
        lightBG: 'var(--color-lightBackground)',
        iconBG: 'var(--color-iconBackground)',
      },
    },
  },
  plugins: [],
}