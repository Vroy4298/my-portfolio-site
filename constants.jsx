import {
    Code2,
    Database,
    Layout,
    Server,
    Settings,
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

export const SKILLS = [
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


export const PROJECTS = [
    {
        id: "1",
        title: "Land Tax System",
        description: "A production-ready Land Tax Management System with secure user authentication, property management, automated tax calculation, online payments, receipt generation, and email-based password recovery. Deployed on Vercel and Render.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        category: "Web",
        githubLink: "https://github.com/Vroy4298/land-tax-system",
        image: "/land_tax_preview.png",
        isLatest: true,
    },
    {
        id: "2",
        title: "LeaveLoop",
        description: "A comprehensive full-stack HR platform to streamline employee leave applications and reimbursement requests. Features role-based access control, leave balance tracking, admin approvals, and a beautiful role-aware dashboard.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        category: "Web",
        githubLink: "https://github.com/Vroy4298/LeaveLoop",
        image: "/leaveloop_preview.png",
    },
    {
        id: "3",
        title: "Transport Booking System",
        description: "A full-stack Laravel web app with PostgreSQL & Tailwind CSS for online ride booking, admin dashboard management, real-time email notifications, booking charts, Excel export, and live deployment on Render via Docker.",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Docker"],
        category: "PHP",
        githubLink: "https://github.com/Vroy4298/transport-booking-system",
        image: "/transport_preview.png",
    },
];

export const EXPERIENCE = [
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

export const CERTIFICATIONS = [
    {
        name: "Oracle Cloud Infrastructure 2025 Developer Professional",
        issuer: "Oracle University",
        date: "2025 - 2027",
        url: "https://drive.google.com/file/d/1J6yDXANuU1y8kQ8N0q1CoXESIJI_nSWP/view?usp=sharing",
        description: "Certified in Oracle Cloud Infrastructure Developer tools, automation, and cloud-based deployment fundamentals."
    }
];

export const CERTIFICATES = [
    {
        name: "Mastering Java for Application Development",
        issuer: "Lovely Professional University",
        date: "June 2025 - July 2025",
        url: "https://drive.google.com/file/d/1lOZziBHt8ol_fIdpYSX-pwoFw5MLk4g_/view?usp=sharing",
        description: "Completed 50 hours of advanced Java programming including OOP, JDBC, multithreading, and application development."
    },
    {
        name: "Basic Python Towards ML/AI",
        issuer: "CSE Pathshala",
        date: "Feb 2024 - Mar 2024",
        url: "https://drive.google.com/file/d/1ISf4yfGlxR84nuPOPkrf84YR3tuLdWEi/view?usp=sharing",
        description: "Learned Python fundamentals with ML-oriented topics including loops, functions, NumPy basics, and small ML tasks."
    },
    {
        name: "Privacy & Security in Online Social Media (NPTEL)",
        issuer: "IIIT Hyderabad · IIT Madras · NPTEL",
        date: "Jan 2025 - Apr 2025",
        url: "https://drive.google.com/file/d/1v8dG-YZl05CAzne8afymnBF3r6ZQNMgs/view?usp=sharing",
        description: "Explored privacy threats, OSINT, social graph analysis, and real-world attacks across online social media platforms."
    }
];

export const EDUCATION = [
    {
        degree: "B.Tech Computer Science & Engineering",
        institution: "Lovely Professional University",
        period: "2023 - 2027 (Expected)",
        score: "",
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
