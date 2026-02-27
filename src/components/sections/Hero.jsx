import React from 'react';
import profileImage from '../../assets/images/profile.png';

const Hero = () => {
  return (
    <section className="hero-section min-vh-100 d-flex align-items-center position-relative">
      {/* Background Pattern */}
      <div className="hero-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-greeting mb-3">
                <span className="hero-badge">Hi, I'm</span>
              </div>
              
              <h1 className="hero-title mb-4">
                Chandan <span className="hero-accent">Sahoo</span>
              </h1>
              
              <div className="hero-role mb-4">
                <span className="hero-typed">Full Stack Developer</span>
                <div className="hero-cursor"></div>
              </div>
              
              <p className="hero-description mb-5">
                Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code and modern design principles.
              </p>
              
              <div className="hero-buttons d-flex gap-3 flex-wrap">
                <a href="#projects" className="btn btn-hero-primary">
                  <span>View My Work</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#contact" className="btn btn-hero-secondary">
                  <span>Let's Talk</span>
                  <i className="bi bi-chat-dots"></i>
                </a>
              </div>
              
              {/* Stats */}
              <div className="hero-stats mt-5">
                <div className="row g-4">
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="stat-number">3+</div>
                      <div className="stat-label">PROJECTS</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="stat-number">1.7+</div>
                      <div className="stat-label">YEARS EXP</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="stat-number">6+</div>
                      <div className="stat-label">LIVE SITES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <img 
                src={profileImage} 
                alt="Chandan Sahoo" 
                className="hero-image"
              />
              <div className="hero-image-border"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;