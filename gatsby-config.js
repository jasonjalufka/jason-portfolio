const config = require(`./src/config`)

module.exports = {
  siteMetadata: {
    title: "Jason Jalufka",
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    author: `@jasonblehh`,
    menuLinks: [
      {
        name: `home`,
        link: `/`,
      },
      {
        name: `about`,
        link: `/about`,
      },
      {
        name: `work`,
        link: `/work`,
      },
      {
        name: `contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JasonJalufka`,
        short_name: `JasonJalufka`,
        start_url: `/`,
        background_color: `#587B7F`,
        theme_color: `#587B7F`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
