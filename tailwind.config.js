export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-blue':'#204b85',
        'main-white':'#e2e8f0'
      },
      backgroundColor:{
        'main-blue':'#204b85'
      }
    },
  },
  plugins: [],
}