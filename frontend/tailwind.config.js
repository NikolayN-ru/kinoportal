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
      sm: "320px",
      md: "600px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1320px",
    },

    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        link: "rgb(var(--color-white) / 0.48)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        orange: "var(--color-orange)",
        red: "var(--color-red)",
        redHover: "var(--color-red-hover)",
        green: "var(--color-green)",
        blue: "var(--color-blue)",
        purple: "var(--color-purple)",
        purpleDark: "var(--color-purple-dark)",
        purpleDarkLighter: "var(--color-purple-dark-lighter)",
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        backgroundLight: "var(--background-light)",
        backgroundGrey: "rgb(var(--color-white) / 0.24)",
        shadowOrange: "rgb(var(--color-orange) / 0.4)",
        shadowRed: "rgb(var(--color-red) / 0.4)",
        shadowGreen: "rgb(var(--color-green) / 0.4)",
        gradientPurpleStart: "var(--color-gradient-purple-start)",
        gradientPurpleEnd: "var(--color-gradient-purple-end)",
        shadowPurple: "var(--color-shadow-purple)",
        optionText: "var(--color-option-text)",
        selectedValues: "var(--color-selected-values)",
        purpleSelected: "var(--color-purple-selected)",
        separator: "var(--color-separator)",
      },

      width: {
        mobile: "var(--content-width-mobile)",
        desktop: "var(--content-width-desktop)",
        promoContainerSM: "var(--promo-container-width-sm)",
        promoContainerMD: "var(--promo-container-width-md)",
        promoContainerLG: "var(--promo-container-width-lg)",
        promoContainerXL: "var(--promo-container-width-xl)",
        promoSliderButtonLG: "var(--promo-slider-button-width-lg)",
        promoSliderButtonXL: "var(--promo-slider-button-width-xl)",
      },

      padding: {
        default: "var(--padding-default)",
        mobile: "var(--padding-mobile)",
      },

      fontFamily: {
        default: ["var(--ff-base)"],
      },

      fontSize: {
        default: "15px",
        mobile: "13px",
      },

      borderRadius: {
        default: "8px",
      },

      lineHeight: {
        default: "1.4",
      },
    },
  },

  plugins: [],
};
