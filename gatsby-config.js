const title = 'Client Starter'

module.exports = {
  siteMetadata: {
    title,
    titleTemplate: `%s | ${title}`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@chrisservius`,
    keywords: ['guyane', 'liberté']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-react-leaflet`,
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: ['/app/*', '/group/*', '/event/*'] }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
