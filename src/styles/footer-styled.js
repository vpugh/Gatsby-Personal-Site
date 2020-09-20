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
  margin-bottom: 0.5rem;
  font-size: 34px;
  @media (max-width: 480px) {
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: 4.2em;
    margin-left: 0;
    letter-spacing: -1px;
    font-weight: 600;
  }
`

export const FooterEmail = styled.a`
  font-size: 22px;
  margin-bottom: 2.5rem;
  @media (max-width: 480px) {
    text-align: center;
    display: block;
  }
  @media (min-width: 768px) {
    display: block;
    font-size: 1.9rem;
  }
`

export const FooterSocialContainer = styled.div`
  @media (max-width: 480px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
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
    @media (max-width: 480px) {
      width: 50%;
      margin-bottom: 20px;
    }
  }

  a {
    transition: 400ms ease-out;
    margin-right: 25px;
    font-weight: 700;
    @media (max-width: 480px) {
      justify-content: center;
    }
    &:hover {
      color: #777;
    }
  }
`

export const FooterCopyright = styled.div`
  font-size: 0.9rem;
  color: #4a4a4a;

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
  }

  a {
    color: #4a4a4a;
    text-decoration: underline;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`
