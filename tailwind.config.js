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
        'ck-black': '#0A0A0A',
        'ck-charcoal': '#141414',
        'ck-burgundy': '#722F37',
        'ck-burgundy-light': '#8B3D47',
        'ck-gold': '#CFB53B',
        'ck-gold-muted': '#B8A23D',
        'ck-white': '#F5F5F5',
        'ck-gray': '#888888',
        'ck-gray-dark': '#444444',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%': { transform: 'translateY(-10px) translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
