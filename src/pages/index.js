import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { About, Layout, Hero } from "@components"
import { mixins, Main } from "@styles"

const MainContainer = styled(Main)`
  /* margin: auto;
  max-width: 1440px;
  display: flex; */
`

export default ({ data }) => (
  <Layout>
    <MainContainer id="content">
      <Hero />
      <About data={data.about.edges} />
      {/* <div>
          {data.projects.edges.map(({ node }, i) => {
            return (
              <ul>
                <li>{node.frontmatter.title}</li>
                <li>{node.frontmatter.date}</li>
                <li>{node.frontmatter.github}</li>
              </ul>
            )
          })}
        </div>
        <div>
          {data.jobs.edges.map(({ node }, i) => {
            return (
              <ul>
                <li>{node.frontmatter.date}</li>
                <li>{node.frontmatter.title}</li>
                <li>{node.frontmatter.company}</li>
                <li>{node.frontmatter.location}</li>
              </ul>
            )
          })}
        </div> */}
    </MainContainer>
  </Layout>
)

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
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
            skills
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            github
            show
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }) {
      edges {
        node {
          frontmatter {
            date
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  }
`
