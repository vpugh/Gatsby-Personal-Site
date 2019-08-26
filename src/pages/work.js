import React from 'react';
import Layout from "../components/layout"
import { graphql } from 'gatsby';

const Work = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {data.work.edges.map(({ node: work }) => (
        <div key={work.frontmatter.title}>
          <h2>{work.frontmatter.title}</h2>
        </div>
      ))}
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
          image
        }
        html
      }
    }
  }
}
`