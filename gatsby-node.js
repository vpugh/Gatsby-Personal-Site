/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');
  const tagsTemplate = path.resolve('src/templates/tagPage.js');
  const workTemplate = path.resolve('src/templates/work.js');

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
    workPages: allMarkdownRemark(sort: {fields: frontmatter___role}, filter: {frontmatter: {client: {regex: ""}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            client
            github
            draft
            description
            deliverable
            role
            project_description
            url
          }
          html
        }
      }
    }
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
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

    const tags = res.data.tagsGroup.group

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}`,
        component: tagsTemplate,
        context: {
          tag: tag.fieldValue,
        }
      })
    })

    res.data.workPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
      })
    })
  })
}