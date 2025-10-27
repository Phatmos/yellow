module.exports = {
  siteMetadata: {
    title: `Yellowstone Renovation`,
    description: `Top-rated remodeling, siding & deck contractors serving Lexington, KY and Central Kentucky. Licensed experts delivering quality craftsmanship, fast scheduling, and fair pricing.`,
    author: `Yellowstone Renovation`,
    siteUrl: `https://yellowstonerenovation.com`, // ✅ IMPORTANT for sitemap + canonical URLs
    keywords: [
      "siding contractor lexington ky",
      "deck builders lexington ky",
      "remodeling company lexington ky",
      "home renovation lexington",
      "yellowstone renovation"
    ],
  },
  siteMetadata: {
    siteUrl: `https://yellowstonerenovation.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // ✅ SEO meta tags
    {
      resolve: `gatsby-plugin-sitemap`, // ✅ Required for Google indexing
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`, // ✅ Helps Google crawl site properly
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // ✅ Branding + icons for favicon install
      options: {
        name: `Yellowstone Renovation`,
        short_name: `Yellowstone`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFD300`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // ✅ Put favicon file here
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
