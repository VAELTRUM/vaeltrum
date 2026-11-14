import { CorePrinciple, ProcessStage, ServiceItem, TechStackCategory } from '../types';

export const COMPANY_NAME = 'VAELTRUM';
export const COMPANY_TAGLINE = 'Engineering Ideas Into Products.';
export const COMPANY_EMAIL = 'contact@vaeltrum.com';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'What We Build', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'saas-dev',
    number: '01',
    title: 'SaaS Product Development',
    description: 'Design and develop scalable software products, from MVPs to fully featured SaaS platforms.',
    focus: ['Multi-tenant Architecture', 'Subscription & Billing', 'Role-based Access', 'Cloud Infrastructure']
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Custom Software Engineering',
    description: 'Build software tailored to specific operational requirements, workflows, and business challenges.',
    focus: ['Bespoke Workflows', 'Internal Tooling', 'Legacy System Modernization', 'Data Pipelines']
  },
  {
    id: 'enterprise-platforms',
    number: '03',
    title: 'Enterprise Platforms',
    description: 'Develop structured digital platforms for institutions and organizations, including portals, management systems, and integrated applications.',
    focus: ['ERP & Administrative Portals', 'Institutional Systems', 'High-concurrency Databases', 'Audit & Compliance']
  },
  {
    id: 'web-apps',
    number: '04',
    title: 'Web Application Development',
    description: 'Create modern, responsive web applications with thoughtful architecture and intuitive user experiences.',
    focus: ['High-performance Frontend', 'Progressive Web Apps', 'State Management', 'Cross-device Optimization']
  },
  {
    id: 'backend-api',
    number: '05',
    title: 'Backend & API Engineering',
    description: 'Build reliable backend systems, APIs, databases, authentication, and application infrastructure.',
    focus: ['RESTful & GraphQL APIs', 'Microservices', 'Distributed Caching', 'Authentication & Security']
  },
  {
    id: 'product-design',
    number: '06',
    title: 'Product Design & Architecture',
    description: 'Translate product requirements into clear user experiences, system architecture, and practical development roadmaps.',
    focus: ['System Architecture Design', 'User Journey Mapping', 'Technical Specification', 'Database Modeling']
  }
];

export const FEATURED_PROJECT = {
  id: 'ikgptu-alumni-portal',
  title: 'IKGPTU — Alumni ERP Portal',
  client: 'I.K. Gujral Punjab Technical University (IKGPTU)',
  liveUrl: 'https://alumni.ptu.ac.in/',
  category: 'Enterprise / Education Technology',
  description: 'An alumni-focused ERP portal developed to support alumni engagement and digital institutional workflows.',
  highlightMetric: {
    value: '5,000+',
    label: 'Trusted users',
    context: 'Reported active alumni and institutional users on the IKGPTU portal platform.'
  },
  tags: ['Enterprise ERP', 'Institutional Platform', 'Alumni Engagement', 'Database Architecture'],
  scopeItems: [
    'Unified alumni directory with searchable professional records',
    'Institutional announcements and university event coordination',
    'Alumni profile management and verification lifecycle',
    'Centralized administrative workflows and secure access control'
  ]
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Problem definition before code',
    description: 'Understand the business, users, challenges, and requirements thoroughly before writing a single line of architecture.',
    deliverables: ['Problem Space Definition', 'Functional Requirements', 'User Personas & Workflows', 'Constraint Analysis']
  },
  {
    step: '02',
    title: 'Architect',
    tagline: 'System design for longevity',
    description: 'Define system architecture, technology choices, data models, and product structure to guarantee maintainability and scale.',
    deliverables: ['System Architecture Diagram', 'Data Schema & Models', 'API Contract Specifications', 'Security & Deployment Strategy']
  },
  {
    step: '03',
    title: 'Engineer',
    tagline: 'Precision software delivery',
    description: 'Build the frontend, backend, integrations, and core product functionality with robust automated testing and clean patterns.',
    deliverables: ['Modular Codebase', 'Backend Services & APIs', 'Responsive Interface', 'Integration Testing']
  },
  {
    step: '04',
    title: 'Deliver',
    tagline: 'Deployment and dependability',
    description: 'Test, refine, deploy, and support the software as required by the project scope, ensuring smooth operational handover.',
    deliverables: ['Staging & Production Deployment', 'Observability & Monitoring', 'Documentation & Knowledge Handover', 'Post-launch Support']
  }
];

export const TECH_CATEGORIES: TechStackCategory[] = [
  {
    category: 'Frontend & UI',
    technologies: [
      { name: 'React', description: 'Component-driven user interfaces' },
      { name: 'Next.js', description: 'Production full-stack React framework' },
      { name: 'TypeScript', description: 'Strict type safety across the stack' },
      { name: 'Tailwind CSS', description: 'Predictable, maintainable styling systems' },
    ]
  },
  {
    category: 'Backend & Services',
    technologies: [
      { name: 'Node.js', description: 'Event-driven server runtime' },
      { name: 'Python', description: 'Data processing, automation, and backend services' },
      { name: 'REST & GraphQL', description: 'Structured, typed API contracts' },
    ]
  },
  {
    category: 'Data & Infrastructure',
    technologies: [
      { name: 'PostgreSQL', description: 'Reliable relational data architecture' },
      { name: 'Redis', description: 'In-memory caching and session coordination' },
      { name: 'MongoDB', description: 'Document storage for flexible schemas' },
      { name: 'Docker', description: 'Isolated, containerized environments' },
      { name: 'Cloud Infrastructure', description: 'Targeted cloud deployment architectures' },
    ]
  }
];

export const WHY_PRINCIPLES: CorePrinciple[] = [
  {
    number: '01',
    title: 'Problem-first thinking',
    description: 'We focus on understanding the actual problem before deciding what to build. Great software eliminates friction rather than adding unnecessary complexity.'
  },
  {
    number: '02',
    title: 'Thoughtful architecture',
    description: 'We consider maintainability, scalability, and long-term product requirements from day one. We engineer systems that teams can build upon for years.'
  },
  {
    number: '03',
    title: 'Product-focused execution',
    description: 'We care about the complete experience, not just making features work. From micro-interactions to database query latency, details determine quality.'
  },
  {
    number: '04',
    title: 'Transparent development',
    description: 'Clear communication, realistic timelines, and honest technical decisions. No opaque promises or manufactured buzzwords.'
  }
];
