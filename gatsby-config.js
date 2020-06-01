/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        //name: `An`,
        //short_name: `GatsbyJS`,
        //start_url: `/`,
        //background_color: `#f7f0eb`,
        //theme_color: `#a2466c`,
        //display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ]
}
