import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WorkLink from "../components/work-link"
import { Main, Section } from "@styles"

const Work = ({
  data: {
    work: { edges },
  },
}) => {
  const Work = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <WorkLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Section>
        <div>{Work}</div>
      </Section>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            company
            location
            range
            url
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
