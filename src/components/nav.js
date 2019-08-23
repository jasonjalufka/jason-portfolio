import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { Menu } from "@components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { theme, mixins, media } from "@styles"
import { navHeight } from "@config"
import { IconLogo } from "./icons"
import { throttle } from "../utils"
const { colors, fontSizes, fontWeights } = theme

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0%;
  padding: 0 50px;
  background-color: ${colors.darkBackground};
  transition: ${theme.transition};
  z-index: 11;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === "none" ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === "up"
      ? `0 10px 30px -10px ${colors.hamburgerShadow}`
      : "none"};
  transform: translateY(
    ${props =>
      props.scrollDirection === "down" ? `-${theme.navScrollHeight}` : "0px"}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`

const Navbar = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.white};
  z-index: 12;
`

const Logo = styled.div`
  ${mixins.flexCenter};
`

const LogoLink = styled(AniLink)`
  display: block;
  color: ${colors.white};
  width: 40px;
  height: 40px;
  &:hover,
  &:focus {
    svg {
      color: ${colors.lightBlue};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`

const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`

const HamburgerInner = styled.div`
  background-color: white;
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: white;
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 5px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`

const NavList = styled.ul`
  ${mixins.flexBetween};
  font-weight: ${fontWeights.medium};
`

const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: 20px;
`

const NavLink = styled(AniLink)`
  padding: 12px 10px;
`

const ResumeLink = styled.a`
  border-radius: 5px;
  margin-left: 10px;
  padding: 0px 10px 2px 10px;
  border: 1px solid ${colors.lightBlue};
  font-size: 20px;
  font-weight: ${fontWeights.medium};
`

const DELTA = 5
class Nav extends Component {
  state = {
    menuOpen: false,
    scrollDirection: "none",
    lastScrollTop: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => throttle(this.handleScroll()))
    window.addEventListener("resize", () => throttle(this.handleResize()))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll())
    window.removeEventListener("resize", () => this.handleResize())
  }

  handleScroll = () => {
    const { menuOpen, scrollDirection, lastScrollTop } = this.state
    const fromTop = window.scrollY

    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: "none" })
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" })
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" })
      }
    }

    this.setState({ lastScrollTop: fromTop })
  }

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu()
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen, scrollDirection } = this.state

    return (
      <NavContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? "blur" : ""} />
        </Helmet>
        <Navbar>
          <Logo>
            <LogoLink fade to="/" duration={0.5}>
              <IconLogo />
            </LogoLink>
          </Logo>

          <Hamburger onClick={this.toggleMenu}>
            <HamburgerBox>
              <HamburgerInner menuOpen={menuOpen} />
            </HamburgerBox>
          </Hamburger>
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
            <ResumeLink
              href="resume.pdf"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              resume
            </ResumeLink>
          </NavLinks>
        </Navbar>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </NavContainer>
    )
  }
}

export default Nav
