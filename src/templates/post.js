import React from 'react'
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { TextBody } from '../styles/templates/blog-post-styled';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout coverImage={post.frontmatter.cover_image.childImageSharp.fluid} padTop={true}>
      <SEO title={`Blog - ${post.frontmatter.title}`} />
      {post.frontmatter.cover_image && (
        <Image fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{ marginBottom: '2rem'}} />
      )}
      <h1 style={{ marginBottom: '.25rem' }}>{post.frontmatter.title}</h1>
      <p><em>Published Date:</em> {post.frontmatter.date}</p>
      <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
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