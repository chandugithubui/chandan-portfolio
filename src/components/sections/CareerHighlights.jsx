import React from 'react';

const highlights = [
  {
    id: 1,
    icon: 'bi-globe',
    title: 'Managed 6+ Live Websites',
    description: 'Maintained and optimized multiple production-level educational websites ensuring performance, responsiveness, and stability.',
    color: '#ff77b4'
  },
  {
    id: 2,
    icon: 'bi-graph-up-arrow',
    title: 'SEO Optimization & Growth',
    description: 'Improved search engine visibility through on-page SEO, performance optimization, and technical enhancements.',
    color: '#ff4e8b'
  },
  {
    id: 3,
    icon: 'bi-briefcase-fill',
    title: '1.7 Years Industry Experience',
    description: 'Completed 7 months internship and 1 year full-time experience in an EdTech company delivering real-world web solutions.',
    color: '#ffdb62'
  },
  {
    id: 4,
    icon: 'bi-speedometer2',
    title: 'Performance Optimization',
    description: 'Enhanced website loading speed and user experience through structured optimization techniques.',
    color: '#667eea'
  },
  {
    id: 5,
    icon: 'bi-lightbulb-fill',
    title: 'Continuous Learning',
    description: 'Currently expanding expertise in Next.js to build scalable and high-performance web applications.',
    color: '#764ba2'
  }
];

const CareerHighlights = () => {
  return (
    <section id="highlights" className="career-section py-5 position-relative">
      {/* Background Pattern */}
      <div className="career-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Career <span className="hero-accent">Highlights</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white">Key achievements and professional milestones</p>
        </div>
        
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className="highlight-card-modern">
              <div className="highlight-number-wrapper">
                <span className="highlight-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <div className="highlight-content-modern">
                <div className="highlight-icon-wrapper-modern">
                  <div className="highlight-icon-bg" style={{ background: highlight.color }}></div>
                  <i className={`bi ${highlight.icon} highlight-icon-modern`}></i>
                </div>
                
                <div className="highlight-text-content">
                  <h5 className="highlight-title-modern">{highlight.title}</h5>
                  <p className="highlight-description-modern">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="achievement-summary">
            <div className="achievement-icon-wrapper">
              <i className="bi bi-award-fill achievement-icon"></i>
            </div>
            <div className="achievement-text">
              <h4 className="achievement-title">5+ Professional Achievements</h4>
              <p className="achievement-subtitle">Driving innovation and excellence in web development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;