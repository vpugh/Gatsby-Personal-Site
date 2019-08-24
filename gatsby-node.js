/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');
  const tagsTemplate = path.resolve('src/templates/tagPage.js');
  const portfolioTemplate = path.resolve('src/templates/portfolio.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            tags
          }
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          slug
          description
          image {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    });

    res.data.allProjectsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: portfolioTemplate,
        context: {
          slug: node.slug,
        }
      })
    });

    // res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //   createPage({
    //     path: node.frontmatter.tags,
    //     component: tagsTemplate,
    //   })
    // })
  })
}