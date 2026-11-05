
import React, { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';

const pillars = [
  {
    icon: 'bi-grid-1x2',
    title: 'Component-Based Architecture',
    desc: 'Designing clean, modular, and reusable React component systems with Hooks and Context API for predictable state flow.'
  },
  {
    icon: 'bi-phone',
    title: 'Responsive & Accessible Interfaces',
    desc: 'Crafting fluid, mobile-first layouts using modern CSS Flexbox and Grid that deliver fast, accessible experiences on every screen.'
  },
  {
    icon: 'bi-arrow-left-right',
    title: 'REST API & Async Integration',
    desc: 'Connecting frontends with backend web services using Axios and Fetch API, ensuring robust loading states and error handling.'
  },
  {
    icon: 'bi-layers',
    title: 'Full-Stack MERN Literacy',
    desc: 'Building and consuming Node.js/Express REST APIs with MongoDB databases, JWT authentication, and cloud deployment pipelines.'
  }
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="about-section"
      ref={sectionRef}
    >
      <div className="about-container">
        <SectionHeader
          badge="About Chandan"
          icon="bi-person-badge"
          title="Crafting Scalable Frontends with"
          highlight="Precision & Purpose"
          subtitle="A dedicated React.js Developer focused on building clean, high-performance web applications."
        />

        <div className="about-grid">

          <div className="about-portrait-col">
            <div className="about-portrait-card">
              <img
                src="/assets/images/chandan-about.jpg"
                alt="Chandan Narayan Sahoo"
                className="about-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/chandan-about.png';
                }}
              />
              <div className="about-image-glow"></div>
            </div>
          </div>

          <div className="about-story">
            <h3 className="about-lead">
              Bridging technical design and performant code to build engaging user experiences.
            </h3>

            <p className="about-paragraph">
              I am a React.js Frontend Developer with 2+ years of professional web development experience based in Hyderabad, India. My passion lies in transforming product designs and complex logic into responsive, lightning-fast digital solutions.
            </p>

            <p className="about-paragraph">
              Through projects like Handicraft Hub, I've developed reusable React components, integrated REST APIs, implemented authentication workflows, and worked with backend services to build complete, scalable web applications.
            </p>

            <div className="about-pillars-grid">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="pillar-card"
                  style={{ '--card-index': index }}
                >
                  <div className="pillar-icon-box">
                    <i
                      className={`bi ${pillar.icon}`}
                      aria-hidden="true"
                    ></i>
                  </div>

                  <h4 className="pillar-title">
                    {pillar.title}
                  </h4>

                  <p className="pillar-desc">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
