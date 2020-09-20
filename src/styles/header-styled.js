import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: transparent;
  margin-bottom: 1.45rem;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 0px 80px;
`

export const GradientBorder = styled.div`
  background: #ff9600;
  background: -moz-linear-gradient(left, #ffb64d 0%, #aed87c 50%, #4dd8ff 100%);
  background: -webkit-linear-gradient(
    left,
    #ffb64d 0%,
    #aed87c 50%,
    #4dd8ff 100%
  );
  background: linear-gradient(to right, #ffb64d 0%, #aed87c 50%, #4dd8ff 100%);
  height: 20px;
`

export const NavigationContainer = styled.div`
  margin: 40px auto 0 auto;

  @media (min-width: 1024px) {
    max-width: 82%;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-items: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    margin: 40px auto 0 auto;
    text-align: center;
  }
`

export const NavigationContent = styled.nav`
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
    padding: 0 0.75rem;
    margin-bottom: 0;
    letter-spacing: 1.25px;
    align-self: center;

    @media (max-width: 480px) {
      display: inline-block;
      padding-left: 0;
    }
  }
`

export const NavLogo = styled.h1`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-size: 1.6rem;
`
export const HeaderFlexContainer = styled.div`
  width: 100%;
  height: 80px;
  background: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    height: auto;
  }
`
export const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 80px;
  }
`
export const FlexSPCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: ${props => (props.direction ? "column" : null)};
    padding: 20px 0 10px 0;
  }
`
export const MenuItem = styled.div`
  a {
    display: inline-block;
    margin-right: 20px;
    margin-top: 1px;
    border-bottom: 2px solid transparent;
    transition: 300ms ease-in-out;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
      border-color: rgba(0, 0, 0, 0.5);
    }
  }
`
