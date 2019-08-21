import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import theme from "@styles"
import { Layout } from "@components"

const FeaturedImg = styled(Img)`
  width: 30%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  mix-blend-mode: multiply;
  /* filter: grayscale(100%) contrast(1) brightness(90%); */
`

export default ({ data }) => {
  const project = data.markdownRemark
  const { external, title, tech, github, cover } = project.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <FeaturedImg fluid={cover.childImageSharp.fluid} />
        <div>
          <ul>
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <p>{external}</p>
          <p>{github}</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tech
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
