/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        'moderate-violet': 'var(--moderate-violet)',
        'very-dark-grayish-blue': 'var(--very-dark-grayish-blue)',
        'very-dark-blackish-blue': 'var(--very-dark-blackish-blue)',
    
        'light-gray': 'var(--light-gray)',
        'light-grayish-blue': 'var(--light-grayish-blue)'
      },
      fontFamily:{
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
