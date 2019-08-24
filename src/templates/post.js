import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './postTemplate.scss';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout coverImage={post.frontmatter.cover_image}>
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
        cover_image
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`