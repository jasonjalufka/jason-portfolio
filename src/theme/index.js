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
}

const animations = {
  show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `,
}

const colors = {
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
  text: colors.black,
  lightText: colors.contentBackground,
  link: colors.blue,
  hover: colors.green,
}

const fontFamilies = {
  default: "Helvetica Neue",
  headings: "Roboto, serif",
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
