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
    // ── Frontend ──
    {
        name: "HTML", category: "Frontend",
        symbol: "⟨/⟩", color: "#e34c26",
        proficiency: 95,
        projects: ["Land Tax System", "LeaveLoop", "Transport Booking System"],
        desc: "Solid semantic HTML5 markup — forms, accessibility, and structure across all my projects."
    },
    {
        name: "CSS", category: "Frontend",
        symbol: "✦", color: "#264de4",
        proficiency: 88,
        projects: ["Land Tax System", "LeaveLoop"],
        desc: "Custom layouts, animations, and responsive design using Flexbox, Grid, and media queries."
    },
    {
        name: "JavaScript", category: "Frontend",
        symbol: "JS", color: "#f7df1e",
        proficiency: 85,
        projects: ["Land Tax System", "LeaveLoop", "Transport Booking System"],
        desc: "ES6+ features, async/await, DOM manipulation, and REST API integration across all projects."
    },
    {
        name: "React", category: "Frontend",
        symbol: "⚛", color: "#61dafb",
        proficiency: 87,
        projects: ["Land Tax System", "LeaveLoop"],
        desc: "Component-based UIs, hooks, React Router, Context API, and state management for real-world apps."
    },
    {
        name: "Tailwind CSS", category: "Frontend",
        symbol: "▲", color: "#38bdf8",
        proficiency: 90,
        projects: ["LeaveLoop", "Transport Booking System"],
        desc: "Rapid UI development with utility-first Tailwind — dark mode, custom themes, responsive grids."
    },

    // ── Backend ──
    {
        name: "Node.js", category: "Backend",
        symbol: "⬡", color: "#68a063",
        proficiency: 82,
        projects: ["Land Tax System", "LeaveLoop"],
        desc: "RESTful APIs, middleware, JWT auth, and file handling using Express on Node.js runtime."
    },
    {
        name: "Express", category: "Backend",
        symbol: "Ex", color: "#ffffff",
        proficiency: 80,
        projects: ["Land Tax System", "LeaveLoop"],
        desc: "Built clean MVC-structured REST APIs with authentication, validation, and error handling."
    },
    {
        name: "PHP", category: "Backend",
        symbol: "php", color: "#8892bf",
        proficiency: 75,
        projects: ["Transport Booking System"],
        desc: "Server-side scripting and backend logic for the Transport Booking System via Laravel."
    },
    {
        name: "Laravel", category: "Backend",
        symbol: "🔺", color: "#ff2d20",
        proficiency: 78,
        projects: ["Transport Booking System"],
        desc: "Full MVC app with Eloquent ORM, Blade templates, email notification, and Docker deployment."
    },

    // ── Database ──
    {
        name: "MySQL", category: "Database",
        symbol: "⊞", color: "#00758f",
        proficiency: 80,
        projects: ["Transport Booking System"],
        desc: "Relational schema design, complex queries, foreign keys, and PostgreSQL integration."
    },
    {
        name: "MongoDB", category: "Database",
        symbol: "🍃", color: "#47a248",
        proficiency: 83,
        projects: ["Land Tax System", "LeaveLoop"],
        desc: "Schema design with Mongoose, CRUD operations, aggregation, and indexing for NoSQL data."
    },

    // ── Core ──
    {
        name: "C++", category: "Core",
        symbol: "C⁺⁺", color: "#00599c",
        proficiency: 78,
        projects: ["DSA Practice", "Academic Projects"],
        desc: "Used for data structures, algorithm problem solving, and competitive programming practice."
    },

    // ── Tools ──
    {
        name: "Git", category: "Tools",
        symbol: "⌥", color: "#f05032",
        proficiency: 88,
        projects: ["Land Tax System", "LeaveLoop", "Transport Booking System"],
        desc: "Branching, rebasing, conflict resolution, and version control across all project repositories."
    },
    {
        name: "GitHub", category: "Tools",
        symbol: "◎", color: "#ffffff",
        proficiency: 90,
        projects: ["Land Tax System", "LeaveLoop", "Transport Booking System"],
        desc: "Pull requests, GitHub Actions for CI/CD, Pages deployment, and project collaboration."
    },
    {
        name: "VS Code", category: "Tools",
        symbol: "⌨", color: "#007acc",
        proficiency: 95,
        projects: ["All Projects"],
        desc: "Primary editor with extensions for debugging, linting, Prettier, and IntelliSense workflows."
    },
];


export const PROJECTS = [
    {
        id: "4",
        title: "Wall Calendar",
        description: "A production-quality, interactive wall calendar component with date range selection, integrated notes, monthly themes, and dynamic colour theming. Fully responsive with Framer Motion animations.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        category: "Web",
        githubLink: "https://github.com/Vroy4298/Wall-Calendar",
        demoLink: "https://wall-calendar-hazel-five.vercel.app",
        image: "/wall_calendar_preview.png",
        isLatest: true,
    },
    {
        id: "1",
        title: "Land Tax System",
        description: "A production-ready Land Tax Management System with secure user authentication, property management, automated tax calculation, online payments, receipt generation, and email-based password recovery. Deployed on Vercel and Render.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        category: "Web",
        githubLink: "https://github.com/Vroy4298/land-tax-system",
        image: "/land_tax_preview.png",
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
