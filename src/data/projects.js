export const featuredProject = {
  id: 'handicraft-hub',
  title: 'Handicraft Hub',
  tagline: 'Full-Stack MERN E-Commerce Platform for Authentic Indian Crafts',
  category: 'Full-Stack MERN Architecture',
  badge: 'Featured Flagship Project',
  liveUrl: 'https://handicraft-website.vercel.app/',
  githubUrl: 'https://github.com/chandugithubui/handicraft-website',
  description:
    'Handicraft Hub is a production-grade full-stack e-commerce application dedicated to showcasing and selling authentic Indian handicrafts. Built with a component-driven React.js frontend and a modular Node.js/Express REST backend, the platform delivers high-speed browsing, secure payments, and role-based administrative control.',
  technologies: [
    'React.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Context API',
    'JWT Auth',
    'Razorpay',
    'Bootstrap 5'
  ],
  metrics: [
    { label: 'Role-Based Access', value: 'User & Admin' },
    { label: 'Payment Integration', value: 'Razorpay & COD' },
    { label: 'Architecture', value: 'Decoupled REST API' },
    { label: 'State Model', value: 'React Context API' }
  ],
  views: [
    {
      id: 'homepage',
      label: 'Home & Discovery',
      title: 'Homepage & Hero Discovery',
      description: 'Engaging storefront presentation with curated craft collections, featured artisan spotlights, and responsive hero banners.',
      image: '/assets/projects/handicraft-hub/homepage.png'
    },
    {
      id: 'products',
      label: 'Catalog & Filters',
      title: 'Product Catalog & Dynamic Filtering',
      description: 'Fast product discovery with category browsing, faceted attribute filtering, dynamic pagination, and pricing sort algorithms.',
      image: '/assets/projects/handicraft-hub/products.png'
    },
    {
      id: 'details',
      label: 'Product Details',
      title: 'Product Details & Inventory Status',
      description: 'Comprehensive product view showcasing high-resolution image previews, inventory availability, craftsmanship details, and user reviews.',
      image: '/assets/projects/handicraft-hub/product-details.png'
    },
    {
      id: 'cart',
      label: 'Cart & Checkout',
      title: 'Shopping Cart & Order Calculations',
      description: 'Interactive cart management with immediate subtotal updates, coupon code validations, and shipping address verification.',
      image: '/assets/projects/handicraft-hub/cart.png'
    },
    {
      id: 'admin',
      label: 'Admin Control Center',
      title: 'Executive Admin Dashboard',
      description: 'Role-protected operations portal facilitating product CRUD, inventory updates, image uploads, and customer management.',
      image: '/assets/projects/handicraft-hub/admin-dashboard.png'
    },
    {
      id: 'orders',
      label: 'Order Management',
      title: 'Order Tracking & Processing',
      description: 'Live order status pipeline tracking transactions from payment confirmation to dispatch and delivery.',
      image: '/assets/projects/handicraft-hub/order-management.png'
    }
  ],
  coreCapabilities: [
    {
      title: 'Discovery & Catalog Engine',
      description: 'Category browsing, real-time search, faceted filtering, responsive pagination, and wishlist bookmarking.'
    },
    {
      title: 'Secure Authentication & Roles',
      description: 'JSON Web Token (JWT) stateless auth with HTTP headers, protected routes, and distinct permissions for shoppers vs administrators.'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Seamless checkout with Razorpay webhook verification, cash-on-delivery fallback, and automated order invoice records.'
    },
    {
      title: 'Backoffice Administration',
      description: 'Comprehensive administrative dashboard with full product inventory CRUD, image upload processing, and coupon management.'
    }
  ]
};

export const otherProjects = [
  {
    id: 'event-tracking',
    title: 'Event Tracking System',
    subtitle: 'Queue-Based Asynchronous Architecture',
    category: 'Full-Stack & Asynchronous Architecture',
    image: '/assets/projects/event-tracking.png',
    githubUrl: 'https://github.com/chandugithubui/chandugithubui-event-tracking-system',
    liveUrl: null, // No fake placeholder
    description:
      'A scalable telemetry and event ingestion system architected around an asynchronous queue model. Utilizes Redis Queue and background worker threads to decouple high-throughput event ingestion from database persistence, ensuring sub-50ms non-blocking HTTP responses.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis Queue', 'Background Workers'],
    highlights: [
      'Non-blocking API endpoints returning instant acknowledgment to client callers',
      'Redis Queue worker architecture for reliable, asynchronous batch event processing',
      'Real-time event metric visualizations and aggregated analytics dashboard'
    ]
  },
  {
    id: 'todo-app',
    title: 'Modern Task Management App',
    subtitle: 'Single-Page React & Vite Workflow',
    category: 'Frontend Application',
    image: '/assets/projects/todo-app.png',
    githubUrl: 'https://github.com/chandugithubui/todo-app',
    liveUrl: 'https://lnkd.in/gZmeQn_Q',
    description:
      'A high-performance single-page task manager demonstrating clean component decomposition, immutable state transitions, and responsive design systems. Features persistent browser storage, dynamic filtering, and a custom CSS theme engine.',
    technologies: ['React.js', 'Vite', 'CSS3 Variables', 'LocalStorage API', 'Vercel CI/CD'],
    highlights: [
      'Optimistic state updates with zero third-party UI framework bloat',
      'Persistent local storage synchronization across browser sessions',
      'Automated Git-driven CI/CD build and preview pipeline on Vercel'
    ]
  }
];

