import styled from "styled-components"
import mixins from "./mixins"

const HeaderSection = styled.section`
  ${mixins.headerPadding};
  max-width: none;
  height: 50vh;
  min-height: 320px;
`

export default HeaderSection
