/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue-400': '#4facfe',
        'cyan-400': '#00f2fe',
        'red-400': '#ff6b6b',
        'yellow-400': '#feca57',
      },
      boxShadow: {
        '3xl': '0 20px 30px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

