/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Based on RGB 31-98-141 from the brand doc
        'krossover-blue': 'rgb(31, 98, 141)', 
      },
      fontFamily: {
        // Anton for headers
        anton: ['Anton', 'sans-serif'], 
        // Poppins for standard text
        poppins: ['Poppins', 'sans-serif'], 
      },
      keyframes: {
        driveIn: {
          '0%': { transform: 'translateX(100vw)', opacity: '0' },
          '80%': { transform: 'translateX(-10px)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        // 1.5s animation duration, ease-out curve
        'drive-in': 'driveIn 1.5s ease-out forwards', 
      }
    },
  },
  plugins: [],
}