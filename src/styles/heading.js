import styled from "styled-components"
import theme from "./theme"
import media from "./media"
const { colors, fontSizes, fontWeights } = theme

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: 34px;
  ${media.tablet`font-size: 24px;`};
`

export default Heading
