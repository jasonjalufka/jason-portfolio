const breakpoints = {
  desktop: "(min-width: 768px)",
}

const keyframes = {
  show: `@keyframes show {
    to {
      opacity: 1;
      transform: none;
    }
  }`,

  fill: `@keyframes fill {
    0% { clip-path: circle(0); }
    100% { clip-path: circle(100%); }
  }`,

  highlight: `@keyframes highlight {
    to {
      height: 40%;
    }
  }`,
}

const animations = {
  show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `,

  fill: `
    animation: fill 700ms ease-in forwards;
    ${keyframes.fill}
  `,

  highlight: `
    animation: highlight 500ms ease-in 700ms 1 forwards;
    ${keyframes.highlight};
  `,
}

const colors = {
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
}

const buttonColors = {
  primary: colors.blue,
  secondary: colors.green,
}

const textColors = {
  text: colors.eerieBlack,
  lightText: colors.blackOlive,
  link: colors.blue,
  hover: colors.meatBrown,
}

const fontFamilies = {
  default: "Hind",
  headings: "Open Sans",
}

const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
}

const borderRadius = "20px"

const boxShadow = "10px 10px 40px rgba(0, 0, 0, 0.2)"

const theme = {
  animations,
  boxShadow,
  breakpoints,
  buttonColors,
  colors,
  borderRadius,
  fontWeights,
  fontFamilies,
  textColors,
}

export default theme
