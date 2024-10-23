/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     'primary':'#27374D',
     'secondary':'#526D82',
     'tertiary':'#9DB2BF',
     'light':'#DDE6ED',
     'white':'#FFFFFF',
     'navy':'#789DBC',
     'launch':'#257180',
     'darky':'#243642',
     'green':'#6EC207'
    },
    extend: {},
  },
  plugins: [],
}