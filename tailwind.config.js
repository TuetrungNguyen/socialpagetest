/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
      },

      colors:{
        'cgreen': '#c5f82a',
        'white': '#ffffff',
        'black': '#000000',
        'gray700': '#333333',
        'gray800': '#1f1f1f',
        'gray900': '#141414'
      },
  

    },
  },
  plugins: [
    require('daisyui'),
  ],
}