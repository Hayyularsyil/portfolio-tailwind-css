/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        primary: '#00BCD4',
        secondary: '#64748b',
        dark: '#0f172a',
        slate: {
          100: '#f1f5f9',
          400: '#94a3b8', 
          500: '#64748b',
        }
      },
    },
  },
  plugins: [],
}