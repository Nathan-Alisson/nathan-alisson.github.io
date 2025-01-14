/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html"],
   theme: {
      extend: {
         fontFamily: {
            roboto: '"Roboto Condensed", serif',
            playwrite: '"Playwrite VN", serif',
         },

         dropShadow: {
            orange: "0 0 0.5rem #f9731655",
            emerald: "0 0 0.5rem #10b98155",
         },

         boxShadow: {
            box: "0 0 0.5rem",
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
