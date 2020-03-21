/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.js')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    slug
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({node}) => {
          const slug = node.frontmatter.slug

          createPage({
            path: slug,
            component: postTemplate,
            context: {
                slug
            }
          })
        })
      })
    )
  })
})