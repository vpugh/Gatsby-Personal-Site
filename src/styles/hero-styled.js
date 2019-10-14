import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding: 0;
  @media (min-width: 768px) {
    padding: 3rem 0 0;
  }
`;

export const HeroIntro = styled.p`
  padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
  
  @media (max-width: 480px) {
    text-align: center;
  }

  .intro-line {
    &:after {
      content: "";
      background: #ddd;
      height: 4px;
      display: inline-block;
      width: 48%;
      margin-bottom: 4px;
      margin-left: 10px;

      .orange & {
        background-color: #ffb64d;
      }

      .green & {
        background-color: #aed87c;
      }

      .blue & {
        background-color: #4dd8ff;
      }

      @media (min-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export const HeroTitle = styled.h2`
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1.333;
    letter-spacing: 1px;
    padding-bottom: 6vh;
  }

  @media (min-width: 1024px) {
    font-size: 3.6rem;
    line-height: 1.2;
    font-weight: 700;
  }
  
  @media (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: 330px) {
    font-size: 1.6rem;
  }
  

  a {
    text-decoration: underline;
    transition: 300ms ease-in-out;
  }
`;