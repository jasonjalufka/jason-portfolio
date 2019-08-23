import React, { useContext } from "react"
import { email } from "@config"
import styled from "styled-components"
import { theme, mixins, media, Section } from "@styles"
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
  /* ${media.giant`left: -120px;`};
  ${media.bigDesktop`left: -120px;`};
  ${media.desktop`
    bottom: -35vh;
    left: -70px;
  `};
  ${media.tablet`
    left: -20px;
    bottom: -33vh;
  `};
  ${media.phablet`display: none;`}; */
`

const Weather = styled.h3`
  font-size: 26px;
  font-weight: 200;
  /* position: relative;
  bottom: 0;
  left: 0; */
`

const SocialContainer = styled.div`
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
  color: ${colors.lightText};
  width: 40px;
  height: 40px;
  ${media.desktop`width: 30px; height: 30px;`};
  ${media.tiny`width: 25px; height: 25px;`};
  &:hover,
  &:focus {
    svg {
      fill: ${colors.lightBlue};
    }
  }
  svg {
    fill: ${colors.white};
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
          <SocialLink>
            <IconEmail />
          </SocialLink>
          <SocialLink>
            <IconGithub />
          </SocialLink>
          <SocialLink>
            <IconLinkedIn />
          </SocialLink>
          <SocialLink>
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
