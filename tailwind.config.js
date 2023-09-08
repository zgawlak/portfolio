/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('/src/assets/img/profile.jpeg')"
      },
      animation: {
        profile_animate: "profile_animate 8s ease-in-out infinite 1s"
      },
      borderRadius: {
        'custom': '60% 40% 30% 70%/60% 30% 70% 40%'
      }
    },
  },
  plugins: [],
}

