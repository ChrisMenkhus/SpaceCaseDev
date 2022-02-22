module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
    },
    colors: {
      primary: '#0276FF',
      secondary: '#8002FF',
      dark: '#252525',
      light: '#F5F5F5',
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      current: 'currentColor',
    },

    extend: {},
  },
  variants: {
    extend: {
      top: ['last'],
    },
  },
  plugins: [],
}
