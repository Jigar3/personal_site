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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID].filter(Boolean),
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jigar Chavada - Software Developer`,
        short_name: `Jigar Chavada`,
        description: `Portfolio website of Jigar Chavada`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
