module.exports = {
  siteMetadata: {
    title: "RinGoku Work",
    author: "Yuta Sakou(RinGoku)",
    description: "ITエンジニアとして活動している酒向祐太(りんごく)の活動についてのサイトです"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RinGoku Work',
        short_name: 'RinGoku Work',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-remark-images`,
    `gatsby-remark-relative-images`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-56P3656",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "work",
      },
    },
  ]
}
