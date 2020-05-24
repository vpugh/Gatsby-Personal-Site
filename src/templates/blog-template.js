import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import HomeBlog from "../components/home-blog"
import { BlogContainer, BlogHome } from "../styles/blog-styled"

const IndexPage = ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage === 2 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <Layout>
      <SEO title="Blog" />
      <BlogContainer>
        <h2
          className="title"
          style={{ padding: "10px 0", color: "rgba(255, 255, 255, 0.9" }}
        >
          Articles | Writings and Mental Musings
        </h2>
        <BlogHome>
          {data.allMarkdownRemark.edges.map(({ node: post }) => {
            const title = post.frontmatter.title
            const tags = post.frontmatter.tags
            const fluidImage = post.frontmatter.cover_image
              ? post.frontmatter.cover_image.childImageSharp.fluid
              : "../images/"
            const image = post.frontmatter.cover_image
            const date = post.frontmatter.date
            const slug = post.frontmatter.path
            const id = post.id
            const timeToRead = post.timeToRead

            return (
              <HomeBlog
                slug={slug}
                image={image}
                title={title}
                date={date}
                tags={tags}
                timeToRead={timeToRead}
                key={id}
                fluidImage={fluidImage}
              />
            )
          })}
        </BlogHome>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 500,
            margin: "40px auto 20px auto",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 20,
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index}
              to={`/blog${index === 0 ? "" : `/${index + 1}`}`}
              style={{ fontWeight: currentPage === index + 1 ? "bold" : "" }}
            >
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </BlogContainer>
    </Layout>
  )
}

export default IndexPage

export const blogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false }, date: { nin: "null" } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            excerpt
            title
            tags
            cover_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`
