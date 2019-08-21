import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <p>Send us a message!</p>
    </div>
  </Layout>
)
