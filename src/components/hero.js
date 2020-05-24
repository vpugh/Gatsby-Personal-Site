import React, { useContext } from "react"
import { HeroContainer } from "../styles/hero-styled"
import ThemeContext from "../context/theme-context"
import { selectedColor } from "../utils/color-helper"

const Hero = () => {
  const context = useContext(ThemeContext)

  return (
    <HeroContainer>
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          boxSizing: "border-box",
          padding: "0px 80px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            paddingTop: 80,
            maxWidth: "74%",
            textAlign: "center",
            margin: "0 auto",
            paddingBottom: 60,
            color: "#fff",
          }}
        >
          <div style={{ padding: "20px 40px" }}>
            <p
              style={{
                fontSize: 54,
                fontWeight: 600,
                marginBottom: "1.8rem",
                lineHeight: 1.1,
                color: selectedColor(context.color, "darker"),
              }}
            >
              Front End Developer &amp; UX Designer.
            </p>
            <p style={{ fontSize: 28, lineHeight: 1.3 }}>
              What I do is simple to say but complex in execution. I generate
              solutions, code stuff, and design things.
              {/* I create solutions, code stuff and design things. Love to learn
              new things. Portfolio of a front-end developer with back-end
              experience. I want to make the web beautiful with intelligent
              design */}
            </p>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}

export default Hero
