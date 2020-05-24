import React from "react"
import { Link } from "gatsby"
import {
  GradientBorder,
  HeaderFlexContainer,
  HeaderInnerContainer,
  FlexSPCenter,
  NavLogo,
} from "../styles/header-styled"

const Header = ({ color, menuLinks, siteTitle }) => {
  return (
    <>
      <GradientBorder style={{ height: 8 }} />
      <HeaderFlexContainer bgColor={color}>
        <HeaderInnerContainer>
          <FlexSPCenter direction>
            <Link
              to="/"
              style={{ color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
            >
              <NavLogo>{siteTitle}</NavLogo>
            </Link>
            <FlexSPCenter>
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
            </FlexSPCenter>
          </FlexSPCenter>
        </HeaderInnerContainer>
      </HeaderFlexContainer>
    </>
  )
}

export default Header
