import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.section`
  padding-bottom: 40px;

  @media (max-width: 480px) {
    padding-bottom: 0;
  }
`

const Title = styled.h2`
  padding: 10px 0;
  margin-bottom: 60px;
  font-size: 3.125rem;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

const Grid = styled.div`
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 480px) {
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template: auto/repeat(2, 1fr);
    grid-gap: 30px;
  }
`

const ContactPage = () => {
  return (
    <Layout padTop={true}>
      <SEO title="Contact Me" />
      <Container>
        <Title>Contact</Title>
        <div style={{ background: "#fff", padding: 30 }}>
          <p>There are a few ways to get in contact with me.</p>
          <a
            className="link"
            href="mailto:hello@toripugh.com"
            rel="noopener noreferrer"
          >
            Email Me
          </a>
          <br />
          <a
            className="link"
            href="https://twitter.com/teekatwo"
            rel="noopener noreferrer"
          >
            DM on Twitter
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
