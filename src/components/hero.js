import React from 'react';
import { Link } from "gatsby";
import './hero.scss';
import styled from 'styled-components';

const HeroContainer = styled.section`
  padding: 0;
  @media (min-width: 768px) {
    padding: 3rem 0 0;
  }
`;

const HeroIntro = styled.p`
  padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 20px;
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

const HeroTitle = styled.h2`
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 800;

  @media (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 2.6rem;
    line-height: 1.333;
    letter-spacing: 1px;
    padding-bottom: 6vh;
  }

  @media (min-width: 1024px) {
    font-size: 3.6rem;
    line-height: 1.2;
    font-weight: 700;
  }

  a {
    text-decoration: underline;
    transition: 300ms ease-in-out;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroIntro>
        UI/UX Developer & Problem-Solver
        <span className="intro-line"/>
      </HeroIntro>
      <HeroTitle>
        Creating <Link to="/solutions">solutions</Link>, <a rel="noopener noreferrer" href="https://codepen.io/Vpugh/" target="_blank">coding</a> stuff, and <a href="https://dribbble.com/teekatwo" target="_blank" rel="noopener noreferrer">designing</a> things.
      </HeroTitle>
    </HeroContainer>
  );
};

export default Hero;