/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0d59f2",
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
        "midnight": "#0a0e17",
        "charcoal": "#1c2433"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      backgroundImage: {
        'cinematic-gradient': 'linear-gradient(135deg, #0a0e17 0%, #101622 40%, #1c2433 100%)',
        'glow-radial': 'radial-gradient(circle at center, rgba(13, 89, 242, 0.15) 0%, rgba(13, 89, 242, 0) 70%)',
        'beam-light': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
