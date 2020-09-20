import React from "react"
import { Link } from "gatsby"
import {
  GradientBorder,
  HeaderFlexContainer,
  HeaderInnerContainer,
  FlexSPCenter,
  NavLogo,
  MenuItem,
} from "../styles/header-styled"

const Header = ({ color, menuLinks, siteTitle }) => {
  return (
    <>
      <GradientBorder style={{ height: 8 }} />
      <HeaderFlexContainer bgColor={color}>
        <HeaderInnerContainer>
          <FlexSPCenter direction="left">
            <Link
              to="/"
              style={{ color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
            >
              <NavLogo>{siteTitle}</NavLogo>
            </Link>
            <FlexSPCenter>
              {menuLinks.map(menuItem => (
                <MenuItem key={menuItem.label}>
                  <Link
                    to={menuItem.link}
                    key={menuItem.label}
                    activeStyle={{
                      borderBottom: "2px solid #444",
                    }}
                  >
                    {menuItem.label}
                  </Link>
                </MenuItem>
              ))}
            </FlexSPCenter>
          </FlexSPCenter>
        </HeaderInnerContainer>
      </HeaderFlexContainer>
    </>
  )
}

export default Header
