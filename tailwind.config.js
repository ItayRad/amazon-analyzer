/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0A0F1E',
          800: '#0D1526',
          700: '#111D38',
          600: '#162248',
        },
        amber: {
          400: '#FBBF24',
          300: '#FCD34D',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-up-delay': 'fade-up 0.7s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fade-up 0.7s ease-out 0.4s forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
