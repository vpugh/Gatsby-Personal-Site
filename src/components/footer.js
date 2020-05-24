import React, { useContext } from "react"
import {
  FooterContainer,
  FooterCTA,
  FooterSocial,
  FooterCopyright,
} from "../styles/footer-styled"
import ThemeContext from "../context/theme-context"
import { selectedColor } from "../utils/color-helper"

const Footer = () => {
  const context = useContext(ThemeContext)
  return (
    <FooterContainer
      style={{
        background: selectedColor(context.color, "light"),
        opacity: 0.7,
      }}
    >
      <div>
        <FooterCTA>
          <strong>Get in Touch.</strong> If you've got an inquiry for a job or
          project, a general question, or something I didn't specify.
          <br />
          Drop me a line at{" "}
          <strong>
            <a
              className="inline-link"
              href="mailto:hello@toripugh.com"
              target="_blank"
              rel="noopener noreferrer"
              title="hello@toripugh.com"
            >
              hello@toripugh.com
            </a>
          </strong>
          .
        </FooterCTA>
        <FooterSocial>
          <li>
            <a
              href="https://twitter.com/teekatwo"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/teekatwo"
              target="_blank"
              rel="noopener noreferrer"
              title="Dribbble"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/Vpugh/"
              target="_blank"
              rel="noopener noreferrer"
              title="Codepen"
            >
              Codepen
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vpugh"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/toripugh"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              Instagram
            </a>
          </li>
        </FooterSocial>
        <FooterCopyright>
          © {new Date().getFullYear()} Tori Pugh. All Rights Reserved. Built
          with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterCopyright>
      </div>
    </FooterContainer>
  )
}

export default Footer
