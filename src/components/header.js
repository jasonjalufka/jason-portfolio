import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from "../theme"

const NavList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 5rem;
`

const NavItem = styled.li`
  list-style-type: none;
  padding: 1rem 1.5rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 300;
  position: relative;
  padding: 5px;
  transition: color 200ms ease-in-out;

  &:hover {
    /* color: ${theme.colors.jumbo}; */
    &:before {
      height: 50%;
      background-color: ${theme.colors.meatBrown};
    }
  }

  &:before {
    background-color: ${theme.colors.meatBrown};
    content: "";
    height: 0;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: height 0.2s ease-in-out;
    z-index: -1;
  }
`

const Header = ({ menuLinks, siteTitle }) => (
  <header>
    <div>
      <nav>
        <NavList>
          {menuLinks.map(link => (
            <NavItem key={link.name}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
