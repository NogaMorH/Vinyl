/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#f1c40f',
      'text-clr': '#2c3e50',
      'secondary': '#34495e',
      'main-bg': '#f9fafb',
      'secondary-bg': '#f3f4f6'
    }
  },
  plugins: [],
}
