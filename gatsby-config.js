module.exports = {
  siteMetadata: {
    title: "eTalk Solutions",
    description:
      "San Diego Web Development Company specializing in progessive web apps for small business ",
    author: "Alec Venzor",
    siteUrl: "https://etalksolutions.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-next-seo",
    "gatsby-plugin-sitemap",

    "gatsby-plugin-offline",
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-06V9M2YYYG", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `eTalk Solutions`,
        short_name: `eTalk Solution`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#288002`,
        display: `standalone`,
        icon: "src/images/icon.png",
        cache_busting_mode: "yes",
        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/Data/`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2405584,
        sv: 6,
      },
    },
  ],
};
