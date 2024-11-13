/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: '#8C52FF',
        secColor: '#824DED1A',
        secColor2: '#082552',
        footColor: '#E15A5A',
        subtext: '#5E5B63',
        downloadColor: '#12141D',
        befitRed: '#E15A5A',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],  // Adds DM Sans as the default sans font
      },
    },
  },
  plugins: [],
};