import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { theme, mixins, media } from "@styles"
const { colors, fontSizes, fontWeights } = theme

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  display: none;
  ${media.tablet`display: block;`};
`

const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.hamburgerBackground};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: -10px 0px 30px -15px ${colors.hamburgerShadow};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`

const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
`

const NavList = styled.ol`
  width: 100%;
`

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: 40px;
  font-weight: 200;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: 30px;
    /* font-size: ${fontSizes.medium}; */
  `};
  /* ${media.tiny`font-size: ${fontSizes.small};`}; */
  /* &:before {
    display: block;
    content: ">";
    color: ${colors.lightBlue};
    font-size: ${fontSizes.small};
    margin-bottom: 5px;
  } */
`

const NavLink = styled(AniLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`

const ResumeLink = styled.a`
  border-radius: 5px;
  margin-left: 10px;
  padding: 18px 50px;
  border: 1px solid ${colors.lightBlue};
  font-size: 20px;
  width: max-content;
`

const HamburgerResumeLink = styled.a`
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  margin-left: 10px;
  font-size: 40px;
  padding: 2px 30px 10px 30px;
  font-weight: 200;
  width: max-content;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: 30px;
  `};
`

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute("href")
    const isNotMenu =
      target.classList && target.classList[0].includes("MenuContainer")

    if (isLink || isNotMenu) {
      toggleMenu()
    }
  }

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            <NavListItem>
              <NavLink fade to="/about" duration={0.5}>
                about
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink fade to="/work" duration={0.5}>
                work
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink fade to="/projects" duration={0.5}>
                projects
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink fade to="/contact" duration={0.5}>
                contact
              </NavLink>
            </NavListItem>
          </NavList>
          <HamburgerResumeLink
            href="resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            resume
          </HamburgerResumeLink>
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  )
}

export default Menu
