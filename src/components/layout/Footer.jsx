import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="cinematic-footer">
      <div className="footer-inner-container">
        {/* Identity */}
        <div className="footer-identity">
          <span className="footer-name">Chandan Narayan Sahoo</span>
          <span className="footer-role">React.js Frontend Developer | JavaScript | MERN Stack</span>
        </div>

        {/* Social Icons */}
        <div className="footer-social-row">
          <a
            href="https://www.linkedin.com/in/chandansahoo7978/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-pill"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/chandugithubui"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-pill"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:chandan881677@gmail.com"
            className="footer-social-pill"
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="tel:+917978276217"
            className="footer-social-pill"
            aria-label="Phone"
          >
            <i className="bi bi-telephone-fill"></i>
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span className="footer-copyright">
            &copy; {currentYear} Chandan Narayan Sahoo. All rights reserved.
          </span>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
