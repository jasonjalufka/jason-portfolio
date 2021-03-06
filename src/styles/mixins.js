import { css } from "styled-components"
import theme from "./theme"
import media from "./media"
const { colors } = theme
const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.lightBlue};
      outline: 0;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  headerPadding: css`
    padding: 100px;
    ${media.desktop`padding: 100px;`};
    ${media.thone`padding: 100px 25px;`};
  `,

  headerSizing: css`
    font-size: 100px;
    ${media.tablet`font-size: 80px;`};
    ${media.thone`font-size: 70px;`};
    ${media.phablet`font-size: 55px;`};
    ${media.phone`font-size: 50px;`};
    ${media.tiny`font-size: 45px;`};
  `,
}

export default mixins
