import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <h1 className="footer-call-to-action">Start Building Today?</h1>
          <a className="action-button" href="tel:+2638644241936">Make the Call</a>
        </div>
      </div>
      <div className="footer-navigation">
        <ul className="footer-social-icons">
          <li><a href="#github">Github</a></li>
          <li><a href="#github">Twitter</a></li>
          <li><a href="#github">Medium</a></li>
          <li><a href="#github">LinkedIn</a></li>
          <li><a href="#github">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;