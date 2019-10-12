import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HomeBlog from "../components/home-blog";
import styled from 'styled-components';

const BlogContainer = styled.section`
  @media (max-width: 480px) {
    padding: 40px 0 0 0;
  }

  @media (min-width: 768px) {
    padding: 80px 0 40px 0;
  }

  .title {
    font-size: 1.4rem;
    margin-bottom: 20px;
    
    @media (min-width: 768px) {
      margin-bottom: 60px;
      font-size: 3.125rem;
      line-height: 1.2;
      padding: 10px 0;
    }
  }
`;

const BlogHome = styled.div`
  grid-template: auto/repeat(2, 1fr);
  grid-gap: 30px;

  @media (min-width: 768px) {
    display: grid;
  }

  @media (max-width: 480px) {
    grid-template: auto/auto;
    padding-bottom: 0;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <BlogContainer>
      <h2 className="title" style={{ padding: '10px 0' }}>Writings and Mental Musings</h2>
      <BlogHome>
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
      </BlogHome>
    </BlogContainer>
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