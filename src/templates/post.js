import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { TextBody } from '../styles/templates/blog-post-styled';

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext;
  const { markdownRemark: post } = data;

  const nextArticle = next && (
    <Link to={next.frontmatter.path} style={{ maxWidth: '25%'}}>
      <strong>Next Article</strong> <br/>
      {next.frontmatter.title}
    </Link>
  )

  const prevArticle = previous && (
    <Link to={previous.frontmatter.path} style={{ maxWidth: '25%'}}>
      <strong>Previous Article</strong> <br/>
      {previous.frontmatter.title}
    </Link>
  )

  return (
    <Layout coverImage={post.frontmatter.cover_image.childImageSharp.fluid} padTop={true}>
      <SEO title={`Blog - ${post.frontmatter.title}`} />
      {post.frontmatter.cover_image && (
        <Image fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{ marginBottom: '2rem'}} />
      )}
      <h1 style={{ marginBottom: '.25rem' }}>{post.frontmatter.title}</h1>
      <p><em>Published Date:</em> {post.frontmatter.date}</p>
      <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        {prevArticle}{nextArticle}
      </div>
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