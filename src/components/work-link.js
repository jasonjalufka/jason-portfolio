import React from "react"
import { Link } from "gatsby"

const WorkLink = ({ post }) => {
  const { frontmatter, fields, html } = post
  const { date, title, cover, github, external, tech, show } = frontmatter
  const { slug } = fields
  return (
    <div>
      <Link to={post.fields.slug}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </div>
  )
}

export default WorkLink
