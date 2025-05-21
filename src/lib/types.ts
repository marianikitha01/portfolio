import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  codeLink?: string;
  liveDemoLink?: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl?: string;
  logoHint?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string[];
  logoUrl?: string;
  logoHint?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: LucideIcon; 
  iconSvg?: React.ReactNode; // For custom SVG icons
  proficiency?: number; // Optional: 1-100
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    // phone?: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  // content: string; // For full blog post page if implemented
}
