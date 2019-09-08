import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.scss';

const AboutPage = () => (
  <Layout>
    <SEO title="UI/UX Developer" />
    <section className="about">
      <div className="avatar--container">
        <div className="avatar--grid">
          <div className="avatar--img" />
          <p className="avatar--text">
            Always Learning and Eternally Inquisitive
          </p>
        </div>
        <h2 className="hero--title">
        Driven by curiosity and a desire to make things work better.
        </h2>
        <a className="btn block" href="https://toripugh.com/images/Resume-Victoria-Tori-Pugh.pdf" download>
          Download Resume
        </a>
      </div>
      <h2 className="quote">I listen to understand a problem, do research to identify and/or confirm it, and then create solutions for them.</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
        <div className="about--textholder">
          <p>I’m a UI/UX developer who is passionate about creating products that puts the users first. I want to make products that run better and are easier for the user. I've had varied involvement as a visual designer, front-end developer, or email developer. I think there should always be an aspect of user-experience understanding in design, development, or email creation.</p>

          <p>The idea — “design is more then making it pretty” — is my driving principle. Design is the culmination of creation and execution of a solution; understanding your audience; and critical thinking skills to solve problems. This combination of thought and execution is what I find most enjoyable and rewarding.</p>

          <p>My greatest asset is my eternal passion for learning, due in part to my constant curiosity. I can learn new things at amazing speeds. I take great enjoyment in trying to find more efficient ways to create things and upcoming technologies. I’m always looking to expand my knowledge through online learning, classes, going to conferences, or reading articles.</p>

          <p>
I share and interact on <a className="inline-link" href="https://twitter.com/teekatwo" rel="noopener noreferrer" target="_blank">Twitter</a>; get inspired and showcase work on <a className="inline-link" href="https://dribbble.com/teekatwo" rel="noopener noreferrer" target="_blank">Dribbble</a>; tinker and learn new code on <a className="inline-link" href="https://codepen.io/Vpugh/" rel="noopener noreferrer" target="_blank">Codepen</a>; work on side projects on <a className="inline-link" href="https://github.com/vpugh" rel="noopener noreferrer" target="_blank">Github</a>; and write when I can on <a className="inline-link" href="https://medium.com/@teekatwo" rel="noopener noreferrer" target="_blank">Medium</a> or <a className="inline-link" href="https://dev.to/teekatwo" rel="noopener noreferrer" target="_blank">Dev.to</a>. In my free time, I'm an avid reader with a ever-growing backlog of books or trying to get through my game collection for the PS4 (Red Dead Redemption 2, AC Odyssey, Tomb Raider).
</p>

          <p>
I've had two speaking engagements at <a className="inline-link" href="https://www.youtube.com/watch?v=xHpZzXvwjwM&amp;list=PLyLTyCCJDTTe5Ay6yOqiBW8KgZyKXRI5U&amp;index=14" rel="noopener noreferrer" target="_blank">Codeland 2018</a> and <a className="inline-link" href="https://wordpress.tv/2018/12/05/tori-pugh-the-importance-of-typography-design-usability-cost-and-loading-times/" rel="noopener noreferrer" target="_blank">WordCamp Philly 2018</a>.
</p>
        </div>
        <div className="about--sidebar">
          <h3>Development</h3>
          <p>HTML, CSS, SASS, Javascript, Git, Gulp, NodeJs, Vue, React, Jest, Gatsby <span className="learning">Wordpress</span></p>
          <h3>Design</h3>
          <p>Responsive Web Design, UX/UI, Interaction Design, Typography, Branding, Prototyping, Email Design, Design Strategy</p>
          <h3>Tools</h3>
          <p>Sketch, Photoshop, Illustrator, InDesign, Dreamweaver, Coda, Sublime Text, GitHub, VSCode, Webstorm, SendGrid, <span className="learning">MailChimp</span>, <span className="learning">Affinity Designer</span></p>
        </div>
      </div>
      </section>
  </Layout>
)

export default AboutPage