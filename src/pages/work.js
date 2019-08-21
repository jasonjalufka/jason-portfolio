import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WorkLink from "../components/work-link"
import { Main, Section } from "@styles"

const Work = ({
  data: {
    projects: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <WorkLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Section>
        <div>{Projects}</div>
      </Section>
    </Layout>
  )
}

export default Work

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
