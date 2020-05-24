import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialMedia from "./social-media"
import {
  NavigationContainer,
  NavigationContent,
  NavLogo,
  GradientBorder,
  HeaderContainer,
} from "../styles/header-styled"

const Header = ({ menuLinks, siteTitle }) => (
  <HeaderContainer>
    <GradientBorder />
    <NavigationContainer>
      <NavLogo>
        <Link to="/" className="logo-link">
          {siteTitle}
        </Link>
      </NavLogo>
      <NavigationContent>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              {link.name === "Contact" && (
                <a
                  className="link"
                  href="mailto:hello@toripugh.com"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              )}
              {link.name !== "Contact" && (
                <Link
                  className="link"
                  to={link.link}
                  activeStyle={{
                    fontWeight: "600",
                    borderBottom: "2px solid #444",
                  }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* <SocialMedia iconWidth={32} /> */}
      </NavigationContent>
    </NavigationContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
