import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import HomeBlog from "../components/home-blog"
import Hero from "../components/hero"
import {
  PortfolioPreview,
  PortfolioPreviewContainer,
  BlogPreview,
  BlogContainer,
} from "../styles/index-styled"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <SEO title="Front End Developer &amp; UX Designer" />
    <PortfolioPreviewContainer>
      <PortfolioPreview>
        {data.workThumb.edges.map(({ node: project }) => (
          <Link to={project.frontmatter.path} key={project.frontmatter.title}>
            <Image fluid={project.frontmatter.image.childImageSharp.fluid} />
          </Link>
        ))}
      </PortfolioPreview>
    </PortfolioPreviewContainer>
    <BlogContainer>
      <h2 className="grid" style={{ padding: "10px 0" }}>
        <Link to="/blog" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          Latest Articles
        </Link>
      </h2>
      <BlogPreview>
        {data.allMarkdownRemark.edges.map(({ node: post }) => {
          const title = post.frontmatter.title
          const tags = post.frontmatter.tags
          const fluidImage = post.frontmatter.cover_image.childImageSharp.fluid
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
      </BlogPreview>
      <Link
        className="btn block"
        style={{ width: "100%", textAlign: "center", marginBottom: 20 }}
        to="/blog"
      >
        Older Blog Post
      </Link>
    </BlogContainer>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  {
    allMarkdownRemark(
      limit: 6
      filter: { frontmatter: { draft: { eq: false }, date: { nin: "null" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
                fluid(maxWidth: 545, maxHeight: 265) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
          }
          timeToRead
        }
      }
    }
    workThumb: allMarkdownRemark(
      sort: { fields: frontmatter___order }
      filter: { frontmatter: { client: { regex: "" } } }
    ) {
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
            image {
              childImageSharp {
                fluid(maxWidth: 545, maxHeight: 545) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
