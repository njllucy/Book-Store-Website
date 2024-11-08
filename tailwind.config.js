/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode:"class",
  theme: {
    extend: {
      screens:{
        "md":"820px",
      },
      
    },
    fontFamily : {
      nunito:["Nunito", "sans-serif"],
      poppins:["Poppins","sans-serif"],
      roboto:["Roboto","sans-serif"],
      spartan:["League Spartan", "sans-serif"],
  
    }
  },
  plugins: [],
}

