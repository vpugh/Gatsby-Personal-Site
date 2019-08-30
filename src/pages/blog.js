import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HomeBlog from "../components/home-blog";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <section className="blog">
      <h2 className="title" style={{ padding: '10px 0' }}>Writings and Mental Musings</h2>
      <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px'}}>
        {data.allMarkdownRemark.edges.map(({ node: post}) => {
          const title = post.frontmatter.title;
          const tags = post.frontmatter.tags;
          const fluidImage = post.frontmatter.cover_image ? post.frontmatter.cover_image.childImageSharp.fluid : '../images/';
          const image = post.frontmatter.cover_image;
          const date = post.frontmatter.date;
          const slug = post.frontmatter.path;
          const id = post.id;
          const timeToRead = post.timeToRead;

          return (
            <HomeBlog slug={slug} image={image} title={title} date={date} tags={tags} timeToRead={timeToRead} key={id} fluidImage={fluidImage} />
          )
        })}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const blogQuery = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}, date: {nin: "null"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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