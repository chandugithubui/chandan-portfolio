import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5 position-relative">
      {/* Background Pattern */}
      <div className="contact-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Get in <span className="hero-accent">Touch</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white">Let's collaborate and bring your ideas to life</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-card-modern">
              <div className="row g-0">
                {/* Left Side - Contact Information */}
                <div className="col-lg-6 contact-info-section">
                  <div className="contact-header">
                    <h4 className="contact-title">Connect With Me</h4>
                    <p className="contact-subtitle">I'm always interested in hearing about new projects and opportunities.</p>
                  </div>
                  
                  <div className="contact-items">
                    <div className="contact-item-modern">
                      <div className="contact-icon-wrapper">
                        <i className="bi bi-envelope-fill contact-icon"></i>
                      </div>
                      <div className="contact-details">
                        <h6 className="contact-label">Email</h6>
                        <a href="mailto:chandan881677@gmail.com" className="contact-value">chandan881677@gmail.com</a>
                      </div>
                    </div>
                   
                    <div className="contact-item-modern">
                      <div className="contact-icon-wrapper">
                        <i className="bi bi-linkedin contact-icon"></i>
                      </div>
                      <div className="contact-details">
                        <h6 className="contact-label">LinkedIn</h6>
                        <a href="https://www.linkedin.com/in/chandansahoo7978/" target="_blank" rel="noopener noreferrer" className="contact-value">Connect with me</a>
                      </div>
                    </div>
                   
                    <div className="contact-item-modern">
                      <div className="contact-icon-wrapper">
                        <i className="bi bi-github contact-icon"></i>
                      </div>
                      <div className="contact-details">
                        <h6 className="contact-label">GitHub</h6>
                        <a href="https://github.com/chandugithubui" target="_blank" rel="noopener noreferrer" className="contact-value">Check my work</a>
                      </div>
                    </div>
                  </div>
                </div>
               
                {/* Right Side - Contact Form */}
                <div className="col-lg-6 contact-form-section">
                  <div className="form-header">
                    <h4 className="contact-title">Send Message</h4>
                    <p className="contact-subtitle">I'll get back to you as soon as possible</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="contact-form-modern">
                    <div className="form-group-modern">
                      <label htmlFor="name" className="form-label-modern">Your Name</label>
                      <input
                        type="text"
                        className="form-control-modern"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                   
                    <div className="form-group-modern">
                      <label htmlFor="email" className="form-label-modern">Email Address</label>
                      <input
                        type="email"
                        className="form-control-modern"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                   
                    <div className="form-group-modern">
                      <label htmlFor="message" className="form-label-modern">Your Message</label>
                      <textarea
                        className="form-control-modern"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>
                   
                    <button type="submit" className="submit-btn-modern">
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;