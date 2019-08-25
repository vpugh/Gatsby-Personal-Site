import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <h3 className="footer-cta">
        <strong>Get in Touch.</strong> If you've got an inquiry for a job or project, a general question, or something I didn't specify.<br/>
Drop me a line at <strong><a className="inline-link" href="mailto:hello@toripugh.com" target="_blank" rel="noopener noreferrer" title="hello@toripugh.com">hello@toripugh.com</a></strong>.
      </h3>
      <ul className="social-footer">
        <li><a href="https://twitter.com/teekatwo" target="_blank" rel="noopener noreferrer" title="Twitter">Twitter</a></li>
        <li><a href="https://dribbble.com/teekatwo" target="_blank" rel="noopener noreferrer" title="Dribbble">Dribbble</a></li>
        <li><a href="https://codepen.io/Vpugh/" target="_blank" rel="noopener noreferrer" title="Codepen">Codepen</a></li>
        <li><a href="https://github.com/vpugh" target="_blank" rel="noopener noreferrer" title="Github">Github</a></li>
        <li><a href="https://instagram.com/toripugh" target="_blank" rel="noopener noreferrer" title="Instagram">Instagram</a></li>
      </ul>
      <div className="copyright">
        © {new Date().getFullYear()} Tori Pugh. All Rights Reserved. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  );
};

export default Footer;