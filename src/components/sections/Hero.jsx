
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const fullText = 'whoami';

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    let outputTimeout;

    setTypedText('');
    setShowOutput(false);

    typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentIndex++;
        setTypedText(fullText.slice(0, currentIndex));
      } else {
        clearInterval(typingInterval);

        outputTimeout = setTimeout(() => {
          setShowOutput(true);
        }, 350);
      }
    }, 130);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(outputTimeout);
    };
  }, []);

  const details = [
    { label: 'name:', value: 'Chandan Narayan Sahoo' },
    { label: 'role:', value: 'React.js Frontend Developer' },
    { label: 'stack:', value: 'JavaScript | MERN Stack' },
    { label: 'location:', value: 'Hyderabad, India' },
    { label: 'experience:', value: '2+ Years' },
    {
      label: 'focus:',
      value: 'Building responsive & scalable web applications'
    }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">

          {/* Terminal Column */}
          <div className="hero-left-col">

            <div className="terminal-card">

              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-dot terminal-close"></span>
                  <span className="terminal-dot terminal-minimize"></span>
                  <span className="terminal-dot terminal-maximize"></span>
                </div>

                <div className="terminal-title">
                  chandan@dev:~
                </div>

                <div className="terminal-spacer"></div>
              </div>

              <div className="terminal-body">

                <div className="terminal-command-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">
                    {typedText}
                  </span>
                  <span className="terminal-cursor"></span>
                </div>

                <div
                  className={`terminal-output ${showOutput ? 'is-visible' : ''}`}
                  aria-live="polite"
                >
                  {details.map((item, index) => (
                    <div className="terminal-row" key={item.label}>
                      <span className="terminal-label">
                        {item.label}
                      </span>

                      <span className="terminal-value">
                        {item.value}
                      </span>
                    </div>
                  ))}

                  <div className="terminal-row terminal-status-row">
                    <span className="terminal-label">status:</span>

                    <span className="terminal-status">
                      <span className="status-dot"></span>
                      Available for Opportunities
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-buttons">
              <a href="#projects" className="btn-hero-primary">
                <span>View My Projects</span>
                <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href="/assets/resume/Chandan_Sahoo_React_Frontend_Developer.pdf"
                download="Chandan_Sahoo_React_Frontend_Developer.pdf"
                className="btn-hero-secondary"
              >
                <i className="bi bi-download"></i>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social-links">
              <a
                href="https://www.linkedin.com/in/chandansahoo7978/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://github.com/chandugithubui"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="mailto:chandan881677@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>

          </div>

          {/* Portrait Column */}
          <div className="hero-right-col">

            <div className="portrait-wrapper">

              <div className="portrait-frame">
                <img
                  src="/assets/images/chandan-hero.png"
                  alt="Chandan Narayan Sahoo"
                  className="portrait-image"
                  loading="eager"
                />
              </div>

              {/* Technology Badges */}
              <div className="tech-badge tech-badge-top-left">
                <i className="bi bi-react"></i>
                <span>React.js</span>
              </div>

              <div className="tech-badge tech-badge-bottom-left">
                <i className="bi bi-filetype-js"></i>
                <span>JavaScript</span>
              </div>

              <div className="tech-badge tech-badge-top-right">
                <i className="bi bi-filetype-tsx"></i>
                <span>TypeScript</span>
              </div>

              <div className="tech-badge tech-badge-bottom-right">
                <i className="bi bi-arrow-left-right"></i>
                <span>API Integration</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
