module.exports = {
  siteMetadata: {
    title: 'Tama\'s Project',
    description: `
      My name is Raka Pratama, you can call me Tama. I am professional Software Engineer.
      Have 2+ years experiences on developing website both Front-End and Back-End.
      Most technologyI used is using Javascript, with a wide-range of frameworks. But,
      the one that I frequently used and my personal choice is React for Front-End and
      Express for Back-End. Beside of Javascript, I also use Dart and Go programming language.
    `,
    author: '@prauliyatama',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/tama-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
