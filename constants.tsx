import { Project, Experience, Certification, Education, Skill } from "./types";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Cpu, 
  Globe, 
  Terminal 
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: Code2 },
  { name: "CSS", category: "Frontend", icon: Code2 },
  { name: "JavaScript", category: "Frontend", icon: Code2 },
  { name: "React", category: "Frontend", icon: Layout },
  { name: "Tailwind CSS", category: "Frontend", icon: Layout },

  // Backend
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express", category: "Backend", icon: Server },
  { name: "PHP", category: "Backend", icon: Globe },
  { name: "Laravel", category: "Backend", icon: Globe },

  // Databases
  { name: "MySQL", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Database },

  // Core
  { name: "C++", category: "Core", icon: Code2 },

  // Tools
  { name: "Git", category: "Tools", icon: Terminal },
  { name: "GitHub", category: "Tools", icon: Terminal },
  { name: "VS Code", category: "Tools", icon: Settings },
];


export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Land Tax System",
    description: "A comprehensive system for managing land tax records, calculating dues, and generating reports. Built with a robust backend and responsive frontend.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web",
    githubLink: "https://github.com/Vroy4298/land-tax-system",
    image: "https://picsum.photos/seed/landtax/600/400"
  },
  {
    id: "2",
    title: "Meal Planner Web App",
    description: "An intuitive application helping users plan weekly meals, generate grocery lists, and track nutritional intake.",
    techStack: ["React", "Firebase", "API Integration"],
    category: "React",
    githubLink: "https://github.com/Vroy4298/cookbook",
    demoLink: "https://demo.com",
    image: "https://picsum.photos/seed/meal/600/400"
  },
  {
    id: "3",
    title: "Speed On Transport",
    description: "A logistics management application for tracking vehicle speed and transport schedules efficiently.",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "PHP",
    githubLink: "https://github.com/Vroy4298/transport-booking-system",
    image: "https://picsum.photos/seed/transport/600/400"
  },
  {
    id: "4",
    title: "Automatic Water Sensor Shed",
    description: "IoT solution that automatically closes a shed roof when rain is detected using Arduino and moisture sensors.",
    techStack: ["Arduino", "C++", "Sensors", "IoT"],
    category: "IoT",
    image: "https://picsum.photos/seed/arduino/600/400"
  },
  {
    id: "5",
    title: "Password Generator",
    description: "Secure password generator with customizable length, character types, and strength strength analysis.",
    techStack: ["React", "CSS3", "Algorithms"],
    category: "React",
    githubLink: "",  //link missing
    demoLink: "https://demo.com",
    image: "https://picsum.photos/seed/pass/600/400"
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Technical Intern",
    company: "Don Bosco Integrated Development Society",
    period: "Summer 2024",
    description: [
      "Assisted in maintaining and updating internal web portals.",
      "Collaborated with the team to troubleshoot hardware and network issues.",
      "Gained hands-on experience in real-world technical problem solving and documentation."
    ],
    skills: ["HTML/CSS", "Troubleshooting", "Networking Basics"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Developer Professional",
    issuer: "Oracle University",
    date: "2025 - 2027",
    url: "https://drive.google.com/uc?export=view&id=1J6yDXANuU1y8kQ8N0q1CoXESIJI_nSWP",
    description: "Certified in Oracle Cloud Infrastructure Developer tools, automation, and cloud-based deployment fundamentals."
  },
  {
    name: "Mastering Java for Application Development",
    issuer: "Lovely Professional University",
    date: "June 2025 - July 2025",
    url: "https://drive.google.com/uc?export=view&id=1lOZziBHt8ol_fIdpYSX-pwoFw5MLk4g_",
    description: "Completed 50 hours of advanced Java programming including OOP, JDBC, multithreading, and application development."
  },
  {
    name: "Basic Python Towards ML/AI",
    issuer: "CSE Pathshala",
    date: "Feb 2024 - Mar 2024",
    url: "https://drive.google.com/uc?export=view&id=1ISf4yfGlxR84nuPOPkrf84YR3tuLdWEi",
    description: "Learned Python fundamentals with ML-oriented topics including loops, functions, NumPy basics, and small ML tasks."
  },
  {
    name: "Privacy & Security in Online Social Media (NPTEL)",
    issuer: "IIIT Hyderabad · IIT Madras · NPTEL",
    date: "Jan 2025 - Apr 2025",
    url: "https://drive.google.com/uc?export=view&id=1v8dG-YZl05CAzne8afymnBF3r6ZQNMgs",
    description: "Explored privacy threats, OSINT, social graph analysis, and real-world attacks across online social media platforms."
  }
];




export const EDUCATION: Education[] = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "2023 - 2027 (Expected)",
    score: "CGPA: 7.8 (Current)",
    details: "Focusing on Web Development, Cloud Computing, and DSA."
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Kendriya Vidyalaya",
    period: "2023",
    score: "78%",
  },
  {
    degree: "Secondary (10th)",
    institution: "Kendriya Vidyalaya",
    period: "2021",
    score: "82%",
  }
];