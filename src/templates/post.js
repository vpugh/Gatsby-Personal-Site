import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "gatsby-image"
import {
  TextBody,
  PostTitle,
  Date,
  ArticleLinks,
  ArticleLinkContainer,
} from "../styles/templates/blog-post-styled"

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark: post } = data

  const emptyLink = <div style={{ width: "25%" }} />

  const nextArticle = next ? (
    <ArticleLinks>
      <Link to={next.frontmatter.path}>
        <strong>Next Article</strong> <br />
        {next.frontmatter.title}
      </Link>
    </ArticleLinks>
  ) : (
    emptyLink
  )

  const prevArticle = previous ? (
    <ArticleLinks>
      <Link to={previous.frontmatter.path}>
        <strong>Previous Article</strong> <br />
        {previous.frontmatter.title}
      </Link>
    </ArticleLinks>
  ) : (
    emptyLink
  )

  return (
    <Layout
      coverImage={post.frontmatter.cover_image.childImageSharp.fluid}
      padTop={true}
    >
      <SEO title={`Blog - ${post.frontmatter.title}`} />
      <div style={{ background: "#fff" }}>
        {post.frontmatter.cover_image && (
          <Image
            fluid={post.frontmatter.cover_image.childImageSharp.fluid}
            style={{ marginBottom: "2rem" }}
          />
        )}
        <div style={{ padding: "0 40px", maxWidth: 760, margin: "0 auto" }}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <Date>
            <em>Published Date:</em> {post.frontmatter.date}
          </Date>
          <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <ArticleLinkContainer style={{ padding: 40 }}>
          {prevArticle}
          {nextArticle}
        </ArticleLinkContainer>
      </div>
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
