import React, { useState, useEffect } from 'react';
import Canvas3D from '../ui/Canvas3D';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const fullText = 'whoami';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Voice introduction handler
  const handleVoiceIntro = () => {
    // Placeholder for voice introduction feature
    // To be implemented when voice recording is provided
    console.log('Voice introduction clicked - feature coming soon');
    setIsAudioPlaying(!isAudioPlaying);
  };

  // Carousel navigation
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle Particle Background */}
      <div className="hero-canvas-wrapper">
        <Canvas3D />
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-grid">
          {/* Left Column: Introduction + Terminal */}
          <div className="hero-terminal-col">
            {/* Developer Introduction */}
            <div className="hero-intro">
              <p className="hero-greeting">
                <span className="hero-greeting-symbol">&lt;</span>
                {' '}Hi, I'm <span className="hero-name-highlight">Chandan Narayan Sahoo</span>{' '}
                <span className="hero-greeting-symbol">/&gt;</span>
              </p>
              <h1 className="hero-title">
                <span className="hero-title-line-1">React.js Frontend</span>
                <span className="hero-title-line-2">Developer</span>
              </h1>
              <p className="hero-tagline">
                Building modern, responsive and scalable web applications with React.js, JavaScript and the MERN Stack.
              </p>
            </div>

            {/* Voice Introduction Button */}
            <button 
              className="voice-intro-btn" 
              onClick={handleVoiceIntro}
              aria-label="Hear my introduction"
            >
              <div className="voice-icon-wrapper">
                <i className={`bi ${isAudioPlaying ? 'bi-pause-circle-fill' : 'bi-play-circle-fill'}`}></i>
              </div>
              <span className="voice-intro-text">Hear My Introduction</span>
              <div className="audio-waveform">
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
              </div>
            </button>

            {/* Terminal-Inspired Developer Interface */}
            <div className="terminal-window">
              {/* Window Header */}
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-btn terminal-close"></span>
                  <span className="terminal-btn terminal-minimize"></span>
                  <span className="terminal-btn terminal-maximize"></span>
                </div>
                <div className="terminal-title">chandan@dev:~</div>
                <div className="terminal-actions"></div>
              </div>

              {/* Terminal Content */}
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">{typedText}</span>
                  <span className="terminal-cursor"></span>
                </div>

                <div className="terminal-output">
                  <div className="terminal-data">
                    <span className="terminal-key">name:</span>
                    <span className="terminal-value">Chandan Narayan Sahoo</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">role:</span>
                    <span className="terminal-value">React.js Frontend Developer</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">stack:</span>
                    <span className="terminal-value">JavaScript | MERN Stack</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">location:</span>
                    <span className="terminal-value">Hyderabad, India</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">experience:</span>
                    <span className="terminal-value">2+ Years</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">focus:</span>
                    <span className="terminal-value">Building responsive & scalable web applications</span>
                  </div>
                  <div className="terminal-data">
                    <span className="terminal-key">status:</span>
                    <span className="terminal-status-available">
                      <span className="pulse-dot"></span>
                      Available for Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary-cinematic">
                <span>View My Projects</span>
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>

              <a
                href="/assets/resume/Chandan_Sahoo_Resume.pdf"
                download="Chandan_Sahoo_Resume.pdf"
                className="btn-secondary-cinematic"
              >
                <i className="bi bi-download" aria-hidden="true"></i>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social-row">
              <a
                href="https://www.linkedin.com/in/chandansahoo7978/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/chandugithubui"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:chandan881677@gmail.com"
                className="hero-social-link"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Three-Face Circular Portrait */}
          <div className="hero-portrait-col">
            <div 
              className="three-face-portrait-container"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              {/* Animated Rotating Ring with Cyan-Violet Gradient */}
              <div className="portrait-rotating-ring">
                <div className="ring-gradient-dual"></div>
                <div className="ring-glow-point"></div>
              </div>

              {/* Three-Face Portrait Composition */}
              <div className="portrait-composition">
                {/* Left Side Profile (Behind, Darker) */}
                <div className="portrait-layer portrait-left">
                  <img
                    src="/assets/images/portrait-left.png"
                    alt="Chandan Narayan Sahoo - Left Profile"
                    className="portrait-side-img"
                    loading="eager"
                  />
                </div>

                {/* Right Side Profile (Behind, Darker) */}
                <div className="portrait-layer portrait-right">
                  <img
                    src="/assets/images/portrait-right.png"
                    alt="Chandan Narayan Sahoo - Right Profile"
                    className="portrait-side-img"
                    loading="eager"
                  />
                </div>

                {/* Main Frontal Portrait (Foreground, Prominent) */}
                <div className="portrait-layer portrait-main">
                  <img
                    src="/assets/images/chandan-hero.png"
                    alt="Chandan Narayan Sahoo"
                    className="portrait-main-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Technology Badges - Exact Positioning */}
              <div className="tech-badge tech-badge-top-left">
                <i className="bi bi-react"></i>
                <span>React.js</span>
              </div>
              <div className="tech-badge tech-badge-top-right">
                <i className="bi bi-filetype-tsx"></i>
                <span>TypeScript</span>
              </div>
              <div className="tech-badge tech-badge-bottom-left">
                <i className="bi bi-filetype-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-badge tech-badge-bottom-right">
                <i className="bi bi-arrow-left-right"></i>
                <span>API Integration</span>
              </div>

              {/* Ambient Particles */}
              <div className="portrait-particle particle-1"></div>
              <div className="portrait-particle particle-2"></div>
              <div className="portrait-particle particle-3"></div>
              <div className="portrait-particle particle-4"></div>
            </div>

            {/* Carousel Controls */}
            <div className="portrait-carousel-controls">
              <button 
                className="carousel-btn carousel-prev" 
                onClick={handlePrevSlide}
                aria-label="Previous portrait"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <div className="carousel-indicators">
                <span 
                  className={`indicator ${activeSlide === 0 ? 'active' : ''}`}
                  onClick={() => setActiveSlide(0)}
                  role="button"
                  tabIndex={0}
                  aria-label="Portrait view 1"
                ></span>
                <span 
                  className={`indicator ${activeSlide === 1 ? 'active' : ''}`}
                  onClick={() => setActiveSlide(1)}
                  role="button"
                  tabIndex={0}
                  aria-label="Portrait view 2"
                ></span>
                <span 
                  className={`indicator ${activeSlide === 2 ? 'active' : ''}`}
                  onClick={() => setActiveSlide(2)}
                  role="button"
                  tabIndex={0}
                  aria-label="Portrait view 3"
                ></span>
              </div>
              <button 
                className="carousel-btn carousel-next" 
                onClick={handleNextSlide}
                aria-label="Next portrait"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
