import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Web Developer',
    company: 'Abhyaas Edu Technologies Pvt Ltd.',
    duration: 'Mar 2025 - Present',
    points: [
      'Developed and maintained full-stack web applications using React and Node.js',
      'Implemented RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ]
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Abhyaas Edu Technologies Pvt Ltd.',
    duration: 'Aug 2024 - Feb 2025',
    points: [
      'Built responsive and interactive user interfaces using React and modern CSS',
      'Optimized application performance and improved user experience',
      'Worked closely with UX designers to implement pixel-perfect designs'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section py-5 position-relative">
      {/* Background Pattern */}
      <div className="experience-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            My <span className="hero-accent">Experience</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white">Professional journey and growth</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-modern">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item-modern">
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content-modern">
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-info">
                          <h5 className="experience-title">{exp.title}</h5>
                          <h6 className="experience-company">{exp.company}</h6>
                        </div>
                        <div className="experience-duration">
                          <span className="duration-badge">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <div className="experience-points">
                        {exp.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="experience-point">
                            <div className="point-icon-wrapper">
                              <i className="bi bi-check-circle-fill point-icon"></i>
                            </div>
                            <span className="point-text">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;