/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#171717",
        "orange-100": "#FF6C47",
        "light-text": "rgba(64, 64, 64, 0.60)",
        "light-dark": "#404040",
        "light-orange": "#FF6C47",
        "deep-gray": "rgba(244, 244, 244, 0.60)"
      },
      backgroundColor: {
        orange: '#FF6C47'
      },
      width: {
        clamp: "clamp(300px, 40vh, 500px)"
      },
      screens: {
        mm: "1060px",
        mw: "950px"
      }
    },
  },
  plugins: [],
}

