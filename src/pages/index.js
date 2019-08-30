import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HomeBlog from "../components/home-blog";
import Hero from "../components/hero";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="UI/UX Developer" />
    <Hero />
    <section className="portfolio-preview">
      <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px' }}>
        {data.workThumb.edges.map(({ node: project }) => (
          <Link to={project.frontmatter.path} key={project.frontmatter.title}>
            <Image fluid={project.frontmatter.image.childImageSharp.fluid} />
            <h3 className="pp-title">{project.frontmatter.title}</h3>
            <p className="pp-subtitle">{project.frontmatter.description}</p>
          </Link>
        ))}
      </div>
    </section>
    <section className="blog underline">
      <h2 className="grid" style={{ padding: '10px 0' }}>
        <Link to="/blog" style={{ color: '#111' }}>
          Blog - Writings and Mental Musings
        </Link>
      </h2>
      <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px'}}>
        {data.allMarkdownRemark.edges.map(({ node: post}) => {
          const title = post.frontmatter.title;
          const tags = post.frontmatter.tags;
          const fluidImage = post.frontmatter.cover_image.childImageSharp.fluid;
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
      <Link className="btn block" to="/blog">Older Blog Post</Link>
    </section>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
{
  allMarkdownRemark(limit: 6, filter: {frontmatter: {draft: {eq: false}, date: {nin: "null"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
  workThumb: allMarkdownRemark(sort: {fields: frontmatter___role}, filter: {frontmatter: {client: {regex: ""}}}) {
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
              fluid {
                ...GatsbyImageSharpFluid
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