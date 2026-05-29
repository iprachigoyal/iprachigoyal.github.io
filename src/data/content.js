// =============================================================
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// =============================================================

export const personal = {
  name: 'Prachi Goyal',
  shortName: 'PG',
  role: 'Full-Stack Developer',
  location: 'India',
  email: 'goyalprachi711@gmail.com',
  tagline:
    'Full-stack developer who ships products end to end — APIs, data models, and interfaces that feel clear in daily use. Recent work spans property-management platforms, multi-tenant SaaS, and production tools running in the real world.',
  // The banner you uploaded — already styled as a portfolio header
  banner: '/banner.png',
  available: true,
  resumeUrl: '#',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/prachigoyal' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/prachigoyal' },
  { label: 'Email', url: 'mailto:goyalprachi711@gmail.com' },
]

// Adham-style split personality
export const dualRole = {
  left: {
    label: '<frontend>',
    title: 'Frontend',
    tagline: 'Building interfaces that feel good to use.',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'Vite', 'React Query', 'Framer Motion'],
  },
  right: {
    label: '{ backend }',
    title: 'Backend',
    tagline: 'APIs, databases, and the wiring behind the scenes.',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Prisma', 'GraphQL', 'Redis', 'Docker', 'AWS', 'CI/CD'],
  },
}

export const services = [
  {
    icon: '◆',
    title: 'Web Applications',
    description: 'Full-stack apps with React/Next.js front and Node/Express back. Built to scale.',
  },
  {
    icon: '◈',
    title: 'Multi-tenant SaaS',
    description: 'Tenant-isolated platforms with RBAC, auth, and clean data models using Prisma + PostgreSQL.',
  },
  {
    icon: '◉',
    title: 'API Development',
    description: 'REST APIs, authentication, and third-party integrations — AppFolio, SendGrid, Gmail and more.',
  },
  {
    icon: '◇',
    title: 'Reusable UI Systems',
    description: 'Scalable, responsive component libraries with React and Redux Toolkit.',
  },
]

export const experience = [
  {
    company: 'Rent Solutions',
    role: 'Full Stack Developer',
    period: 'Apr 2025 — Present',
    type: 'United States (Remote)',
    link: 'https://app.rentsolutionsemail.com/admin-portal/login',
    description:
      'Building features for the Edge platform at a property management company — automating rental operations and internal workflows. Implemented CASL-based RBAC across all modules, integrated AppFolio APIs for real-time property/tenant/owner sync, and built communication infra with SendGrid and the Gmail API for two-way email sync.',
    tags: ['React', 'TypeScript', 'CASL / RBAC', 'AppFolio', 'SendGrid', 'Gmail API'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2023 — Present',
    type: 'Remote / India',
    description:
      'Designing and shipping web apps end-to-end for clients and side bets. Built PumpOS — a multi-tenant SaaS running a live HPCL petrol-pump dealership — and a role-based production tracker for a dried-mango business, handling everything from data modeling and APIs to UI and deployment.',
    tags: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
  {
    company: 'Ultivic Pvt. Ltd',
    role: 'Jr. React Developer',
    period: 'Feb 2025 — Apr 2025',
    type: 'Mohali, India',
    description:
      'Developed 20+ reusable and scalable UI components with React and Redux Toolkit, tailored to diverse client requirements. Ensured responsive design and optimized performance across devices and browsers.',
    tags: ['React', 'Redux Toolkit', 'Responsive UI'],
  },
  {
    company: 'Quark Software Inc',
    role: 'Research & Development Intern',
    period: 'Jan 2024 — Jun 2024',
    type: 'Mohali, India',
    description:
      'Improved software stability by building automated testing frameworks for Quark XML Author and QuarkXPress server extensions — now used by 10+ developers. Wrote 10+ scripts for InDesign and InDesign Server to optimize workflows.',
    tags: ['Automation', 'Testing', 'InDesign'],
  },
  {
    company: 'Nephics',
    role: 'Software Developer Intern',
    period: 'Jan 2022 — Apr 2022',
    type: 'Mohali, India',
    description:
      'Drove the full development lifecycle of automated tools in Python and C++, identifying critical bottlenecks and resolving three major performance issues to improve execution speed during deployment.',
    tags: ['Python', 'C++', 'Performance'],
  },
]

export const projects = [
  {
    title: 'Rent Solutions — Edge Platform',
    blurb:
      'Property-management platform (US, remote) automating rental operations and internal workflows. CASL-based RBAC across all modules, AppFolio API sync for real-time property/tenant/owner data, and two-way email via SendGrid + the Gmail API.',
    tags: ['React', 'TypeScript', 'CASL / RBAC', 'AppFolio', 'SendGrid', 'Gmail API'],
    image: '/project-rentsolutions-placeholder.jpg',
    live: 'https://app.rentsolutionsemail.com/admin-portal/login',
    code: '#',
    year: '2025',
    featured: true,
  },
  {
    title: 'PumpOS',
    blurb:
      'Multi-tenant SaaS for petrol pump operations — live in daily use at a family HPCL dealership and being prepared for rollout to other dealers. Covers fuel rates, tank/nozzle setup, daily sales and dip entries, credit ledgers, worker shifts, and HPCL indent tracking.',
    tags: ['React', 'Vite', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: '/project-pumpos-placeholder.jpg',
    live: 'https://pump-management-weld.vercel.app/',
    code: '#',
    year: '2024',
    featured: true,
  },
]

export const testimonials = [
  {
    quote:
      'Delivered exactly what we asked for and then some. Communication was tight, the code was clean, and the site shipped a week early.',
    name: 'Client Name',
    role: 'Founder, Company',
    avatar: '/testimonial-1-placeholder.jpg',
  },
  {
    quote:
      'Working with Prachi felt like having a senior dev on the team — without the senior dev overhead. Genuinely cares about the product.',
    name: 'Another Client',
    role: 'CTO, Startup',
    avatar: '/testimonial-2-placeholder.jpg',
  },
]

export const brands = ['React', 'Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'TypeScript']

// Personality bits — Adham-style fun facts
export const randomFacts = [
  'I shipped a SaaS that runs my family petrol pump every day',
  'Chai > coffee, and I will die on this hill',
  'I enjoy every layer of the stack — design to deploy',
  'I keep a notebook of API design ideas',
  'My most-used keyboard shortcut is ⌘K',
  'I think semicolons are underrated',
]
