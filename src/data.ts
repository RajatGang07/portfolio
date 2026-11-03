export const profile = {
  name: 'Rajat Gang',
  role: 'Technical Lead',
  tagline: 'Full-Stack & Platform Engineering',
  location: 'Noida, India',
  email: 'gangrajat.mail@gmail.com',
  phone: '+91 81077 31219',
  linkedin: 'https://www.linkedin.com/in/rajatgang/',
  github: 'https://github.com/RajatGang07',
  resume: './Rajat-Gang-Resume.pdf',
  years: 9,
}

export const stats = [
  { value: '9+', label: 'years shipping' },
  { value: '10', label: 'engineers led' },
  { value: '6', label: 'companies' },
  { value: '3', label: 'insurance verticals' },
]

export const pillars = [
  {
    title: 'Systems that hold up',
    body: 'Golang and Node.js services, PostgreSQL data modelling, and REST APIs designed around real failure modes, not happy paths.',
    tags: ['Golang', 'Node.js', 'PostgreSQL', 'REST'],
  },
  {
    title: 'Frontends at scale',
    body: 'Large React and TypeScript codebases used by thousands of operators daily. Forms systems, dashboards, and multi-step purchase journeys.',
    tags: ['React', 'TypeScript', 'Next.js', 'React Native'],
  },
  {
    title: 'Agentic SDLC',
    body: 'Multi-agent pipelines that take a PRD through spec review, implementation, PR review, merge, deploy, and self-healing with no manual hand-offs.',
    tags: ['Agent skills', 'Knowledge bases', 'Agentic review'],
  },
]

export type Job = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  current?: boolean
}

export const experience: Job[] = [
  {
    company: 'Paytm Insurance',
    role: 'Technical Lead',
    period: 'Dec 2025 – Present',
    location: 'Noida',
    current: true,
    summary:
      'Leading 10 engineers across term, health, and motor insurance. Own architecture and delivery end to end, plus an internal CMS and an agentic PRD-to-PR platform.',
    highlights: [
      'Architected a multi-agent pipeline that carries a feature from PRD to production: spec review, implementation, PR review, automated fixes, merge, and deploy.',
      'Designed a review agent that validates PRDs against a shared knowledge base, blocks specs with unresolved gaps, and asks clarifying questions before any code is written.',
      'Built the end-to-end term life journey: quote comparison, eligibility and medical declarations, KYC, insurer underwriting hand-offs, and payment.',
      'Delivered health purchase and renewal flows with plan comparison and multi-insurer API integrations.',
      'Shipped car and bike insurance with vehicle lookup, NCB handling, add-ons, and instant policy issuance.',
      'Built a CMS so business teams configure plans, pricing content, banners, and copy without an engineering release.',
    ],
  },
  {
    company: 'Forward Networks',
    role: 'Member of Technical Staff',
    period: 'Jul 2025 – Nov 2025',
    location: 'Bangalore',
    summary:
      'Unified UI and APIs for network collectors, replacing manual API checks with one place for status, versioning, and CRUD.',
    highlights: [
      'Designed and implemented a unified collector UI consolidating status, versioning, and CRUD, improving org-wide visibility.',
      'Built APIs for bulk upgrades, default assignment, and IP and status tracking, improving management efficiency by 40%.',
      'Delivered end-to-end UI and backend integration in two weeks with full stakeholder sign-off.',
    ],
  },
  {
    company: 'Stanza Living',
    role: 'Software Development Engineer III',
    period: 'Nov 2021 – Jul 2025',
    location: 'Gurugram',
    summary:
      'Owned three products across property operations and catering, used across roughly 10,000 properties. Led teams of 4 to 8 engineers.',
    highlights: [
      'Jarvis, the property operations platform: Enkash invoicing, smart-meter onboarding, housekeeping beat plans, and a rebuilt forms system. Cut invoicing and onboarding time by 50%, form errors by 40%.',
      'Gordon, menu planning and budgeting: automated weekly menus and rule-based cost trimming. Halved menu prep time, cut ingredient costs by 8%, held 95 to 100% cost efficiency.',
      'Owned the public website end to end, lifting engagement by 30% through lead generation and visit tracking.',
      'Built unit, integration, and automated UI regression coverage across all three products, reducing production bugs by 35% and manual QA by 40%.',
    ],
  },
  {
    company: 'Tekion',
    role: 'Software Development Engineer II',
    period: 'Sep 2020 – Nov 2021',
    location: 'Bangalore',
    summary:
      'Mobile app for dealership service centers: scheduling, walk-ins, car pickup, self-service, and concierge.',
    highlights: [
      'Reduced appointment scheduling time by 20% and improved customer satisfaction.',
      'Directed a team of 4, assigning work and reviewing PRs.',
      'Implemented unit and integration testing across booking and service modules, reducing production issues by 30%.',
    ],
  },
  {
    company: 'Gameskraft',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 – Sep 2020',
    location: 'Bangalore',
    summary:
      'CRM used by the whole organisation and a 100+ member support team, plus core game features.',
    highlights: [
      'Automated 90% of tournament processes, halved refund processing time, and handled KYC for 1M+ users and tracking for 2M+.',
      'Led development on Leaderboard, Tournament, and Loyalty programs.',
      'Reduced app size from 98 MB to 70 MB and improved speed by optimising widgets.',
    ],
  },
  {
    company: 'Groww',
    role: 'Software Engineer',
    period: 'Jul 2017 – Apr 2018',
    location: 'Bangalore',
    summary: 'Internal support console handling 1K+ daily customer calls and KYC for 50k users.',
    highlights: [
      'Increased operational efficiency by 25% with real-time user lookup and automated log analysis.',
      'Decreased load times by 50%.',
    ],
  },
]

