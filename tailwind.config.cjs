/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: 'rgb(var(--text-color))',
        secondary: 'rgb(var(--color-secondary))',
      },
      backgroundSize: {
        '20px': '20px',
      },
      backgroundImage: {
        'background': "url('./bg.jpg')",
      },
    },
  },
  plugins: [],
};
