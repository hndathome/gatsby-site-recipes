/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ast24q460vq3`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      },

    },
    `gatsby-plugin-sass`
  ],
}
