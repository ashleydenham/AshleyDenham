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
    positioning: 'Adelaide-based engineer building AI, embedded systems, and trading infrastructure',
    intro:
      "I'm a Mechatronics Engineering student at Deakin, returning to software after fifteen years in healthcare and law. I build AI agents, custom robotics, and the trading systems I run my investment company on.",
    caption: 'Currently studying Mechatronics Engineering (Honours) at Deakin University',
    image: '/avatar.jpg',
  },
  now: {
    title: 'Now — May 2026',
    lastUpdated: 'Last updated: 8 May 2026',
    items: [
      'Building on Slothy — smart home security monitoring & AI assistant',
      'Working on the NYSE/NASDAQ — US equities, primarily technology stocks',
      'Studying Bachelor of Mechatronics Engineering (Honours), Deakin University',
      'Working through AWS Cloud Practitioner certification',
      'Reading: [current book]',
    ],
  },
  projects: [
    {
      name: 'Slothy',
      status: 'in development',
      summary: 'Personal AI assistant with smart home security monitoring, built on Claude API and custom MCP servers.',
      tags: ['Claude API', 'MCP', 'Python'],
    },
    {
      name: 'Hammy',
      status: 'active',
      summary: 'Custom Raspberry Pi robotics platform for embedded systems experimentation and ROS prototyping.',
      tags: ['Raspberry Pi', 'ROS', 'Python'],
    },
    {
      name: 'PinkPulse',
      status: 'active',
      summary: 'AI-powered market intelligence platform aggregating 20+ data sources with Claude API synthesis.',
      tags: ['FastAPI', 'Next.js', 'PostgreSQL'],
    },
    {
      name: 'HamTrade',
      status: 'active',
      summary: 'Browser-based scalping dashboard for active US equities trading, with custom screeners and momentum alerts.',
      tags: ['TypeScript', 'Real-time data', 'Trading APIs'],
    },
    {
      name: 'Home Lab',
      status: 'active',
      summary: 'Secured multi-node infrastructure with VLAN segmentation, zero-trust access, and ML-capable compute.',
      tags: ['Proxmox', 'Tailscale', 'TrueNAS'],
    },
    {
      name: 'Custom AI Models',
      status: 'active',
      summary: 'Local inference and fine-tuning across LM Studio, MLX, and self-hosted model deployments on Apple Silicon.',
      tags: ['PyTorch', 'MLX', 'Hugging Face'],
    },
  ] satisfies Project[],
  memberships: [
    {
      name: 'Engineers Australia',
      status: 'Student Member',
      summary: 'Free while studying. Essential engineering pathway; keeps Graduate membership and CPEng visible as the long-term track.',
      href: 'https://www.engineersaustralia.org.au/membership/student',
      icon: '/badges/engineers-australia.svg',
    },
    {
      name: 'Australian Computer Society',
      status: 'Student Member',
      summary: "Australia's main professional body for IT and computing; recognised by employers across technology roles.",
      href: 'https://www.acs.org.au/join-acs.html',
      icon: '/badges/acs.svg',
    },
    {
      name: 'IEEE',
      status: 'Student Member',
      summary: 'International engineering society with an Adelaide section; relevant add-ons include IEEE Computer Society and Robotics & Automation Society.',
      href: 'https://students.ieee.org/membership-benefits/student-membership-benefits/',
      icon: '/badges/ieee.svg',
    },
    {
      name: 'Linux Australia',
      status: 'Member',
      summary: 'Free open-source community body; useful for PyCon AU, local Linux/open-source networks, and public technical engagement.',
      href: 'https://linux.org.au/membership',
      icon: '/badges/linux-australia.svg',
    },
    {
      name: 'Defence Industry SA',
      status: 'Industry network',
      summary: 'Local defence industry network for Adelaide events, AUKUS supply-chain briefings, and contracting opportunities.',
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
        summary: 'Computer science foundation: algorithms, data structures, C, Python, SQL, JavaScript, and final project practice.',
        href: 'https://www.edx.org/cs50',
        icon: '/badges/harvardx.svg',
      },
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        status: 'current focus',
        summary: 'Near-term cloud baseline for AWS concepts, security, pricing, architecture, and services.',
        href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
        icon: '/badges/aws.svg',
      },
      {
        name: 'AWS Certified Solutions Architect — Associate',
        issuer: 'Amazon Web Services',
        status: 'roadmap',
        summary: 'Architecture credential for secure, resilient, high-performing, and cost-aware AWS systems.',
        href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        icon: '/badges/aws.svg',
      },
      {
        name: 'Certified Kubernetes Application Developer (CKAD)',
        issuer: 'Linux Foundation / CNCF',
        status: 'roadmap',
        summary: 'Performance-based Kubernetes credential for deploying and maintaining cloud-native applications.',
        href: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
        icon: '/badges/kubernetes.svg',
      },
      {
        name: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI / Coursera',
        status: 'roadmap',
        summary: 'Andrew Ng-led ML foundation covering supervised learning, unsupervised learning, recommender systems, and practical ML advice.',
        href: 'https://www.deeplearning.ai/courses/machine-learning-specialization/',
        icon: '/badges/deeplearning-ai.png',
      },
      {
        name: 'AWS Certified Machine Learning — Specialty',
        issuer: 'Amazon Web Services',
        status: 'legacy reference',
        summary: 'Retired AWS ML credential; kept as a reference point for the production ML skills it covered.',
        href: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
        icon: '/badges/aws.svg',
      },
      {
        name: 'CompTIA Security+',
        issuer: 'CompTIA',
        status: 'roadmap',
        summary: 'Vendor-neutral security credential relevant to defence-adjacent and infrastructure roles.',
        href: 'https://www.comptia.org/en-us/certifications/security/',
        icon: '/badges/comptia.svg',
      },
      {
        name: 'Databricks Certified Generative AI Engineer Associate',
        issuer: 'Databricks',
        status: 'roadmap',
        summary: 'LLM and RAG engineering credential for Databricks-native generative AI systems.',
        href: 'https://www.databricks.com/learn/certification/generative-ai-engineer-associate',
        icon: '/badges/databricks.svg',
      },
    ] satisfies Credential[],
    languageCredentials: [
      {
        name: 'Python — PCAP',
        issuer: 'Python Institute',
        status: 'roadmap',
        summary: 'Associate Python credential covering OOP, modules, exceptions, generators, files, and multi-module programs.',
        href: 'https://pythoninstitute.org/certification/pcap-certification-associate/',
        icon: '/badges/python-institute.svg',
      },
      {
        name: 'SQL — Data Analyst Associate',
        issuer: 'Databricks',
        status: 'roadmap',
        summary: 'SQL and analytics credential for Databricks query, reporting, and data workflow capability.',
        href: 'https://www.databricks.com/learn/certification/data-analyst-associate',
        icon: '/badges/sql.svg',
      },
      {
        name: 'TypeScript / JavaScript — Meta Front-End Developer',
        issuer: 'Meta / Coursera',
        status: 'roadmap',
        summary: 'Front-end professional certificate covering JavaScript, React, version control, and portfolio-ready web applications.',
        href: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        icon: '/badges/meta.svg',
      },
      {
        name: 'Bash / Linux shell — LFCS',
        issuer: 'Linux Foundation',
        status: 'roadmap',
        summary: 'Performance-based Linux administration credential for real shell, networking, storage, and systems work.',
        href: 'https://training.linuxfoundation.org/certification/lfcs/',
        icon: '/badges/linux-foundation.svg',
      },
      {
        name: 'C / C++ — CPA',
        issuer: 'C++ Institute',
        status: 'roadmap',
        summary: 'Associate C/C++ programming pathway for systems, embedded, and performance-focused fundamentals.',
        href: 'https://cppinstitute.org/cpa',
        icon: '/badges/cpp-institute.svg',
      },
      {
        name: 'Rust — project evidence',
        issuer: 'Rust Project',
        status: 'skill evidence',
        summary: 'No formal industry-standard Rust certification; best demonstrated through Rust by Example completion and a public GitHub project.',
        href: 'https://www.rust-lang.org/',
        icon: '/badges/rust.svg',
      },
    ] satisfies Credential[],
  },
  about: {
    paragraphs: [
      "I'm Ashley. Adelaide-based, born and raised here, not going anywhere.",
      'In Year 12, I built an RPG game — thousands of lines of code, the kind of obsessive teenage project that takes over your weekends. It won the South Australian SACE State Award for Information Technology in 2010, ranking number one in the state across the entire SACE system that year. Software was my first love.',
      'I went into law instead. Then nursing — drawn to it by my own experiences of healthcare, and a conviction that systems can be better than they are. I spent over a decade working in aged care, including in leadership roles, with particular focus on dementia care and the welfare of older Australians.',
      "The whole time, I never stopped building. In law, I was the one finding ways to use technology where colleagues hadn't thought to. In nursing, I built my own systems for the gaps that existed in clinical workflows and aged-care operations — quietly, on the side, because I couldn't help it. Software stayed my hobby and my reflex. The field kept evolving, and I kept paying attention.",
      'The last two years pulled me back in properly. I started my own investment company and now actively trade US equities on the NYSE and NASDAQ — primarily technology stocks. To do that work well, I built my own AI assistants, market intelligence systems, and trading tooling. Then I realised this is just where I belong.',
      "I'm now studying Bachelor of Mechatronics Engineering (Honours) at Deakin University. The plan is engineering qualification on top of the technical practice I've already built — combining the healthcare, legal, and trading backgrounds with formal engineering training. I'm particularly interested in the intersection of AI, embedded systems, and high-stakes domains: aged-care technology, defence (AUKUS supply chain), and quantitative tooling.",
      "The highlight of 2026 so far has been getting engaged to Bradley. We met early in the year and the world looks different from here. We're building a life in Adelaide.",
    ],
    sidebar: {
      location: 'Adelaide, South Australia',
      availability: [
        'Open to in-person Adelaide roles or remote roles. Not relocating.',
        'Australian citizen. Eligible for NV1/NV2 security clearance.',
      ],
      lookingFor:
        'Roles or collaborations at the intersection of AI, engineering, and meaningful application — particularly in healthcare and aged-care technology, defence, and financial systems where domain knowledge matters as much as technical skill.',
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
    build: 'Built with Next.js · Hosted on Vercel',
    country:
      'I acknowledge the Kaurna people as the traditional owners of the land on which I live and work in Adelaide, and pay my respects to elders past and present.',
  },
} as const;
