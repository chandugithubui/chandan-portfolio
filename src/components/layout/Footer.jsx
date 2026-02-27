import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="text-center">
          {/* Developer Name */}
          <h5 className="fw-bold mb-2">Chandan Sahoo</h5>
          
          {/* Tagline */}
          <p className="mb-3 text-muted">Web Developer | React Developer</p>
          
          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            <a 
              href="https://www.linkedin.com/in/chandansahoo7978/"
              className="social-icon text-light"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            
            <a 
              href="https://github.com/chandugithubui"
              className="social-icon text-light"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            
            <a 
              href="mailto:chandan881677@gmail.com"
              className="social-icon text-light"
              aria-label="Email Contact"
            >
              <i className="bi bi-envelope-fill fs-5"></i>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="mb-0 small text-muted">
            {currentYear} Chandan Sahoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;