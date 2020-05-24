import React, { useContext } from "react"
import {
  HeroContainer,
  HeroWidthContainer,
  HeroInnerContainer,
  IntroTitle,
  IntroSubtitle,
  IntroTextContainer,
} from "../styles/hero-styled"
import ThemeContext from "../context/theme-context"
import { selectedColor } from "../utils/color-helper"

const Hero = () => {
  const context = useContext(ThemeContext)

  return (
    <HeroContainer>
      <HeroWidthContainer>
        <HeroInnerContainer>
          <IntroTextContainer>
            <IntroTitle color={selectedColor(context.color, "darker")}>
              Front End Developer &amp; UX Designer
            </IntroTitle>
            <IntroSubtitle>
              What I do is simple to say but complex in execution. I generate
              solutions, code stuff, and design things.
            </IntroSubtitle>
          </IntroTextContainer>
        </HeroInnerContainer>
      </HeroWidthContainer>
    </HeroContainer>
  )
}

export default Hero
