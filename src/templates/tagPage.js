import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import './tags.scss';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout padTop={true}>
      <h1>{tagHeader}</h1>
      <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 30px 0'}}>
        {edges.map(({ node }) => {
          const { title, path: slug } = node.frontmatter
          return (
            <li key={slug}>
              <Link className="inline-link" to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link className="btn block" to="/tags">All tags</Link>
    </Layout>
  )
}
export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`