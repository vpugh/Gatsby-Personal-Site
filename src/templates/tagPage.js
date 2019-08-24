import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function TagPage({
  location,
  pageContext: {tag},
  data: {
    allMarkdownRemark,
    site: {siteMetadata},
  },
}) {
  return (
    <Layout location={location} title={siteMetadata.title}>
      <div>
        <SEO title={`Posts tagged "${tag}"`} keywords={[tag]} />
        <h1>Posts Tagged "{tag}"</h1>
        <PostsList posts={allMarkdownRemark.edges} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___tags}) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
