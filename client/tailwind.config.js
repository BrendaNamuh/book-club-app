/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project's structure
    './public/index.html',
  ],
  theme: {
    extend: {
      // You can add custom colors, spacing, etc. here
      colors: {
        customColor: '#1c3f95', // Example of a custom color
      },
    },
  },
  plugins: [],
}
