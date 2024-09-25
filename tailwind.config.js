/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)"
        },

        secondary: {
          paleblue: "hsl(223, 100%, 88%)",
          lightred: "hsl(354, 100%, 66%)",
        },

        neutral: {
          gray: "hsl(0, 0%, 59%)",
          vdarkblue: "hsl(209, 33%, 12%)"       ,
        }

      },

      
    },
  },
  plugins: [],
}