import React from 'react';
import Layout from "../components/layout"
import Image from 'gatsby-image';
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby';

const Work = ({ data }) => {
  return (
    <Layout padTop={true}>
      <SEO title="Work" />
      <section className="work" style={{ paddingBottom: '40px' }}>
        <h2 className="title" style={{ padding: '10px 0', marginBottom: '60px', fontSize: '3.125rem', lineHeight: '1.2' }}>Work</h2>
        <div style={{ display: 'grid', gridTemplate: 'auto/repeat(2, 1fr)', gridGap: '30px' }}>
        {data.work.edges.map(({ node: work }) => (
          <Link to={work.frontmatter.path} key={work.frontmatter.title}>
            <Image fluid={work.frontmatter.image.childImageSharp.fluid} />
            <h2 style={{ marginTop: '1.6rem' }}>{work.frontmatter.title}</h2>
          </Link>
        ))}
        </div>
        </section>
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