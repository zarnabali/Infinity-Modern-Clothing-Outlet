/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {

      fontFamily: {
        'arimo': ['Arimo', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
