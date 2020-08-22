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
        background: selectedColor(context.color, "lightest"),
      }}
    >
      <div>
        <p
          style={{
            fontSize: "4.2em",
            marginTop: 0,
            marginBottom: ".5rem",
            letterSpacing: "-1px",
            fontWeight: 600,
          }}
        >
          Let's work together
        </p>
        <FooterCTA>
          {/* <strong>Get in Touch.</strong> If you've got an inquiry for a job or
          project, a general question, or something I didn't specify. */}
          {/* I′m open for new opportunities, including freelance or contract jobs. */}
          <a
            className="inline-link"
            href="mailto:hello@toripugh.com"
            target="_blank"
            rel="noopener noreferrer"
            title="hello@toripugh.com"
          >
            hello@toripugh.com
          </a>
        </FooterCTA>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
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
      </div>
    </FooterContainer>
  )
}

export default Footer
