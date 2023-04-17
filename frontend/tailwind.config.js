/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {
      colors: {
        primary: '#a5a1b2',
        light: '#d9d7e0',
        link: 'rgba(255, 255, 255, 0.48)',
        white: '#ffffff',
        orange: '#ff542e',
        red: '#ea003d',
        redHover: '#ff0f4d',
        green: '#73a32f',
        blue: '#00a5ff',
        purple: '#c447ff',
        background: '#100e19',
        backgroundSecondary: '#1f1b2e',
        backgroundLight: '#312b45',
        backgroundGrey: 'rgba(255, 255, 255, 0.24)',
        shadowOrange: 'rgba(255, 84, 46, 0.4)',
        shadowRed: 'rgba(234, 0, 61, 0.4)',
        shadowGreen: 'rgba(115, 163, 47, 0.4)',
        gradientPurpleStart: '#a869f0',
        gradientPurpleEnd: '#834cc2',
        shadowPurple: '#a869f0',
      },

      width: {
        mobile: '272px',
        desktop: '1216px',
      },

      padding: {
        default: '32px',
        mobile: '24px',
      },

      fontFamily: {
        default: ['var(--ff-base)'],
      },

      borderRadius: {
        default: '8px',
      },
    },
  },
  
  plugins: [],
}