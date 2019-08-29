import React from 'react';
import Layout from "../components/layout"
import Image from 'gatsby-image';
import { graphql, Link } from 'gatsby';

const Work = ({ data }) => {
  return (
    <Layout>
      <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px' }}>
      {data.work.edges.map(({ node: work }) => (
        <Link to={work.frontmatter.path} key={work.frontmatter.title}>
          <Image fluid={work.frontmatter.image.childImageSharp.fluid} />
          <h2>{work.frontmatter.title}</h2>
        </Link>
      ))}
      </div>
    </Layout>
  );
};

export default Work;

export const queryW = graphql`
{
  work: allMarkdownRemark(sort: {fields: frontmatter___role}, filter: {frontmatter: {client: {regex: ""}}}) {
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