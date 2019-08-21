import media from "./media"
import Section from "./section"

const theme = {
  colors: {
    blackOlive: "#393e41",
    lightGray: "#d3d0cb",
    meatBrown: "#e2c044",
    jumbo: "#8A897C",
    wintergreen: "#587b7f",
    eerieBlack: "#1e2019",
    blue: "#107090",
    red: "#CA3C25",
    green: "#7FB069",
    orange: "#E6AA68",
    black: "#1D1A05",
    pageBackground: "#eee",
    contentBackground: "#fff",
    highlight: "#fdfd96",
    // New Colors
    darkBackground: "#1E2022",
    lightBlue: "#BCDFEB",
    lightText: "#C9D6DF",
    white: "#FFFFFF",
    hamburgerBackground: "#282A2D",
    hamburgerShadow: "rgba(0,0,0,0.32)",
  },

  fontSizes: {
    small: "14px",
    medium: "22px",
    large: "26px",
    xlarge: "75px",
    xxlarge: "100px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "5px",
  navHeight: "100px",
  navScrollHeight: "70px",
  margin: "20px",

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },

  boxShadow: "10px 10px 40px rgba(0, 0, 0, 0.2)",

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
}

export default theme
