export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",  // ✅ ADD THIS
  theme: {
    extend: {
      colors: {
        'perplexity': {
          50: '#fef7e4', 100: '#fde8af', 200: '#fcd57b', 
          300: '#f9a825', 400: '#e68f0f', 500: '#d47d0a',
          600: '#b1660a', 700: '#8e5108', 800: '#6b3d06', 900: '#4e2d04',
        }
      }
    },
  },
  plugins: [],
};
