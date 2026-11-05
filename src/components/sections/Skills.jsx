import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('all');

  const displayedCategories =
    activeCategoryId === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategoryId);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <SectionHeader
          badge="Technical Skills"
          icon="bi-cpu-fill"
          title="Engineered with"
          highlight="Modern Technologies"
          subtitle="A comprehensive toolkit specialized in React.js, JavaScript (ES6+), and full-stack MERN development."
        />

        {/* Category Tabs */}
        <div className="skills-category-tabs" role="tablist" aria-label="Technical skill categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            className={`category-tab-btn ${activeCategoryId === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategoryId('all')}
          >
            <i className="bi bi-grid-fill"></i>
            <span>All Technologies</span>
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategoryId === category.id}
              className={`category-tab-btn ${activeCategoryId === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryId(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Cards Display */}
        <div className="skills-categories-wrapper">
          {displayedCategories.map((category) => (
            <div key={category.id} className="skills-category-block">
              {activeCategoryId === 'all' && (
                <div className="skills-category-header">
                  <div className="skills-category-title-wrap">
                    <i className={`bi ${category.icon}`}></i>
                    <h3>{category.title}</h3>
                  </div>
                  <span className="skills-category-desc">{category.description}</span>
                </div>
              )}

              <div className="skills-cards-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-spec-card">
                    <div>
                      <div className="skill-card-top">
                        <div className="skill-icon-gem">
                          {skill.name === 'React.js' ? (
                            <FaReact className="react-skill-icon" />
                          ) : (
                            <i className={`bi ${skill.icon}`}></i>
                          )}
                        </div>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>
                      <h4 className="skill-name-heading">{skill.name}</h4>
                    </div>
                    <p className="skill-highlight-text">{skill.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
