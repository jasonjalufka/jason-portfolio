import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Contact Jason Jalufka" />
    </Helmet>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <p>Send us a message!</p>
    </div>
  </Layout>
)
