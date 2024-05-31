/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        'crypto-height': 'calc(100vh - 5rem)',
      },
    },
  },
  plugins: [],
};
