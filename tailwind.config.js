
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundClip: {
        'padding-box': 'padding-box',
      },
      colors: {
        primary: '#FFAA00',
        secondary: '',
        'dim-white': '#F2F2F2',
        'primary-dark': '#0A2933',
        'secondary-dark': '#fafaf9',
        'primary-light': '#854d0e',
        'secondary-light': '#a1a1aa',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        agbalumo: ["Aoboshi One", "serif"],
        lobster: ["Lobster Two", "sans-serif"],
        texturina: ["Texturina", "serif"],
        indie: ["Indie Flower","serif"],
        bad: ["Bad Script","serif"],
        tang: ["Tangerine", "serif"],
        meri: ["Merienda", "serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "900px",
      lg: "1200px",
      xl: "1700px",
    },

    variants: {
      extend: {
        backgroundClip: ['responsive'],
      },
    },

    daisyui: {
    
    },
  },
  plugins: [
  
  ],
}