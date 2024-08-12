/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smartphone': '640px',
        'tablet': '768px',
        'desktop': '1024px',
        'lg-desktop': '1280px',
        'xl-desktop': '1440px'
      }
    },
  },
  plugins: [],
}

