import React, { useState, useRef, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { featuredProject } from '../../data/projects';

const HandicraftCaseStudy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const tabRefs = useRef([]);
  const tabContainerRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    
    // Scroll active tab into view on mobile
    if (tabContainerRef.current && tabRefs.current[index]) {
      const container = tabContainerRef.current;
      const tab = tabRefs.current[index];
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleScreenshotClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(index);
    }
  };

  // Close enlarged view on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isEnlarged) {
        setIsEnlarged(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isEnlarged]);

  // Prevent body scroll when enlarged
  useEffect(() => {
    if (isEnlarged) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEnlarged]);

  const currentView = featuredProject.views[activeTab];

  return (
    <section id="handicraft-hub" className="handicraft-section">
      <div className="container-wide">
        <SectionHeader
          badge={featuredProject.badge}
          icon="bi-trophy-fill"
          title="Flagship Project:"
          highlight={featuredProject.title}
          subtitle="A comprehensive full-stack e-commerce platform built with React, TypeScript, Node.js, and MongoDB."
        />

        <div className="handicraft-container">
          {/* Project Introduction */}
          <div className="handicraft-intro">
            <div className="handicraft-intro-content">
              <div className="handicraft-category">{featuredProject.category}</div>
              <h3 className="handicraft-title">
                Authentic Craftsmanship Meets Modern Full-Stack MERN Architecture
              </h3>
              <p className="handicraft-description">{featuredProject.description}</p>

              {/* Action Links */}
              <div className="handicraft-actions">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-cinematic"
                  aria-label="View Handicraft Hub Live Demo"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Live Demo</span>
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-cinematic"
                  aria-label="View Source Code on GitHub"
                >
                  <i className="bi bi-github"></i>
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="handicraft-metrics">
              {featuredProject.metrics.map((metric) => (
                <div key={metric.label} className="handicraft-metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Browser Showcase */}
          <div className="browser-window">
            {/* Browser Chrome */}
            <div className="browser-chrome">
              <div className="browser-controls">
                <span className="browser-dot browser-dot-close"></span>
                <span className="browser-dot browser-dot-minimize"></span>
                <span className="browser-dot browser-dot-maximize"></span>
              </div>

              <div className="browser-address-bar">
                <i className="bi bi-lock-fill"></i>
                <span>https://handicraft-website.vercel.app</span>
              </div>

              <div className="browser-menu">
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>

            {/* Browser Tabs */}
            <div className="browser-tabs" ref={tabContainerRef}>
              {featuredProject.views.map((view, index) => (
                <button
                  key={view.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  type="button"
                  className={`browser-tab ${activeTab === index ? 'browser-tab-active' : ''}`}
                  onClick={() => handleTabClick(index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  aria-label={`View ${view.label}`}
                  aria-selected={activeTab === index}
                  role="tab"
                >
                  <i className="bi bi-circle-fill"></i>
                  <span>{view.label}</span>
                </button>
              ))}
            </div>

            {/* Screenshot Viewport */}
            <div className="browser-viewport">
              <img
                src={currentView.image}
                alt={`${featuredProject.title} - ${currentView.title}`}
                className="browser-screenshot"
                onClick={handleScreenshotClick}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleScreenshotClick();
                  }
                }}
                aria-label="Click to enlarge screenshot"
                style={{ cursor: 'pointer' }}
              />

              {/* Screenshot Info Overlay */}
              <div className="screenshot-overlay">
                <div className="screenshot-info">
                  <h4 className="screenshot-title">{currentView.title}</h4>
                  <p className="screenshot-description">{currentView.description}</p>
                </div>
                <button
                  onClick={handleScreenshotClick}
                  className="screenshot-enlarge-btn"
                  aria-label="Enlarge screenshot"
                  title="Click to enlarge"
                >
                  <i className="bi bi-arrows-fullscreen"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="handicraft-tech-stack">
            <h3 className="handicraft-tech-stack__heading">Technology Stack</h3>
            <div className="handicraft-tech-stack__list">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} className="handicraft-tech-stack__item">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="handicraft-features">
            {featuredProject.coreCapabilities.map((capability) => (
              <div key={capability.title} className="handicraft-feature-card">
                <h4 className="feature-title">{capability.title}</h4>
                <p className="feature-description">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged Screenshot Modal */}
      {isEnlarged && (
        <div 
          className="screenshot-modal-backdrop" 
          onClick={handleScreenshotClick}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot view"
        >
          <div className="screenshot-modal-container">
            <button
              className="screenshot-modal-close"
              onClick={handleScreenshotClick}
              aria-label="Close enlarged view"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            <img
              src={currentView.image}
              alt={`${featuredProject.title} - ${currentView.title} (enlarged)`}
              className="screenshot-modal-image"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="screenshot-modal-caption">
              <h4>{currentView.title}</h4>
              <p>{currentView.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HandicraftCaseStudy;
