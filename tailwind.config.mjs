/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeColor: {
          '0%': { 
            backgroundColor: 'var(--bg-start)',
            color: 'var(--text-start)' 
          },
          '100%': { 
            backgroundColor: 'var(--bg-end)',
            color: 'var(--text-end)' 
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeColor: 'fadeColor 0.3s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};