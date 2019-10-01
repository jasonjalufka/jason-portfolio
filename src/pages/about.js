import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>About</title>
      <meta name="description" content="About Jason Jalufka" />
    </Helmet>
    <div style={{ color: `teal` }}>
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)
