import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeContext from "../context/theme-context"
import { baseColor, darkColor } from "../utils/color-helper"
import { Container } from "../styles/layout-styled"

import Header from "./header-v2"
import "./styles.scss"
import Footer from "./footer"

const generateThemeColor = () => {
  const themeColors = ["orange", "green", "blue"]
  return themeColors[Math.floor(Math.random() * themeColors.length)]
}

const Layout = ({ children, padTop, responsiveCollapse = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            label
          }
          title
        }
      }
    }
  `)

  const context = useContext(ThemeContext)

  const [themeColor, setThemeColor] = useState()

  useEffect(() => {
    const color = generateThemeColor()
    setThemeColor(color)
    document.body.classList = color.toString()
    document.documentElement.style.background = darkColor(color)
    context.setColor(color)
  }, [])

  return (
    <>
      <Header
        color={baseColor(themeColor)}
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <Container responsiveCollapse={responsiveCollapse || null}>
        <main
          style={{ paddingTop: padTop ? "80px" : "" }}
          className={themeColor}
        >
          {children}
        </main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
