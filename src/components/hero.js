import React from 'react';
import { Link } from "gatsby";
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <p className="intro-title">
        UI/UX Developer & Problem-Solver
        <span className="intro-line"/>
      </p>
      <h2 className="hero--title">
        Creating <Link to="/solutions">solutions</Link>, <a rel="noopener noreferrer" href="https://codepen.io/Vpugh/" target="_blank">coding</a> stuff, and <a href="https://dribbble.com/teekatwo" target="_blank" rel="noopener noreferrer">designing</a> things.
      </h2>
    </section>
  );
};

export default Hero;