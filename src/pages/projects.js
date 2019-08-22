import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import WorkLink from "../components/work-link"
import styled from "styled-components"
import { Section, theme } from "@styles"
import { mixins, media } from "@styles"

const HeaderSection = styled(Section)`
  ${mixins.headerPadding};
  max-width: none;
  height: 50vh;
`

const Header = styled.h1`
  margin: 0;
  font-size: 100px;
  font-weight: 700;
  ${media.phablet`font-size: 90px;`}
  ${media.phone`font-size: 75px;`}
`

const Description = styled.h4`
  color: white;
  font-weight: 200;
  ${media.phone`padding: 0 30px;`}
`

const BodySection = styled.div`
  min-height: 50vh;
  height: 100%;
  background-color: white;
  color: #1e2022;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  position: relative;
  top: -50px;
`

const ProjectContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 20px;
  transition: ${theme.transition};
  background-color: transparent;
  &:before {
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://source.unsplash.com/random/400x300");
    filter: grayscale(100%) brightness(0.4);
  }
  &:hover {
    transform: translateY(-15px);
    &:before {
      filter: grayscale(0%) brightness(0.5);
      transform: translateY(10px);
    }
  }
`

const Project = styled.div`
  position: relative;
`

const ProjectTitle = styled.h1`
  margin: 0;
  padding: 0 10px;
  color: white;
  text-shadow: #000000d4 -1px 1px 0px;
`

const ProjectDescription = styled.h4`
  padding: 0 10px;
  color: white;
  font-weight: 200;
  text-shadow: #000000d4 -1px 1px 0px;
`

const Projects = ({
  data: {
    projects: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <AniLink fade to={edge.node.fields.slug}>
        <ProjectContainer>
          <Project>
            <ProjectTitle>{edge.node.frontmatter.title}</ProjectTitle>
            <ProjectDescription
              dangerouslySetInnerHTML={{ __html: edge.node.html }}
            ></ProjectDescription>
          </Project>
        </ProjectContainer>
      </AniLink>
    ))

  // <WorkLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <HeaderSection>
        <Header>Projects</Header>
        <Description>
          a small collection of projects that I've worked on
        </Description>
      </HeaderSection>
      <BodySection>
        <ProjectsContainer>{Projects}</ProjectsContainer>
      </BodySection>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            github
            external
            tech
            show
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
