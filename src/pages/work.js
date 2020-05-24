import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const WorkContainer = styled.section`
  padding-bottom: 40px;

  @media (max-width: 480px) {
    padding-bottom: 0;
  }
`

const WorkTitle = styled.h2`
  padding: 10px 0;
  margin-bottom: 60px;
  font-size: 3.125rem;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

const WorkGrid = styled.div`
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 480px) {
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template: auto/repeat(2, 1fr);
    grid-gap: 30px;
  }
`

const Work = ({ data }) => {
  return (
    <Layout padTop={true}>
      <SEO title="Work" />
      <WorkContainer>
        <WorkTitle>Work</WorkTitle>
        <WorkGrid>
          {data.work.edges.map(({ node: work }) => (
            <Link to={work.frontmatter.path} key={work.frontmatter.title}>
              <Image fluid={work.frontmatter.image.childImageSharp.fluid} />
              <h2 style={{ marginTop: "1.6rem" }}>{work.frontmatter.title}</h2>
            </Link>
          ))}
        </WorkGrid>
      </WorkContainer>
    </Layout>
  )
}

export default Work

export const queryW = graphql`
  {
    work: allMarkdownRemark(
      sort: { fields: frontmatter___role }
      filter: { frontmatter: { client: { regex: "" } } }
    ) {
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
