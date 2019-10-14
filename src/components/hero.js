import React from 'react';
import { Link } from "gatsby";
import { HeroContainer, HeroIntro, HeroTitle } from '../styles/hero-styled';

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