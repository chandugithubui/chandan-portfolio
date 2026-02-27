import React, { useState } from 'react';

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: '🌐', color: '#E34C26', gradient: 'linear-gradient(135deg, #E34C26 0%, #F06529 100%)' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6', gradient: 'linear-gradient(135deg, #1572B6 0%, #33A9DC 100%)' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', gradient: 'linear-gradient(135deg, #F7DF1E 0%, #FFD600 100%)' },
    { name: 'React', icon: '⚛️', color: '#61DAFB', gradient: 'linear-gradient(135deg, #61DAFB 0%, #4FA8C5 100%)' },
    { name: 'Bootstrap', icon: '📱', color: '#7952B3', gradient: 'linear-gradient(135deg, #7952B3 0%, #9333EA 100%)' },
    { name: 'Next.js', icon: '▲', color: '#000000', gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', color: '#339933', gradient: 'linear-gradient(135deg, #339933 0%, #5FA04E 100%)' },
    { name: 'Express.js', icon: '🚂', color: '#000000', gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)' },
    { name: 'Python', icon: '🐍', color: '#3776AB', gradient: 'linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248', gradient: 'linear-gradient(135deg, #47A248 0%, #5FA04E 100%)' },
  ],
  tools: [
    { name: 'Git', icon: '🔧', color: '#F05032', gradient: 'linear-gradient(135deg, #F05032 0%, #FF6B6B 100%)' },
    { name: 'GitHub', icon: '🐙', color: '#181717', gradient: 'linear-gradient(135deg, #181717 0%, #333333 100%)' },
    { name: 'Vercel', icon: '▲', color: '#000000', gradient: 'linear-gradient(135deg, #000000 0%, #FFFFFF 100%)' },
    { name: 'Render', icon: '☁️', color: '#46E3B7', gradient: 'linear-gradient(135deg, #46E3B7 0%, #00D9FF 100%)' },
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const tabs = Object.keys(skillsData);

  return (
    <section id="skills" className="skills-section py-5 position-relative">
      {/* Background Pattern */}
      <div className="skills-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Tech <span className="hero-accent">Stack</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white">Technologies I master and innovate with</p>
        </div>

        {/* Modern Category Tabs */}
        <div className="skills-tabs-modern d-flex justify-content-center mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`skill-tab-modern ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="tab-icon">
                {tab === 'frontend' && '🎨'}
                {tab === 'backend' && '⚙️'}
                {tab === 'tools' && '🛠️'}
              </span>
              <span className="tab-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid with Modern Cards */}
        <div className="skills-grid-modern">
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card-modern ${hoveredSkill === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-container">
                  <div className="skill-icon-bg" style={{ background: skill.gradient }}></div>
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon-emoji">{skill.icon}</span>
                  </div>
                  <div className="skill-glow" style={{ background: skill.gradient }}></div>
                </div>
                
                <div className="skill-content-modern">
                  <h5 className="skill-name-modern">{skill.name}</h5>
                  <div className="skill-level-indicator">
                    <div className="skill-level-bar" style={{ background: skill.gradient }}></div>
                  </div>
                </div>
                
                <div className="skill-card-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary text-center mt-5">
          <div className="summary-card">
            <div className="summary-content">
              <h4 className="summary-title">
                {activeTab === 'frontend' && 'Frontend Expert'}
                {activeTab === 'backend' && 'Backend Specialist'}
                {activeTab === 'tools' && 'DevOps Enthusiast'}
              </h4>
              <p className="summary-description">
                {activeTab === 'frontend' && 'Creating beautiful, responsive user interfaces with modern frameworks'}
                {activeTab === 'backend' && 'Building robust, scalable server-side applications and APIs'}
                {activeTab === 'tools' && 'Leveraging cutting-edge tools for development and deployment'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;