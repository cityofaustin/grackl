module.exports = {
  siteMetadata: {
    title: `ATX Project Tracker`,
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
    {
      resolve: `gatsby-source-airtable-local`,
      options: {
        apiKey: `keyssV4KNWdZD5AGR`,
        baseId: `appuWc6duIrqvsZQt`,
        tableName: `projects`,
        tableView: `Grid view`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}
