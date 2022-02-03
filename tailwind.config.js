module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
    },
    colors: {
      primary: '#0276FF',
      secondary: '#8002FF',
      dark: '#252525',
      light: '#FAFAFA',
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

// primary: '#0276FF',
// secondary: '#8002FF',
// dark: '#999',
// light: '#111',
// black: '#fff',
// white: '#000',
