import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Award, Users, Zap } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status: 'active' | 'in development';
  summary: string;
  longDescription: string;
  features: string[];
  tags: string[];
  githubUrl?: string;
  impact: string;
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
  status: 'current focus' | 'completed' | 'roadmap' | 'skill evidence';
  summary: string;
  href: string;
  icon: string;
  progress?: string;
};

export const site = {
  name: 'Ashley Denham',
  url: 'https://ashleydenham.me',
  location: 'Adelaide, South Australia',
  description: 'Adelaide-based Mechatronics Engineer building AI agents, custom robotics, and production trading infrastructure.',
  nav: [
    { label: 'Work', href: '#projects' },
    { label: 'Now', href: '#now' },
    { label: 'Credentials', href: '#signals' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  hero: {
    title: 'Ashley Denham',
    positioning: 'Mechatronics Engineer × AI × Systems Builder',
    intro: 'I design and build intelligent systems that operate in the real world — combining embedded hardware, local AI, and production infrastructure. Currently studying Mechatronics Engineering (Honours) at Deakin while running my own quantitative trading operation and developing robotics/AI products.',
    caption: 'Adelaide • Open to opportunities in AI, robotics, defence tech & aged-care innovation',
    image: '/avatar.jpg',
  },
  now: {
    title: 'What I’m focused on right now',
    lastUpdated: 'Updated 9 May 2026',
    items: [
      'Slothy — production-ready AI home security assistant (Claude + MCP + Raspberry Pi)',
      'Active NYSE/NASDAQ equities trading with custom AI-augmented tooling',
      'Bachelor of Mechatronics Engineering (Honours) — Deakin University',
      'AWS Cloud Practitioner + advanced cloud architecture studies',
    ],
  },
  projects: [
    {
      name: 'Slothy',
      status: 'in development',
      summary: 'Privacy-first AI home security & intelligent assistant running entirely on local hardware.',
      longDescription: 'Slothy is a complete local-first smart home security and AI assistant platform. It combines computer vision, sensor fusion, and conversational AI powered by Claude with custom MCP servers running on Raspberry Pi. All processing happens locally for maximum privacy — no cloud cameras, no data leaving your home.',
      features: [
        'Real-time camera & sensor monitoring with local object detection',
        'Conversational interface via Claude for natural queries ("Is anyone home?")',
        'Custom MCP protocol for secure local tool calling',
        'Zero cloud dependency — fully offline capable',
        'Mobile app + voice interface planned'
      ],
      tags: ['Claude API', 'MCP', 'Python', 'Raspberry Pi', 'Computer Vision'],
      githubUrl: 'https://github.com/ashleydenham/slothy',
      impact: 'Personal privacy-first alternative to commercial smart home security systems.',
    },
    {
      name: 'Hammy',
      status: 'active',
      summary: 'Modular Raspberry Pi robotics platform for rapid embedded systems and ROS 2 prototyping.',
      longDescription: 'Hammy is a versatile robotics development platform built around the Raspberry Pi 5. It features a 3D-printed modular chassis, integrated LiDAR, cameras, and motor control, with full ROS 2 support. Designed for fast iteration on autonomous navigation, manipulation, and edge AI experiments.',
      features: [
        'ROS 2 Humble + custom nodes for navigation & perception',
        'Modular sensor mounts and 3D-printable parts for rapid prototyping',
        'Real-time computer vision with depth sensing',
        'Low-level motor control and PID tuning library',
        'Used for Deakin coursework and personal R&D'
      ],
      tags: ['ROS 2', 'Raspberry Pi 5', 'Python', 'LiDAR', 'OpenCV'],
      githubUrl: 'https://github.com/ashleydenham/hammy',
      impact: 'Accelerates robotics learning and experimentation by providing a reliable, extensible base platform.',
    },
    {
      name: 'PinkPulse',
      status: 'active',
      summary: 'AI market intelligence engine that synthesizes 20+ data sources into actionable trading insights.',
      longDescription: 'PinkPulse is the brain behind my personal trading operation. It continuously ingests news, financial data, social sentiment, on-chain metrics, and macro indicators from 20+ APIs. Claude then performs real-time synthesis and anomaly detection, surfacing high-conviction opportunities before they become obvious to the broader market.',
      features: [
        'Multi-source data aggregation (Polygon, news APIs, alternative data)',
        'Claude-powered daily briefings and signal generation',
        'Anomaly detection and narrative tracking',
        'Backtesting framework for strategy validation',
        'Real-time dashboard with WebSocket updates'
      ],
      tags: ['FastAPI', 'PostgreSQL', 'Claude', 'Python', 'Data Engineering'],
      githubUrl: 'https://github.com/ashleydenham/pinkpulse',
      impact: 'Gives me a genuine information edge in fast-moving tech equities.',
    },
    {
      name: 'HamTrade',
      status: 'active',
      summary: 'Lightning-fast browser-based scalping & swing dashboard built for active US equities trading.',
      longDescription: 'HamTrade is my daily trading terminal. It combines real-time market data, custom momentum screeners, volume profile analysis, and one-click execution. Built for speed during volatile sessions — everything loads instantly and updates live via WebSockets.',
      features: [
        'Custom momentum & volume screeners with alert system',
        'Real-time Level 2 + time & sales integration',
        'Position tracking and P&L visualization',
        'Risk management overlays and position sizing calculator',
        'Dark theme optimized for long trading sessions'
      ],
      tags: ['TypeScript', 'WebSockets', 'Trading APIs', 'React', 'Tailwind'],
      githubUrl: 'https://github.com/ashleydenham/hamtrade',
      impact: 'My primary interface for executing high-frequency trades with clarity and speed.',
    },
    {
      name: 'Home Lab',
      status: 'active',
      summary: 'Enterprise-grade, zero-trust home infrastructure with GPU-accelerated ML capabilities.',
      longDescription: 'My production home lab runs Proxmox VE with TrueNAS storage, strict VLAN segmentation, and Tailscale for secure remote access from anywhere. It hosts self-hosted services, local LLMs, and GPU nodes for fine-tuning and inference — all without exposing anything to the public internet.',
      features: [
        'Proxmox cluster with high-availability VMs',
        'TrueNAS SCALE with ZFS and automated snapshots',
        'Tailscale + pfSense zero-trust networking',
        'Dedicated NVIDIA GPU nodes for local AI workloads',
        'Full observability with Prometheus + Grafana'
      ],
      tags: ['Proxmox', 'TrueNAS', 'Tailscale', 'NVIDIA', 'Linux'],
      githubUrl: 'https://github.com/ashleydenham/homelab',
      impact: 'Provides a secure, high-performance foundation for all my AI, trading, and self-hosted services.',
    },
    {
      name: 'Custom AI Models',
      status: 'active',
      summary: 'Local-first LLM inference, fine-tuning, and RAG pipeline running entirely on Apple Silicon.',
      longDescription: 'A complete local AI development environment using MLX on Apple Silicon Macs, LM Studio, and self-hosted vLLM endpoints. Used for domain-specific fine-tunes, private RAG systems, and agent development without sending any data to third parties.',
      features: [
        'MLX-optimized inference on M-series chips (extremely fast)',
        'Custom fine-tuning pipelines for domain-specific models',
        'Private RAG with local vector stores',
        'Agent frameworks (LangChain + custom tools)',
        'Quantized model deployment for edge devices'
      ],
      tags: ['MLX', 'PyTorch', 'Hugging Face', 'Ollama', 'LangChain'],
      githubUrl: 'https://github.com/ashleydenham/local-ai',
      impact: 'Enables private, high-performance AI development and deployment without vendor lock-in or data leakage.',
    },
  ] satisfies Project[],
  memberships: [
    {
      name: 'Engineers Australia',
      status: 'Student Member',
      summary: 'Pathway to CPEng and professional engineering recognition.',
      href: 'https://www.engineersaustralia.org.au/membership/student',
      icon: '/badges/engineers-australia.svg',
    },
    {
      name: 'Australian Computer Society',
      status: 'Student Member',
      summary: 'Australia’s leading IT professional body.',
      href: 'https://www.acs.org.au/join-acs.html',
      icon: '/badges/acs.svg',
    },
    {
      name: 'IEEE + Robotics Society',
      status: 'Student Member',
      summary: 'International engineering network with strong Adelaide presence.',
      href: 'https://students.ieee.org/',
      icon: '/badges/ieee.svg',
    },
    {
      name: 'Linux Australia',
      status: 'Member',
      summary: 'Open-source community and PyCon AU organiser.',
      href: 'https://linux.org.au/',
      icon: '/badges/linux-australia.svg',
    },
    {
      name: 'Defence Industry SA',
      status: 'Industry Network',
      summary: 'AUKUS supply chain and Adelaide defence ecosystem.',
      href: 'https://defencesa.com/',
      icon: '/badges/defence-sa.svg',
    },
  ] satisfies Membership[],
  credentials: {
    active: [
      {
        name: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services',
        status: 'current focus',
        summary: 'Cloud fundamentals, security, architecture & pricing.',
        href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
        icon: '/badges/aws.svg',
        progress: 'In progress — exam booked',
      },
      {
        name: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI',
        status: 'roadmap',
        summary: 'Andrew Ng’s practical ML foundation.',
        href: 'https://www.deeplearning.ai/courses/machine-learning-specialization/',
        icon: '/badges/deeplearning-ai.png',
      },
    ],
    completed: [
      {
        name: 'CS50: Introduction to Computer Science',
        issuer: 'HarvardX / edX',
        status: 'completed',
        summary: 'Algorithms, data structures, C, Python, SQL, JS.',
        href: 'https://www.edx.org/cs50',
        icon: '/badges/harvardx.svg',
      },
    ],
    professional: [
      {
        name: 'Engineers Australia',
        issuer: 'Engineers Australia',
        status: 'skill evidence',
        summary: 'Student pathway toward Chartered Professional Engineer.',
        href: 'https://www.engineersaustralia.org.au/',
        icon: '/badges/engineers-australia.svg',
      },
      {
        name: 'Australian Computer Society',
        issuer: 'ACS',
        status: 'skill evidence',
        summary: 'Recognised IT professional membership.',
        href: 'https://www.acs.org.au/',
        icon: '/badges/acs.svg',
      },
    ],
  },
  about: {
    paragraphs: [
      "I'm Ashley — a Mechatronics Engineering (Honours) student at Deakin University with 15+ years of real-world experience across healthcare leadership, law, and quantitative trading. I build systems that actually work in high-stakes environments.",
      'After winning the South Australian SACE IT State Award in Year 12 for an original RPG, I spent a decade in aged care quietly building internal tools to fix broken workflows. The last two years I went all-in on software again: I founded an investment company and developed the entire AI + trading stack I use every day.',
      "Now I’m combining formal engineering training with everything I’ve already built — focusing on the intersection of AI, embedded systems, robotics, and domains where reliability and domain knowledge matter most: aged-care technology, defence (AUKUS), and financial infrastructure.",
      'Recently engaged to Bradley. Based in Adelaide for life. Open to roles and collaborations that value both technical depth and real-world context.',
    ],
    sidebar: {
      location: 'Adelaide, South Australia',
      availability: [
        'Open to Adelaide in-person or remote roles',
        'Australian citizen — NV1/NV2 security clearance eligible',
      ],
      lookingFor: 'Opportunities at the intersection of AI, engineering, and meaningful real-world impact — particularly healthcare tech, defence, and financial systems.',
      memberships: [
        'Engineers Australia (Student Member)',
        'Australian Computer Society (Student Member)',
        'IEEE (Student + Robotics & Automation)',
        'Linux Australia',
        'Defence Industry SA',
      ],
    },
  },
  contact: {
    links: [
      { label: 'Email', value: 'me@ashleydenham.me', href: 'mailto:me@ashleydenham.me', icon: Mail },
      { label: 'GitHub', value: 'github.com/ashleydenham', href: 'https://github.com/ashleydenham', icon: Github },
      { label: 'LinkedIn', value: 'linkedin.com/in/ashley-denham-35a3662b', href: 'https://www.linkedin.com/in/ashley-denham-35a3662b/', icon: Linkedin },
    ] satisfies ContactLink[],
    note: 'Australian citizen • NV1/NV2 eligible • Adelaide or remote • Not relocating',
  },
  footer: {
    build: 'Built with Next.js • Hosted on Vercel • Last updated 9 May 2026',
    country: 'I acknowledge the Kaurna people as the traditional owners of the land on which I live and work in Adelaide.',
  },
} as const;