export type Project = {
  name: string
  kicker: string
  description: string
  points: string[]
  stack: string[]
  links: { label: string; href: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'MarketMint',
    kicker: 'Paper trading for Indian equities',
    featured: true,
    description:
      'A full-stack paper-trading desk for the NSE cash market with a simulated broker engine, a fault-tolerant market-data layer, and a quantitative signals engine.',
    points: [
      'Broker engine books fills, positions, and P&L against virtual cash. Market, limit, stop-market, and OCO bracket orders.',
      'Market-data layer chains multiple price providers with automatic failover and health reporting. In-memory ranked search across the full NSE universe.',
      'Signals engine ranks the ~210-stock F&O universe on momentum, trend, and volume with ATR-based sizing and walk-forward backtesting. Autopilot executes signals end to end.',
      'Multi-user auth, real-time dashboard, brokerage-charge bifurcation, Docker-based CI/CD on Render.',
    ],
    stack: ['Golang', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Render'],
    links: [
      { label: 'Live demo', href: 'https://marketmint.onrender.com' },
      { label: 'Source', href: 'https://github.com/RajatGang07/marketmint' },
    ],
  },
  {
    name: 'PRD-to-PR Platform',
    kicker: 'Agentic SDLC at Paytm Insurance',
    description:
      'A multi-agent pipeline with composable skills and a shared knowledge base. A spec-review agent gates PRDs, downstream agents implement, review, fix, merge, deploy, and repair post-deploy failures.',
    points: [
      'Spec gating: blocks PRDs with unresolved gaps and raises questions inline.',
      'Self-healing: agents detect and repair post-deploy failures autonomously.',
    ],
    stack: ['Agent skills', 'Knowledge base', 'CI/CD'],
    links: [],
  },
  {
    name: 'Insurance CMS',
    kicker: 'Content without code deploys',
    description:
      'A content management system that lets business teams configure plans, pricing content, banners, and journey copy across term, health, and motor, removing engineering releases from the content workflow.',
    points: [],
    stack: ['Node.js', 'PostgreSQL', 'React'],
    links: [],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Golang', 'HTML', 'CSS / SCSS'] },
  { group: 'Backend', items: ['Golang (chi, pgx)', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Redux Toolkit', 'Mithril.js'] },
  { group: 'AI & Agents', items: ['Multi-agent workflows', 'Agent skills', 'Knowledge-base grounding', 'Agentic code review'] },
  { group: 'Testing', items: ['Jest', 'Cypress', 'Integration & regression suites'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Azure', 'Docker', 'Nginx', 'Firebase', 'Git', 'Sentry', 'Jira'] },
]

export const education = [
  { school: 'C-DAC, Noida', degree: 'Master of Computer Application (MCA), Computer Science', period: '2014 – 2017', note: 'GPA 8.7 / 10' },
  { school: 'Jaipur National University', degree: 'Bachelor in Computer Application (BCA)', period: '2011 – 2014', note: 'GPA 8.0 / 10' },
]

export const marquee = [
  'Golang', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Next.js', 'Docker', 'AWS',
  'Multi-agent SDLC', 'React Native', 'Cypress', 'REST', 'Nginx',
]
