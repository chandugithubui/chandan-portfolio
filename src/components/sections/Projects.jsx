import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { otherProjects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="other-projects-section">
      <div className="other-projects-container">
        <SectionHeader
          badge="Selected Portfolio"
          icon="bi-collection-play-fill"
          title="More Genuine"
          highlight="Engineering Projects"
          subtitle="Production-oriented full-stack and frontend systems built with modern architectures."
        />

        <div className="projects-dual-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="secondary-project-card">
              {/* Media Thumbnail */}
              <div className="secondary-project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="secondary-project-img"
                  loading="lazy"
                />
              </div>

              {/* Body Content */}
              <div className="secondary-project-body">
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-card-heading">{project.title}</h3>
                <p className="project-card-narrative">{project.description}</p>

                {/* Engineering Highlights */}
                <ul className="project-card-bullets">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="project-bullet-line">
                      <i className="bi bi-chevron-right" aria-hidden="true"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer with Tech & Actions */}
                <div className="project-card-footer">
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag-chip">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag-chip" style={{ color: 'var(--accent-cyan)' }}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="project-action-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon-action"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <i className="bi bi-github" aria-hidden="true"></i>
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon-action"
                        style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.4)' }}
                        aria-label={`Launch ${project.title} Demo`}
                      >
                        <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
