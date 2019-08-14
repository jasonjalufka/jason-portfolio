import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import background from "../images/background.svg"
import logo from "../images/logo.svg"
import theme from "../theme"

const Background = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 60vh;
  width: auto;
  z-index: -5;
  user-select: none;
  ${props => props.theme.animations.fill};
`

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 60px;
`

const Container = styled.div`
  margin: 25vh auto;
  max-width: 1440px;
  display: flex;
`

const Name = styled.h1`
  font-size: 100px;
  font-weight: bold;

  ${props => props.theme.animations.show};
  opacity: 0;
  transform: translateY(-20px);
  position: relative;

  &::before {
    background-color: ${theme.colors.meatBrown};
    content: "";
    height: 0%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    ${props => props.theme.animations.highlight};
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Container>
        <Background src={background} className="bg" alt="background" />
        <Logo src={logo} className="logo" alt="logo" />
        <Name>Jason Jalufka</Name>
      </Container>
    </Layout>
  </ThemeProvider>
)
