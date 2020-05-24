import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  WorkTitle,
  WorkSubtitle,
  WorkIntroBlock,
  TextBody,
} from "../styles/templates/work-styled"

const WorkTemplate = ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <SEO title={`Work - ${project.frontmatter.title}`} />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <WorkTitle>{project.frontmatter.title}</WorkTitle>
        <WorkSubtitle>{project.frontmatter.sub_title}</WorkSubtitle>
      </div>
      <div
        style={{
          background: "#fff",
          margin: "40px auto 0 auto",
          padding: "0 30px",
          maxWidth: 920,
        }}
      >
        <WorkIntroBlock>
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
            <strong>Project Description:</strong>{" "}
            {project.frontmatter.project_description}
          </p>
          {project.frontmatter.url && (
            <a
              className="btn block"
              href={project.frontmatter.url}
              title=""
              rel="noopener noreferrer"
              target="_blank"
            >
              Site
            </a>
          )}
          {project.frontmatter.github && (
            <a
              className="inline-link"
              href={project.frontmatter.github}
              title=""
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          )}
        </WorkIntroBlock>
        <TextBody dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    </Layout>
  )
}

export default WorkTemplate

export const workpageQuery = graphql`
  query workPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
