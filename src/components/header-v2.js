import React from "react"
import { Link } from "gatsby"

const Header = ({ color, menuLinks, siteTitle }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 80,
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: -webkit-linear-gradient(
        //   left,
        //   #ffb64d 0%,
        //   #aed87c 50%,
        //   #4dd8ff 100%
        // );
        // "-webkit-border-image":
        //   "-webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          boxSizing: "border-box",
          padding: "0px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#424242",
              textDecoration: "none",
            }}
          >
            <h1
              style={{
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                fontSize: "1.6rem",
              }}
            >
              {siteTitle}
            </h1>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {menuLinks.map(menuItem => (
              <Link
                to={menuItem.link}
                style={{
                  display: "inline-block",
                  marginRight: 20,
                  marginTop: 1,
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    color: "#fff",
                    opacity: 0.5,
                  },
                }}
                activeStyle={{
                  borderBottom: "2px solid #444",
                }}
              >
                {menuItem.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
