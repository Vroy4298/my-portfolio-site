import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "All" | "Web" | "React" | "Node" | "IoT" | "PHP";
  githubLink?: string;
  demoLink?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  category: "Frontend" | "Backend" | "Database" | "Core" | "Tools";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}