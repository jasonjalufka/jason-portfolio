import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { theme, mixins, media, Section, Heading } from "@styles"
const { colors, fontSizes, fontWeights } = theme

const AboutContainer = styled(Section)`
  position: relative;
`

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`

const ContentContainer = styled.div`
  width: 80%;
  max-width: 800px;
  ${media.tablet`width: 100%;`};
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat() (2, minmax() (140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: ${fontSizes.small};
  color: ${colors.lightText};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.lightBlue};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`

const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`
const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: ${theme.transition};
`
const AvatarContainer = styled.a`
  width: 100%;
  position: relative;
  background-color: ${colors.lightBlue};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 5px;
      left: 5px;
    }
    &:before {
      top: -5px;
      left: -5px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ${theme.transition};
  }
  &:before {
    border: 1px solid ${colors.white};
    top: -20px;
    left: -20px;
    z-index: 2;
    /* background-color: ${colors.white}; */
    /* mix-blend-mode: screen; */
  }
  &:after {
    border: 1px solid ${colors.white};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`

const About = ({ data }) => {
  console.log("data", data)
  const { frontmatter, html } = data[0].node
  const { title, skills, avatar } = frontmatter

  return (
    <AboutContainer id="about">
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <AvatarContainer>
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </AvatarContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

export default About
