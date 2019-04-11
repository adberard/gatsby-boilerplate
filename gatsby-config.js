// const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby-Redux-Material-Boilerplate`,
    description: ``,
    language: `en`,
  },
  plugins: [
    // The order of the plugin matter.
    // `gatsby-plugin-root-import`,
    {
      /* eslint-disable @typescript-eslint/camelcase */
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Landing page`,
        short_name: `landingpage`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        legacy: true,
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': `src/`,
          '@assets': `src/assets`,
          '@styles': `src/styles`,
          '@ducks': `src/ducks`,
          '@configs': `src/configs`,
          '@utils': `src/utils`,
          '@components': `src/components`,
          '@containers': `src/containers`,
          '@layouts': `src/layouts`,
          '@pages': `src/pages`,
          '@sass': `src/sass`,
          '@templates': `src/templates`,
          // '@news': `content/news`,
        },
        extensions: [`tsx`, `ts`, `js`, `jsx`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jura`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    // `gatsby-plugin-offline`,
  ],
};
