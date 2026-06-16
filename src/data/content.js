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
    'Full-stack developer who builds products end to end. I design APIs, data models, and interfaces that stay clear in daily use. Recent work includes property-management platforms, multi-tenant SaaS, and production tools running in the real world.',
  // The banner you uploaded — already styled as a portfolio header
  banner: '/banner.png',
  available: true,
  resumeUrl: '#',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/iprachigoyal' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/prachi-goyal19/' },
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
    title: 'AI Integrations',
    description: 'AI-powered alerts and assistants wired into real workflows.',
  },
  {
    icon: '◉',
    title: 'API Development',
    description: 'REST and GraphQL APIs with authentication, clean contracts, and reliable third-party integrations.',
  },
  {
    icon: '◇',
    title: 'Design Systems',
    description: 'Accessible, responsive component libraries that keep a product consistent as it grows.',
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
      'Building features for the Edge platform at a property management company, automating rental operations and internal workflows. Implemented CASL-based RBAC across all modules, integrated AppFolio APIs for real-time property/tenant/owner sync, and built communication infra with SendGrid and the Gmail API for two-way email sync.',
    tags: ['React', 'TypeScript', 'CASL / RBAC', 'AppFolio', 'SendGrid', 'Gmail API'],
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
    company: 'Freelance',
    role: 'Web Developer',
    period: '2024 — Present',
    type: 'Self-Employed',
    description:
      'Building the frontend of websites and web apps using modern technologies. Working directly with clients to design and develop user interfaces that meet their business needs.',
    tags: ['React', 'Next.js', 'Tailwind', 'UI/UX'],
  },
  {
    company: 'Quark Software Inc',
    role: 'Research & Development Intern',
    period: 'Jan 2024 — Jun 2024',
    type: 'Mohali, India',
    description:
      'Improved software stability by building automated testing frameworks for Quark XML Author and QuarkXPress server extensions, now used by 10+ developers. Wrote 10+ scripts for InDesign and InDesign Server to optimize workflows.',
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
      'Property-management platform where owners and agents list and lease properties and tenants apply and book, covering virtual showings, rental applications, and the full journey from onboarding through move-in and move-out. CASL-based RBAC across all modules, AppFolio API sync for real-time property/tenant/owner data.',
    tags: ['React', 'TypeScript', 'CASL / RBAC', 'AppFolio', 'SendGrid', 'Gmail API'],
    image: '/project-rentsolutions-placeholder.jpg',
    live: 'https://app.rentsolutionsemail.com/admin-portal/login',
    year: '2025',
    featured: true,
  },
  {
    title: 'PumpOS',
    blurb:
      'Multi-tenant SaaS for petrol pump operations, live in daily use at local petrol pumps based in Punjab, and being prepared for rollout to other dealers. Covers fuel rates, tank/nozzle setup, daily sales and dip entries, credit ledgers, worker shifts, and HPCL indent tracking. AI-integrated alerts notify owners when recorded dip mismatches or credit history, or prompt them to place an indent when stock runs short.',
    tags: ['React', 'Vite', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: '/project-pumpos-placeholder.jpg',
    live: 'https://pump-management-weld.vercel.app/',
    year: '2024',
    featured: true,
  },
  {
    title: 'Talksy',
    blurb:
      'A real-time chat app for web and mobile. One-on-one and group conversations update instantly over Socket.IO, with the touches that make messaging feel alive — delivery receipts, online presence, reactions, replies, media sharing, and editing or deleting what you have sent. I built it to learn how a messaging stack fits together, sharing TypeScript contracts across an Express backend, a React web client, and a React Native (Expo) app.',
    tags: ['React', 'Socket.IO', 'TypeScript', 'Prisma', 'PostgreSQL', 'TanStack Query'],
    image: '/project-talksy-placeholder.jpg',
    live: 'https://talksy-web-eight.vercel.app/',
    year: '2025',
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
  'I shipped a SaaS that runs local petrol pumps in Punjab every day',
  'Chai > coffee, and I will die on this hill',
  'I enjoy every layer of the stack, design to deploy',
  'I keep a notebook of API design ideas',
  'My most-used keyboard shortcut is ⌘K',
  'I think semicolons are underrated',
]
