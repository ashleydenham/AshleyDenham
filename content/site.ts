import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status: 'active' | 'in development';
  summary: string;
  tags: [string, string, string];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type Membership = {
  name: string;
  status: string;
  summary: string;
  href: string;
  icon: string;
};

export type Credential = {
  name: string;
  issuer: string;
  status: 'current focus' | 'roadmap' | 'legacy reference' | 'skill evidence';
  summary: string;
  href: string;
  icon: string;
};

export const site = {
  name: 'Ashley Denham',
  url: 'https://ashleydenham.me',
  location: 'Adelaide, South Australia',
  description: 'Adelaide-based engineer building AI, embedded systems, and trading infrastructure.',
  nav: [
    { label: 'Projects', href: '#projects' },
    { label: 'Now', href: '#now' },
    { label: 'Signals', href: '#signals' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  hero: {
    title: 'Ashley Denham',
    positioning: 'Adelaide-based Mechatronics Engineer & AI Builder',
    intro:
      "Building intelligent systems at the intersection of AI, robotics, embedded hardware, and high-stakes domains. Mechatronics Engineering student at Deakin with 15+ years in healthcare, law, and quantitative trading.",
    caption: 'Currently studying Bachelor of Mechatronics Engineering (Honours) at Deakin University',
    image: '/avatar.jpg',
  },
  now: {
    title: 'Now — May 2026',
    lastUpdated: 'Last updated: 9 May 2026 (deployed)',
    items: [
      'Developing Slothy — AI-powered smart home security & assistant (Claude + MCP)',
      'Active US equities trader (NYSE/NASDAQ, tech focus) with custom AI tooling',
      'Bachelor of Mechatronics Engineering (Honours) — Deakin University',
      'AWS Cloud Practitioner certification in progress',
    ],
  },
  projects: [
    {
      name: 'Slothy',
      status: 'in development',
      summary: 'Personal AI assistant with smart home security monitoring. Built on Claude API and custom MCP servers for local-first privacy on Raspberry Pi.',
      tags: ['Claude API', 'MCP', 'Python'],
    },
    {
      name: 'Hammy',
      status: 'active',
      summary: 'Custom Raspberry Pi robotics platform for embedded systems and ROS 2 prototyping. Modular hardware for rapid experimentation.',
      tags: ['Raspberry Pi', 'ROS 2', 'Python'],
    },
    {
      name: 'PinkPulse',
      status: 'active',
      summary: 'AI-powered market intelligence platform aggregating 20+ data sources with Claude synthesis. Powers daily trading decisions.',
      tags: ['FastAPI', 'PostgreSQL', 'Claude'],
    },
    {
      name: 'HamTrade',
      status: 'active',
      summary: 'High-performance browser scalping dashboard for US equities with custom screeners, momentum alerts, and real-time execution.',
      tags: ['TypeScript', 'Trading APIs', 'WebSockets'],
    },
    {
      name: 'Home Lab',
      status: 'active',
      summary: 'Enterprise-grade infrastructure: Proxmox, TrueNAS, Tailscale zero-trust, GPU nodes for local ML inference.',
      tags: ['Proxmox', 'Tailscale', 'TrueNAS'],
    },
    {
      name: 'Custom AI Models',
      status: 'active',
      summary: 'Local LLM inference & fine-tuning stack on Apple Silicon (MLX) and self-hosted endpoints. Privacy-first RAG and agents.',
      tags: ['MLX', 'PyTorch', 'Hugging Face'],
    },
  ] satisfies Project[],
  memberships: [
    {
      name: 'Engineers Australia',
      status: 'Student Member',
      summary: 'Essential engineering pathway toward CPEng.',
      href: 'https://www.engineersaustralia.org.au/membership/student',
      icon: '/badges/engineers-australia.svg',
    },
    {
      name: 'Australian Computer Society',
      status: 'Student Member',
      summary: "Australia's primary IT professional body.",
      href: 'https://www.acs.org.au/join-acs.html',
      icon: '/badges/acs.svg',
    },
    {
      name: 'IEEE',
      status: 'Student Member',
      summary: 'Adelaide section + Robotics & Automation Society.',
      href: 'https://students.ieee.org/membership-benefits/student-membership-benefits/',
      icon: '/badges/ieee.svg',
    },
    {
      name: 'Linux Australia',
      status: 'Member',
      summary: 'Open-source community & PyCon AU network.',
      href: 'https://linux.org.au/membership',
      icon: '/badges/linux-australia.svg',
    },
    {
      name: 'Defence Industry SA',
      status: 'Industry network',
      summary: 'AUKUS supply-chain and Adelaide defence events.',
      href: 'https://defencesa.com/industry/',
      icon: '/badges/defence-sa.svg',
    },
  ] satisfies Membership[],
  credentials: {
    certifications: [
      {
        name: 'CS50: Introduction to Computer Science',
        issuer: 'HarvardX / edX',
        status: 'roadmap',
        summary: 'Algorithms, data structures, C, Python, SQL, JS.',
        href: 'https://www.edx.org/cs50',
        icon: '/badges/harvardx.svg',
      },
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        status: 'current focus',
        summary: 'Cloud fundamentals, security, architecture.',
        href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
        icon: '/badges/aws.svg',
      },
      {
        name: 'AWS Certified Solutions Architect — Associate',
        issuer: 'Amazon Web Services',
        status: 'roadmap',
        summary: 'Secure, resilient, high-performing AWS systems.',
        href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        icon: '/badges/aws.svg',
      },
      {
        name: 'Certified Kubernetes Application Developer (CKAD)',
        issuer: 'Linux Foundation / CNCF',
        status: 'roadmap',
        summary: 'Deploying and maintaining cloud-native apps.',
        href: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
        icon: '/badges/kubernetes.svg',
      },
      {
        name: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI / Coursera',
        status: 'roadmap',
        summary: 'Supervised & unsupervised learning, recommenders.',
        href: 'https://www.deeplearning.ai/courses/machine-learning-specialization/',
        icon: '/badges/deeplearning-ai.png',
      },
    ] satisfies Credential[],
    languageCredentials: [
      {
        name: 'Python — PCAP',
        issuer: 'Python Institute',
        status: 'roadmap',
        summary: 'OOP, modules, exceptions, files, generators.',
        href: 'https://pythoninstitute.org/certification/pcap-certification-associate/',
        icon: '/badges/python-institute.svg',
      },
      {
        name: 'SQL — Data Analyst Associate',
        issuer: 'Databricks',
        status: 'roadmap',
        summary: 'Analytics, reporting, data workflows.',
        href: 'https://www.databricks.com/learn/certification/data-analyst-associate',
        icon: '/badges/sql.svg',
      },
      {
        name: 'TypeScript / JavaScript — Meta Front-End',
        issuer: 'Meta / Coursera',
        status: 'roadmap',
        summary: 'React, version control, portfolio web apps.',
        href: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        icon: '/badges/meta.svg',
      },
      {
        name: 'Bash / Linux — LFCS',
        issuer: 'Linux Foundation',
        status: 'roadmap',
        summary: 'Shell, networking, storage, systems admin.',
        href: 'https://training.linuxfoundation.org/certification/lfcs/',
        icon: '/badges/linux-foundation.svg',
      },
    ] satisfies Credential[],
  },
  about: {
    paragraphs: [
      "I'm Ashley — Adelaide-based Mechatronics Engineering (Honours) student at Deakin with a 15-year background in healthcare and law. In Year 12 I built an award-winning RPG that ranked #1 in the state (SACE IT 2010). Software has always been my reflex.",
      'I spent over a decade in aged care leadership, quietly building internal tools to fix clinical and operational gaps because I couldn\'t help it. The last two years I returned fully: I started an investment company trading US equities and built the AI assistants, market intelligence platforms, and trading dashboards I needed to compete.',
      "Now I\'m formalising my engineering foundation while continuing to build at the intersection of AI, embedded systems, and high-stakes domains — aged-care technology, defence (AUKUS), and quantitative tooling. Recently engaged to Bradley. Still in Adelaide. Not going anywhere.",
      'Open to roles and collaborations where domain expertise meets technical skill.',
    ],
    sidebar: {
      location: 'Adelaide, South Australia',
      availability: [
        'Open to in-person Adelaide roles or remote roles. Not relocating.',
        'Australian citizen. Eligible for NV1/NV2 security clearance.',
      ],
      lookingFor:
        'Roles or collaborations at the intersection of AI, engineering, and meaningful application — particularly in healthcare/aged-care technology, defence, and financial systems.',
      memberships: [
        'Engineers Australia (Student Member)',
        'Australian Computer Society (Student Member)',
        'IEEE (Student Member, Computer Society, Robotics & Automation Society)',
        'Linux Australia',
        'Defence Industry SA',
        'Australasian Institute of Digital Health',
        'Australian Robotics & Automation Association',
      ],
    },
  },
  contact: {
    links: [
      { label: 'Email', value: 'me@ashleydenham.me', href: 'mailto:me@ashleydenham.me', icon: Mail },
      { label: 'GitHub', value: 'github.com/ashleydenham', href: 'https://github.com/ashleydenham', icon: Github },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/ashley-denham-35a3662b',
        href: 'https://www.linkedin.com/in/ashley-denham-35a3662b/',
        icon: Linkedin,
      },
    ] satisfies ContactLink[],
    note: 'Australian citizen. Eligible for NV1/NV2 security clearance. Open to Adelaide roles and remote work. Not relocating.',
  },
  footer: {
    build: 'Built with Next.js · Hosted on Vercel (live deploy triggered)',
    country:
      'I acknowledge the Kaurna people as the traditional owners of the land on which I live and work in Adelaide, and pay my respects to elders past and present.',
  },
} as const;
