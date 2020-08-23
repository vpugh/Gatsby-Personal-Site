import React, { useContext } from "react"
import {
  FooterContainer,
  FooterCTA,
  FooterSocial,
  FooterCopyright,
  FooterEmail,
  FooterSocialContainer,
} from "../styles/footer-styled"
import ThemeContext from "../context/theme-context"
import { selectedColor } from "../utils/color-helper"
import TwitterIcon from "./svg/twitter"
import InstagramIcon from "./svg/instagram-icon"
import DribbbleIcon from "./svg/dribbble-icon"
import CodepenIcon from "./svg/codepen-icon"
import GithubIcon from "./svg/github-icon"

const Footer = () => {
  const context = useContext(ThemeContext)
  return (
    <FooterContainer
      style={{
        background: selectedColor(context.color, "lightest"),
      }}
    >
      <div>
        <FooterCTA>Let's work together</FooterCTA>
        <FooterEmail
          className="inline-link"
          href="mailto:hello@toripugh.com"
          target="_blank"
          rel="noopener noreferrer"
          title="hello@toripugh.com"
        >
          hello@toripugh.com
        </FooterEmail>
        <FooterSocialContainer>
          <FooterSocial>
            <li>
              <a
                style={{ display: "flex", alignItems: "center" }}
                href="https://twitter.com/teekatwo"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <TwitterIcon /> Twitter
              </a>
            </li>
            <li>
              <a
                style={{ display: "flex", alignItems: "center" }}
                href="https://dribbble.com/teekatwo"
                target="_blank"
                rel="noopener noreferrer"
                title="Dribbble"
              >
                <DribbbleIcon /> Dribbble
              </a>
            </li>
            <li>
              <a
                style={{ display: "flex", alignItems: "center" }}
                href="https://codepen.io/Vpugh/"
                target="_blank"
                rel="noopener noreferrer"
                title="Codepen"
              >
                <CodepenIcon /> Codepen
              </a>
            </li>
            <li>
              <a
                style={{ display: "flex", alignItems: "center" }}
                href="https://github.com/vpugh"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <GithubIcon /> Github
              </a>
            </li>
            <li>
              <a
                style={{ display: "flex", alignItems: "center" }}
                href="https://instagram.com/toripugh"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <InstagramIcon /> Instagram
              </a>
            </li>
          </FooterSocial>
          <FooterCopyright>
            © {new Date().getFullYear()} Tori Pugh. All Rights Reserved. Built
            with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterCopyright>
        </FooterSocialContainer>
      </div>
    </FooterContainer>
  )
}

export default Footer
