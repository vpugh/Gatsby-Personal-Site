import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeContext from "../context/theme-context"
import { baseColor, darkColor } from "../utils/color-helper"

import Header from "./header-v2"
import "./styles.scss"
import Footer from "./footer"

const generateThemeColor = () => {
  const themeColors = ["orange", "green", "blue"]
  return themeColors[Math.floor(Math.random() * themeColors.length)]
}

const Layout = ({ children, padTop }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
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
    document.body.classList.add(color.toString())
    document.body.style.background = darkColor(color)
    context.setColor(color)
  }, [])

  return (
    <>
      <Header
        color={baseColor(themeColor)}
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          boxSizing: "border-box",
          padding: "0px 80px",
          margin: "0 auto",
        }}
      >
        <main
          style={{ paddingTop: padTop ? "80px" : "" }}
          className={themeColor}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
