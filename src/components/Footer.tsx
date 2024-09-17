import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">GET IN TOUCH</button>
    </footer>
  );
};

export default Footer;