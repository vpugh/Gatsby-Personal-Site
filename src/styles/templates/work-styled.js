import styled from "styled-components"

export const WorkTitle = styled.h2`
  font-size: 3.625rem;
  line-height: 1.2;
  padding-top: 8vh;
  padding-bottom: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`

export const WorkSubtitle = styled.h3`
  padding-bottom: 4vh;
  font-size: 1.2em;
  padding-top: 0.5rem;
  line-height: 1.5;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.75);
`

export const WorkIntroBlock = styled.div`
  background-color: #fff;
  padding: 50px 30px;
  line-height: 1.5;

  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

export const TextBody = styled.div`
  padding: 50px 20px;

  p {
    font-size: 1.3rem;
    line-height: 1.4;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
    > a {
      text-decoration: underline;
    }
  }
  h2 {
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    @media (max-width: 450px) {
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
      margin-top: 1.4rem;
    }
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  blockquote {
    margin-left: -20px;
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
    > p {
      font-style: italic;
      color: #525252;
    }
  }
`
