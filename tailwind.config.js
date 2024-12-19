/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html"],
   theme: {
      colors: {
         dark: "#191E29",
         "blue-dark": "#132D46",
         gray: "#696E79",
         light: "#ffffff",
         highlight: "#01C38D",
      },

      extend: {
         fontFamily: {
            merriweather: '"Merriweather", serif',
            playfair: '"Playfair Display", serif',
         },

         dropShadow: {
            "green": "0 0 0.5rem #01C38D66",
         },

         boxShadow: {
            "box": "0 0 0.5rem"
         },

         animation: {
            scroll: "scroll 2s infinite",
         },

         keyframes: {
            scroll: {
               "0%": { top: "-100%" },
               "25%": { opacity: "1" },
               "100%": { top: "20px", opacity: "0" },
            },
         },
      },
   },
   plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
