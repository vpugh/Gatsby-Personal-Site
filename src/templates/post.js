import React from 'react'
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import Image from 'gatsby-image';
import './postTemplate.scss';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout coverImage={post.frontmatter.cover_image.childImageSharp.fluid}>
      <SEO title={`Blog - ${post.frontmatter.title}`} />
      {post.frontmatter.cover_image && (
        <Image fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{ marginBottom: '2rem'}} />
      )}
      <h1>{post.frontmatter.title}</h1>
      <p>Published Date: {post.frontmatter.date}</p>
      <div className="text-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export default Template;


export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
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