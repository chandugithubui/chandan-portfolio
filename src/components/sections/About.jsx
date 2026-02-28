import React from 'react';
import profileImage from '../../assets/images/About.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section py-1 py-md-5 position-relative">
      {/* Background Pattern */}
      <div className="about-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-1 mb-md-5">
          <h2 className="display-4 fw-bold mb-1 mb-md-3">
            About <span className="hero-accent">Me</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white mb-0">Passionate Full Stack Developer crafting digital experiences</p>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4 mb-0 mb-lg-0 pe-0 pe-lg-2">
            <div className="profile-image-wrapper">
              <div className="profile-image-bg"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image img-fluid rounded-circle"
              />
              <div className="profile-image-border"></div>
            </div>
          </div>
          
          <div className="col-lg-10 col-md-8 ps-2 ps-md-3">
            <div className="about-content">
              <p className="about-description mb-2 mb-md-4">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. I love building scalable applications and solving complex problems through clean, efficient code. My journey in web development has been driven by curiosity and a desire to create impactful digital solutions.
              </p>
              
              <div className="strengths-section">
                <h4 className="strengths-title mb-2 mb-md-4">Core Strengths</h4>
                <div className="strengths-grid">
                  <div className="strength-item">
                    <div className="strength-icon-wrapper">
                      <i className="bi bi-lightbulb strength-icon"></i>
                    </div>
                    <div className="strength-content">
                      <h6 className="strength-title">Problem Solving</h6>
                      <p className="strength-description">Analytical thinking and creative solutions to complex challenges</p>
                    </div>
                  </div>
                  
                  <div className="strength-item">
                    <div className="strength-icon-wrapper">
                      <i className="bi bi-layers strength-icon"></i>
                    </div>
                    <div className="strength-content">
                      <h6 className="strength-title">Full Stack Development</h6>
                      <p className="strength-description">Proficient in both frontend and backend technologies</p>
                    </div>
                  </div>
                  
                  <div className="strength-item">
                    <div className="strength-icon-wrapper">
                      <i className="bi bi-arrow-up-circle strength-icon"></i>
                    </div>
                    <div className="strength-content">
                      <h6 className="strength-title">Continuous Learning</h6>
                      <p className="strength-description">Always exploring new technologies and best practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;