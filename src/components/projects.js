import React from "react"
import styled from "styled-components"
import { IconGithub } from "@components/icons"
import { theme, media, Section } from "@styles"
const { colors } = theme

const ProjectsContainer = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`

const ProjectsGrid = styled.div``

const Projects = ({ data }) => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid></ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects
