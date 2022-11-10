/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: 
      {
        sans: 'Cinzel, sans-serif'  
      },
      fontSize: {
        responsiveH1: 'clamp(2rem, 1rem + 3vw, 4.5rem)',
        responsiveH2: 'clamp(2rem, 1rem + 1vw, 3rem)',
      },
      backgroundImage:{
        firstSection: 'url(/first-section-background.png)',
        ulSecondSection:'linear-gradient(180deg, #16161A 0%, #27272E 90% )'
      },
     
      colors:{
        black: {
          500: '#16161A',
          300: '#27272E'
        },
        yellow:{
          600: '#FFC34D'
        },
      }
    },
  },
  plugins: [],
}
