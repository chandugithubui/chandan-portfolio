export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'bi-window-stack',
    description: 'Core languages and libraries used to craft modern, reactive single-page applications.',
    skills: [
      { name: 'React.js', icon: 'bi-atom', level: 'Advanced', highlight: 'Core specialization' },
      { name: 'JavaScript (ES6+)', icon: 'bi-filetype-js', level: 'Advanced', highlight: 'Modern syntax & async' },
      { name: 'TypeScript', icon: 'bi-filetype-tsx', level: 'Intermediate', highlight: 'Type safety & interfaces' },
      { name: 'Next.js', icon: 'bi-box-arrow-in-up-right', level: 'Intermediate', highlight: 'SSR & App router' },
      { name: 'HTML5', icon: 'bi-filetype-html', level: 'Expert', highlight: 'Semantic & a11y' },
      { name: 'CSS3', icon: 'bi-filetype-css', level: 'Advanced', highlight: 'Animations & variables' }
    ]
  },
  {
    id: 'ecosystem',
    title: 'React Ecosystem',
    icon: 'bi-diagram-3',
    description: 'State management, routing architectures, and lifecycle patterns in production React apps.',
    skills: [
      { name: 'React Hooks', icon: 'bi-bezier2', level: 'Advanced', highlight: 'useState, useEffect, useMemo, custom hooks' },
      { name: 'Context API', icon: 'bi-share', level: 'Advanced', highlight: 'Global state orchestration' },
      { name: 'Redux Toolkit', icon: 'bi-recycle', level: 'Intermediate', highlight: 'Centralized state slices' },
      { name: 'React Router v6', icon: 'bi-signpost-split', level: 'Advanced', highlight: 'Dynamic & protected routing' }
    ]
  },
  {
    id: 'ui-styling',
    title: 'UI & Styling Systems',
    icon: 'bi-palette',
    description: 'Responsive layout engines, design systems, and component libraries.',
    skills: [
      { name: 'Responsive Web Design', icon: 'bi-phone', level: 'Advanced', highlight: 'Mobile-first breakpoints' },
      { name: 'Flexbox & CSS Grid', icon: 'bi-grid-3x3', level: 'Expert', highlight: 'Precision spatial layouts' },
      { name: 'Bootstrap 5', icon: 'bi-bootstrap', level: 'Advanced', highlight: 'Component customization' },
      { name: 'Material UI', icon: 'bi-gem', level: 'Intermediate', highlight: 'Theme engine & components' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'bi-server',
    description: 'Full-stack MERN capabilities for building and consuming robust web services.',
    skills: [
      { name: 'Node.js', icon: 'bi-terminal', level: 'Intermediate', highlight: 'Server-side runtime' },
      { name: 'Express.js', icon: 'bi-cpu', level: 'Intermediate', highlight: 'RESTful API routing' },
      { name: 'REST APIs', icon: 'bi-arrow-left-right', level: 'Advanced', highlight: 'Architecture & integration' }
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: 'bi-database',
    description: 'Data modeling, schema design, and cloud database persistence.',
    skills: [
      { name: 'MongoDB & Mongoose', icon: 'bi-database-fill-gear', level: 'Intermediate', highlight: 'Atlas NoSQL schemas' },
      { name: 'Firebase Firestore', icon: 'bi-fire', level: 'Intermediate', highlight: 'Real-time document storage' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps Integration',
    icon: 'bi-tools',
    description: 'Developer workflows, version control, security tokens, and modern CI/CD pipelines.',
    skills: [
      { name: 'Git & GitHub', icon: 'bi-git', level: 'Advanced', highlight: 'Branching & collaborative PRs' },
      { name: 'Vite', icon: 'bi-lightning-charge', level: 'Advanced', highlight: 'High-speed build tooling' },
      { name: 'Axios & Fetch', icon: 'bi-cloud-download', level: 'Advanced', highlight: 'Interceptors & async handling' },
      { name: 'Postman', icon: 'bi-send-check', level: 'Advanced', highlight: 'API contract testing' },
      { name: 'JWT Authentication', icon: 'bi-shield-lock', level: 'Intermediate', highlight: 'Secure bearer token auth' },
      { name: 'Razorpay Integration', icon: 'bi-credit-card-2-front', level: 'Intermediate', highlight: 'Payment checkout workflows' },
      { name: 'Vercel & Render', icon: 'bi-cloud-check', level: 'Advanced', highlight: 'Continuous deployment' }
    ]
  }
];

