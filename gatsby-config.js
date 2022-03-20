module.exports = {
  siteMetadata: {
    title: `Martin's Home`,
    titleTemplate: "%s | Martin's Home",
    siteUrl: "https://www.martincheng0.com",
    author: `Martin Cheng`,
    keywords: `blog`,
    description: "Created by Martin",
    image: "/icon.png"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "HASHNODE",
        // This is the field under which it's accessible
        fieldName: "hashnode",
        // URL to query from
        url: "https://api.hashnode.com/",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    'gatsby-plugin-postcss',
  ]
};