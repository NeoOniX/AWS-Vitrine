import pluginAnimationDelay from 'tailwindcss-plugin-animation-delay';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%) rotate(0deg)" },
          "100%": { transform: "translateY(100vh) rotate(360deg)" },
        }
      },
      animation: {
        fall: "fall 5s linear infinite",
        slow_spin: "spin 6s linear infinite",
      },
      animationDelay: {
        '0': '0s',
        '1': '1s',
        '2': '2s',
        '3': '3s',
        '4': '4s',
      },
    },
  },
  plugins: [
    pluginAnimationDelay
  ],
}

