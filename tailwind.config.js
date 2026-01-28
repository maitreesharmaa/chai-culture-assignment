/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chai-dark': '#2C1A1D',   
        'chai-gold': '#D4AF37',   
        'chai-cream': '#F5F5DC',  
        'chai-accent': '#C5A028', 
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(to right, #D4AF37, #F3E5AB, #D4AF37)',
      }
    },
  },
  plugins: [],
}