/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "FAESEL.COM",
    author: "Faesel Saeed",
    description: "Personal blog of Faesel Saeed",
    siteUrl: "https://www.faesel.com",
    social: {
      linkedin: "https://www.linkedin.com/in/faesel-saeed-a97b1614",
      twitter: "https://twitter.com/@faeselsaeed",
      twitterUsername: "@faeselsaeed",
      github: "https://github.com/faesel",
      flickr: "https://www.flickr.com/photos/faesel/",
      email: "faesel@outlook.com",
    },
    rssFeedUrl: "/rss.xml",
  },

  plugins: [`gatsby-plugin-react-helmet`],
}
