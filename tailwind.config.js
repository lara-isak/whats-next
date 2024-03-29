/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#f59e0b',
        dark: '#111827',
        light: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
