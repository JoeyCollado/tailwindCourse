/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ //configurate here to add more customized class
        customcolor:{
           one: "#49e659", //custom color
           two: "#753935"  //custom color
        } 
      },
    },
  },
  plugins: [],
}