import React, { useState } from 'react';
import handicraftHubImage from '../../assets/images/handicraft.png';
import eventTrackingImage from '../../assets/images/event-tracking.png';
import todoAppImage from '../../assets/images/todo-app.png';

const projectsData = {
  all: [
    {
      id: 1,
      category: 'fullstack',
      title: 'Handicraft Hub - E-Commerce Platform',
      description: 'A full-stack MERN e-commerce platform dedicated to showcasing and selling traditional Indian handicrafts. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure payment processing, and admin dashboard for inventory management.',
      image: handicraftHubImage,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Axios', 'Vercel', 'Render'],
      githubUrl: 'https://github.com/chandugithubui/handicraft-website',
      liveUrl: 'https://handicraft-website-sgak-git-main-chandan-sahoos-projects.vercel.app/'
    },
    {
      id: 2,
      category: 'fullstack',
      title: 'Event Tracking System - Queue-Based Architecture',
      description: 'A scalable event tracking dashboard implementing asynchronous processing using Redis Queue and background workers. Features non-blocking API responses, decoupled event processing, and real-time statistics. Built with production-level architecture similar to modern analytics and notification systems.',
      image: eventTrackingImage,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis Queue', 'Background Workers'],
      githubUrl: 'https://github.com/chandugithubui/chandugithubui-event-tracking-system',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      category: 'frontend',
      title: 'Todo App - React & Vite',
      description: 'A fully functional Todo Application built with modern frontend tools. Features task management, light/dark theme toggle, and responsive design. Successfully deployed on Vercel with proper CI/CD workflow integration. Demonstrates strong understanding of React development, Git version control, and modern deployment practices.',
      image: todoAppImage,
      technologies: ['React.js', 'Vite', 'CSS', 'Vercel', 'GitHub'],
      githubUrl: 'https://github.com/chandugithubui/todo-app',
      liveUrl: 'https://lnkd.in/gZmeQn_Q'
    }
  ],
  frontend: [
    {
      id: 3,
      category: 'frontend',
      title: 'Todo App - React & Vite',
      description: 'A fully functional Todo Application built with modern frontend tools. Features task management, light/dark theme toggle, and responsive design. Successfully deployed on Vercel with proper CI/CD workflow integration.',
      image: todoAppImage,
      technologies: ['React.js', 'Vite', 'CSS', 'Vercel', 'GitHub'],
      githubUrl: 'https://github.com/chandugithubui/todo-app',
      liveUrl: 'https://lnkd.in/gZmeQn_Q'
    }
  ],
  backend: [
    {
      id: 2,
      category: 'fullstack',
      title: 'Event Tracking System - Queue-Based Architecture',
      description: 'A scalable event tracking dashboard implementing asynchronous processing using Redis Queue and background workers. Features non-blocking API responses, decoupled event processing, and real-time statistics.',
      image: eventTrackingImage,
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis Queue', 'Background Workers'],
      githubUrl: 'https://github.com/chandugithubui/chandugithubui-event-tracking-system',
      liveUrl: 'https://example.com'
    }
  ],
  fullstack: [
    {
      id: 1,
      category: 'fullstack',
      title: 'Handicraft Hub - E-Commerce Platform',
      description: 'A full-stack MERN e-commerce platform dedicated to showcasing and selling traditional Indian handicrafts. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure payment processing, and admin dashboard for inventory management.',
      image: handicraftHubImage,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Axios', 'Vercel', 'Render'],
      githubUrl: 'https://github.com/chandugithubui/handicraft-website',
      liveUrl: 'https://handicraft-website-sgak-git-main-chandan-sahoos-projects.vercel.app/'
    },
    {
      id: 2,
      category: 'fullstack',
      title: 'Event Tracking System - Queue-Based Architecture',
      description: 'A scalable event tracking dashboard implementing asynchronous processing using Redis Queue and background workers. Features non-blocking API responses, decoupled event processing, and real-time statistics.',
      image: eventTrackingImage,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis Queue', 'Background Workers'],
      githubUrl: 'https://github.com/chandugithubui/chandugithubui-event-tracking-system',
      liveUrl: 'https://example.com'
    }
  ]
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = Object.keys(projectsData);

  return (
    <section id="projects" className="projects-section py-5 position-relative">
      {/* Background Pattern */}
      <div className="projects-bg-pattern"></div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            My <span className="hero-accent">Projects</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="lead fw-bold text-white">Showcasing my development journey</p>
        </div>

        {/* Category Tabs */}
        <div className="projects-tabs d-flex justify-content-center mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`project-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectsData[activeTab].map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="project-card-modern">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    className="project-image img-fluid" 
                    alt={project.title}
                  />
                  <div className="project-category">
                    <span className="category-badge">{project.category.toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-buttons">
                    <a 
                      href={project.githubUrl} 
                      className="project-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="project-btn live-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </a>
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