import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import SEO from "../components/seo"
import './work.scss';

const WorkTemplate = ({ data }) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <SEO title={`Work - ${project.frontmatter.title}`} />
      <h2 className="title">{project.frontmatter.title}</h2>
      <h3 className="subtitle">{project.frontmatter.sub_title}</h3>
      <div className="intro-block">
        <p>
          <strong>Client:</strong> {project.frontmatter.client}
        </p>
        <p>
          <strong>Role:</strong> {project.frontmatter.role}
        </p>
        <p>
          <strong>Deliverable:</strong> {project.frontmatter.deliverable}
        </p>
        <p>
          <strong>Project Description:</strong> {project.frontmatter.project_description}
        </p>
        {project.frontmatter.url && (
          <a className="btn block" href={project.frontmatter.url} title="" rel="noopener noreferrer" target="_blank">Site</a>
        )}
        {project.frontmatter.github && (
          <a className="inline-link" href={project.frontmatter.github} title="" rel="noopener noreferrer" target="_blank">Github</a>
        )}
      </div>
      <div className="text-body" dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  );
};

export default WorkTemplate;

export const workpageQuery = graphql`
  query workPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        title
        client
        url
        github
        role
        deliverable
        project_description
        sub_title
      }
    }
  }
`