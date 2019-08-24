/* eslint-disable no-dupe-keys */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyItems: 'space-between',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 0, flex: 1, textTransform: 'uppercase' }}>
        <Link
          to="/"
          style={{
            color: '#424242',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Link style={{ color: `#424242` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
