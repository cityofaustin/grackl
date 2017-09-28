module.exports = {
  siteMetadata: {
    title: `Grackl`,
    tagline: `A bird's eye view of Digital Projects at the City of Austin.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}
