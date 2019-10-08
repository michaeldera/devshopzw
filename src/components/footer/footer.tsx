import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <h1 className="footer-call-to-action">Start Building Today?</h1>
          <a className="action-button" href="tel:+2638644241936">Call Us Now</a>
        </div>
      </div>
      <div className="footer-navigation">
        <small>Devshop</small>
      </div>
    </footer>
  )
}

export default Footer;