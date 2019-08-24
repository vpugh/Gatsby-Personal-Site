import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PortfolioTemplate = ({ data }) => {
  return (
    <Layout>
      <h2>{data.projectsJson.title}</h2>
      <div className="project-info">
        <p><strong>Client:</strong> {data.projectsJson.client}</p>
        <p><strong>Role:</strong> {data.projectsJson.role}</p>
        <p><strong>Deliverable:</strong> {data.projectsJson.deliverable}</p>
        <p>{data.projectsJson.project_description}</p>
      </div>
      <h1>Test</h1>
    </Layout>
  );
};

export default PortfolioTemplate;

export const portfolioQuery = graphql`
query projectQuery($slug: String!){
  projectsJson(slug: {eq: $slug}) {
    url
    title
    role
    project_description
    github
    description
    deliverable
    client
    slug
    id
  }
}
`