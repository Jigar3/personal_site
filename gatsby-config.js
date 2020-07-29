require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/reponame",
  siteMetadata: {
    siteTitle: "Jigar Chavada",
    siteTitleAlt: "Jigar Chavada",
    siteHeadline: "Jigar Chavada - Software Developer",
    siteUrl: "https://jigarc.netlify.com/",
    siteDescription: "Portfolio website of Jigar Chavada",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    author: "Jigar Chavada",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Bookshelf`,
            slug: `/bookshelf`,
          },
          {
            title: `Summaries`,
            slug: `/tags/podcast-summary`,
          }
        ],
        externalLinks: [
          {
            name: `Resume`,
            url: `https://drive.google.com/file/d/1zUWgoZaZ9TUH9eWCGPsFvTb4u2euILSR/view?usp=sharing`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
