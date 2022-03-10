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
    extend: {
      fontSize: {
        dynamic: 'clamp(5.4rem, 10vw, 8rem)',
        dynamicMd: 'clamp(4rem, 10vw, 5rem)',
      },
    },
  },
  variants: {
    extend: {
      top: ['last'],
    },
  },
  plugins: [],
}

// colors: {
//   primary: '#0276FF',
//   secondary: '#8002FF',
//   dark: '#252525',
//   light: '#F5F5F5',
//   black: '#000',
//   white: '#fff',
//   transparent: 'transparent',
//   current: 'currentColor',
// },

// primary: '#FB4D3D',
// secondary: '#FB4D3D',
// dark: '#292F36',
// light: '#FBFCFF',
