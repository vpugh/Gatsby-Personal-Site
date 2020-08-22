import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: left;
  padding: 40px 0 20px;
  background-color: #f9f9f9;
  margin-top: 60px;
  @media (min-width: 768px) {
    margin-top: 90px;
  }

  > div {
    margin: 0 auto;
    max-width: 960px;
  }
`

export const FooterCTA = styled.h3`
  font-weight: 400;
  line-height: 1.4;
  font-size: 17px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 3.5rem;
  }
`

export const FooterSocial = styled.ul`
  font-size: 1.1rem;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 14px;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  a {
    transition: 400ms ease-out;
    margin-right: 25px;
    font-weight: 700;
    &:hover {
      color: #777;
    }
  }
`

export const FooterCopyright = styled.div`
  font-size: 0.9rem;
  color: #4a4a4a;

  a {
    color: #4a4a4a;
    text-decoration: underline;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`
