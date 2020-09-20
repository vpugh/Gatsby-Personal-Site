import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  AboutContainer,
  AvatarContainer,
  Quote,
  AboutPadding,
} from "../styles/about-styled"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout responsiveCollapse={true} style={{ margin: 0 }}>
    <SEO title="About UI/UX Developer" />
    <AboutPadding>
      <AvatarContainer>
        <div className="avatar--grid">
          <div className="avatar--img" />
          <p className="avatar--text">
            Always Learning and Eternally Inquisitive
          </p>
        </div>
        <h2 className="about--title">
          Driven by curiosity and a desire to make things work better.
        </h2>
        <a className="btn block" href="../tpr.pdf" download="tori-pugh-resume">
          Download Resume
        </a>
      </AvatarContainer>
      <Quote>
        I listen to understand a problem, do research to identify and/or confirm
        it, and then create solutions for them.
      </Quote>
      <AboutContainer>
        <div className="text-container">
          <p>
            I’m a designer who develops things or a deveoper who designs things.
            Either way, I'm passionate about creating things that put the users
            first. Wanting to make products that run better and are easier for
            them. I've had varied involvement as a visual designer, front-end
            developer, or email developer. There should be an aspect of
            user-experience understanding in design and development.
          </p>
          <p>
            “Design is more than making it pretty” — is my{" "}
            <em>modus operandi</em>. It's the culmination of a solution, your
            audience, and solving problems. This complex thought and execution
            is what I find most enjoyable and rewarding.
          </p>
          <p>
            My greatest asset is my passion for learning, due to my constant
            curiosity. I can learn new things at amazing speeds. Finding more
            efficient ways to create things and upcoming technologies brings me
            enjoyment. I look to expand my knowledge with online learning,
            classes, conferences, and articles.
          </p>
          <p>
            I try to give back when I can, I love sharing my knowledge. I've
            given a few talks before and I enjoy writing and sharing my
            experiences. I write when I can on{" "}
            <a
              className="inline-link"
              href="https://medium.com/@teekatwo"
              rel="noopener noreferrer"
              target="_blank"
            >
              Medium
            </a>{" "}
            or{" "}
            <a
              className="inline-link"
              href="https://dev.to/teekatwo"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dev.to
            </a>{" "}
            or{" "}
            <Link className="inline-link" to="/blog">
              my blog
            </Link>
            .
          </p>
          <p>
            In my free time, I'm an avid reader with a ever-growing backlog of
            books or trying to get through my game collection for the PS4 (Ghost
            of Tsushima, Last of Us 2, FIFA 20).
          </p>
          <p>
            I've had two speaking engagements at{" "}
            <a
              className="inline-link"
              href="https://www.youtube.com/watch?v=xHpZzXvwjwM&amp;list=PLyLTyCCJDTTe5Ay6yOqiBW8KgZyKXRI5U&amp;index=14"
              rel="noopener noreferrer"
              target="_blank"
            >
              Codeland 2018
            </a>{" "}
            and{" "}
            <a
              className="inline-link"
              href="https://wordpress.tv/2018/12/05/tori-pugh-the-importance-of-typography-design-usability-cost-and-loading-times/"
              rel="noopener noreferrer"
              target="_blank"
            >
              WordCamp Philly 2018
            </a>
            .
          </p>
        </div>
        <div className="sidebar">
          <h3 style={{ marginBottom: ".5rem" }}>Development</h3>
          <p>
            HTML, CSS/SASS, Javascript, Git, Gulp, NodeJs, React, Jest, React
            Testing Library, GraphQL, MirageJS, Gatsby,{" "}
            <span className="learning">Wordpress</span>
          </p>
          <h3 style={{ marginBottom: ".5rem" }}>Design</h3>
          <p>
            Responsive Web Design, UX/UI, Interaction Design, Typography,
            Branding, Prototyping, Email Design, Design Strategy
          </p>
          <h3 style={{ marginBottom: ".5rem" }}>Tools</h3>
          <p>
            Sketch, Photoshop, Illustrator, InDesign, Dreamweaver, Git, VSCode,
            SendGrid, Figma, <span className="learning">MailChimp</span>,{" "}
            <span className="learning">Affinity Designer</span>
          </p>
        </div>
      </AboutContainer>
    </AboutPadding>
  </Layout>
)

export default AboutPage
