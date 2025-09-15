import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">YourBrand</h2>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Products</h3>
            <ul className="footer__list">
              <li><a href="#product1">Product One</a></li>
              <li><a href="#product2">Product Two</a></li>
              <li><a href="#product3">Product Three</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Resources</h3>
            <ul className="footer__list">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Follow Us</h3>
            <ul className="footer__social-list">
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <ul className="footer__bottom-links">
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#cookies">Cookie Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
