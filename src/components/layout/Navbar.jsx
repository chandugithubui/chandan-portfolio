import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = [
        { id: 'home', navId: 'home' },
        { id: 'about', navId: 'about' },
        { id: 'experience', navId: 'experience' },
        { id: 'skills', navId: 'skills' },
        { id: 'handicraft-hub', navId: 'projects' },
        { id: 'projects', navId: 'projects' },
        { id: 'contact', navId: 'contact' }
      ];
      
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].navId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & close on resize past 768px
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`cinematic-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" aria-label="Chandan Narayan Sahoo Home" onClick={closeMobileMenu}>
            <span className="nav-brand-emblem">CS</span>
            <span className="nav-brand-text">
              Chandan<span className="text-gradient">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`nav-link-item ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button: Download Resume */}
          <div className="nav-actions">
            <a
              href="/assets/resume/Chandan_Sahoo_Resume.pdf"
              download="Chandan_Sahoo_Resume.pdf"
              className="btn-resume"
              aria-label="Download Chandan Sahoo Resume"
            >
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true"></i>
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-nav-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop open"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div className="mobile-drawer-inner">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span>{item.label}</span>
                <i className="bi bi-chevron-right" style={{ fontSize: '0.85rem' }}></i>
              </a>
            );
          })}
          <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--card-border)' }}>
            <a
              href="/assets/resume/Chandan_Sahoo_Resume.pdf"
              download="Chandan_Sahoo_Resume.pdf"
              className="btn-resume"
              style={{ width: '100%', justifyContent: 'center', minHeight: '46px' }}
              onClick={closeMobileMenu}
            >
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true"></i>
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
