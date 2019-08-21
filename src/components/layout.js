import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Nav } from "@components"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "@styles"
import SEO from "./seo"

const getWeatherData = async set => {
  const response = await fetch("https://jsn-stats.now.sh/weather")
  const result = await response.json()
  set({
    temperature: result.temp,
    city: result.city,
  })
}

export const DataContext = React.createContext({
  weather: null,
})

const Layout = ({ children }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeatherData(setWeather)
  }, [])

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <div id="root">
        <SEO metadata={data.site.siteMetadata} />

        <GlobalStyle />
        <DataContext.Provider value={{ weather }}>
          <div className="container">
            <Nav />
            {children}
          </div>
        </DataContext.Provider>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
