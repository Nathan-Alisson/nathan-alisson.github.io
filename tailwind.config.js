/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html"],
   theme: {
      extend: {
         fontFamily: {
            merriweather: '"Merriweather", serif',
            playfair: '"Playfair Display", serif',
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
