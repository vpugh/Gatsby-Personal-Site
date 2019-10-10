/* eslint-disable no-dupe-keys */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss';
import SocialMedia from "./social-media";
import styled from 'styled-components';

const NavigationContainer = styled.div`
  margin: 40px auto 0 auto;
  max-width: 82%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-items: space-between;
  align-items: center;

  @media (max-width: 480px) {
    display: block;
    margin: 20px auto 0 auto;
    max-width: fit-content(100%) / fit-content(100%);
  }
`;

const NavigationContent = styled.nav`
  display: flex;
  @media (max-width: 480px) {
    display: block;
  }

  ul {
    display: flex;
    flex: 1;
    margin-bottom: 0;

    @media (max-width: 480px) {
      display: inline-block;
      margin: 10px 0;
    }
  }

  li {
    list-style-type: none;
    padding: 0 .75rem;
    margin-bottom: 0;
    letter-spacing: 1.25px;
    align-self: center;

    @media (max-width: 480px) {
      display: inline-block;
      padding-left: 0;
    }
  }
`;

const NavLogo = styled.h1`
  margin: 0;
  flex: 1;
  text-transform: uppercase;

  .logo-link {
    color: #424242;
    text-decoration: none;
  }
`;

const Header = ({ menuLinks, siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      className="gradient-border"
      style={{
        background: '#ff9600',
        background: '-moz-linear-gradient(left,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%)',
        background: '-webkit-linear-gradient(left,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%)',
        background: 'linear-gradient(to right,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%)',
        height: '20px',
      }}
    />
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
              {link.name === 'Contact' && (
                <a className="link" href="mailto:hello@toripugh.com" rel="noopener noreferrer">
                  {link.name}
                </a>
              )} 
              {link.name !== 'Contact' && (
                <Link className="link" to={link.link} activeStyle={{
                  fontWeight: '600',
                  borderBottom: '2px solid #444'
                }}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <SocialMedia iconWidth={32} />
      </NavigationContent>
    </NavigationContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
