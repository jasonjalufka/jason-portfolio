import React, { useContext } from "react"
import styled from "styled-components"
import { animations, theme, mixins, media, Section } from "@styles"
import { DataContext } from "@components/layout"
import {
  IconEmail,
  IconGithub,
  IconLinkedIn,
  IconInstagram,
} from "@components/icons"
const { colors, fontSizes, fontWeights } = theme

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`

const Name = styled.h1`
  ${animations.fadeIn};
  animation-delay: 400ms;
  opacity: 0;
  color: ${colors.white};
  display: flex;
  width: 100%;
  justify-content: center;
  line-height: 0;
  font-size: ${fontSizes.xxlarge};
  font-weight: ${fontWeights.bold};
  ${media.desktop`font-size: ${fontSizes.xlarge};`};
  ${media.thone`font-size: 60px`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`

const Role = styled.h2`
  ${animations.fadeIn};
  animation-delay: 700ms;
  opacity: 0;
  line-height: 1.1;
  color: ${colors.lightBlue};
  font-weight: ${fontWeights.thin};
  font-size: 26px;
  letter-spacing: 5px;
  width: 100%;
  ${mixins.flexCenter};
  ${media.desktop`font-size: 22px;`};
  ${media.tablet`font-size: 20px;`};
  ${media.phablet`font-size: 18px;`};
  ${media.phone`font-size: 18px;`};
  ${media.tiny`font-size: 13px;`};
`

const WeatherContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const Weather = styled.h3`
  font-size: 26px;
  font-weight: 200;
`

const SocialContainer = styled.div`
  ${animations.fadeIn};
  animation-delay: 1000ms;
  opacity: 0;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;
`

const SocialList = styled.ul`
  list-style: none;
`

const SocialLink = styled.a`
  margin: 20px;
  color: ${colors.white};
  width: 40px;
  height: 40px;
  ${media.desktop`width: 30px; height: 30px;`};
  ${media.tiny`width: 25px; height: 25px;`};
  &:hover,
  &:focus {
    svg {
      fill: rgba(255, 255, 255, 0.1);
      stroke-width: 1.3;
    }
  }
  svg {
    fill: rgba(0, 0, 0, 0);
    stroke: ${colors.white};
    stroke-width: 1;
    transition: ${theme.transition};
    user-select: none;
  }
`

const Hero = () => {
  const data = useContext(DataContext)

  return (
    <HeroContainer>
      <Name>Jason Jalufka</Name>
      <Role>full-stack web developer</Role>
      <SocialContainer>
        <SocialList>
          <SocialLink href="mailto:jasonjalufka@gmail.com">
            <IconEmail />
          </SocialLink>
          <SocialLink
            href="https://github.com/jasonjalufka"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/jasonjalufka/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconLinkedIn />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/jasonblehh/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconInstagram />
          </SocialLink>
        </SocialList>
      </SocialContainer>
      <WeatherContainer>
        <Weather>
          {data.weather
            ? `${data.weather.temperature} in ${data.weather.city}`
            : `Loading...`}
        </Weather>
      </WeatherContainer>
    </HeroContainer>
  )
}

export default Hero
