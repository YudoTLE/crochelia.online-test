
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        pink: '#F897AC',
        main:{
          a: '#F9EFF0',
          b: '#FA5784',
          c: '#CE1056',
          d: '#740933',
          e: '#400A18',
        },
        shade:{
          a: '#F2D5DA',
          b: '#F298B2',
          c: '#BE6988',
          d: '#8C4B63',
          e: '#270C13',
        },
      }
    },
    fontFamily: {
      roca:['Roca','sans-serif'],
      opensauce:['OpenSauce','sans-serif'],
    },
    colors: {
    
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

