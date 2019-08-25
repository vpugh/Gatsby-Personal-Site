import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HomeBlog from "../components/home-blog";

const showTags = tags => {
  const tagArray = tags.split(',');
  return tagArray;
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="UI/UX Developer" />
    <section className="portfolio-preview">
      <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px' }}>
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <Link to={project.slug} key={project.title}>
            <Image fluid={project.image.childImageSharp.fluid} />
            <h3 className="pp-title">{project.title}</h3>
            <p className="pp-subtitle">{project.description}</p>
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
          const image = post.frontmatter.cover_image;
          const date = post.frontmatter.date;
          const slug = post.frontmatter.path;
          const id = post.id;
          const timeToRead = post.timeToRead;

          return (
            <HomeBlog slug={slug} image={image} title={title} date={date} tags={showTags(tags)} timeToRead={timeToRead} key={id} />
          )
        })}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
{
  allMarkdownRemark(limit: 6, filter: {frontmatter: {draft: {eq: false}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          path
          excerpt
          title
          tags
          cover_image
          date(formatString: "MMMM Do, YYYY")
        }
        timeToRead
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`