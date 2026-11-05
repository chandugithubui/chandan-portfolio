import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <SectionHeader
        badge="Career Journey"
        icon="bi-briefcase-fill"
        title="Professional"
        highlight="Experience"
        subtitle="Verified work history delivering production-grade frontend solutions in an agile engineering team."
      />

      <div className="experience-timeline-container">
        {/* Vertical Spine */}
        <div className="timeline-spine"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-entry">
            {/* Timeline Beacon Point */}
            <div className="timeline-beacon">
              <div className="beacon-core"></div>
            </div>

            {/* Timeline Content Card */}
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">
                    <i className="bi bi-building"></i>
                    <span>{exp.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>• {exp.location}</span>
                  </div>
                </div>

                <div className="timeline-badge-group">
                  <span className="timeline-period-pill">
                    <i className="bi bi-calendar3 me-1"></i>
                    {exp.period}
                  </span>
                  <span className="timeline-status-pill">{exp.badge}</span>
                </div>
              </div>

              <p className="timeline-summary">{exp.description}</p>

              <ul className="timeline-bullet-list">
                {exp.highlights.map((point, idx) => (
                  <li key={idx} className="timeline-bullet-item">
                    <i className="bi bi-check2-circle timeline-bullet-icon"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag Cloud */}
              <div className="timeline-tag-cloud">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
