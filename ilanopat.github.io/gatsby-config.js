module.exports = {
  siteMetadata: {
    title: 'Patricia Anne Ilano',
    subTitle: 'Software Engineer',
    description:
      'Patricia Anne Ilano is a full stack software engineer who specializes in web and software applications.',
    author: 'Patricia Anne Ilano',
    siteUrl: 'https://ilanopat.github.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/peach.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-google-analytics`
  ],
}
