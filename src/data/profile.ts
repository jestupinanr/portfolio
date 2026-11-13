// Single source of truth for portfolio content (see PORTFOLIO_UPDATE.md).
// Do not add facts that are not in that brief.

export const profile = {
  name: "Juan Diego Estupiñán",
  firstName: "Juan Diego",
  role: "Full Stack Software Engineer",
  subtitle: "Front-end focus · React · TypeScript · Next.js · Node.js",
  tagline:
    "I build fast, reliable web products with React, TypeScript and Next.js, from database and API to UI.",
  siteTitle: "Juan Diego Estupiñán – Full Stack Software Engineer",
  siteDescription:
    "Full stack software engineer with a front-end focus and 6+ years building production web apps with React, TypeScript, Next.js, Node.js and NestJS.",
  bio: "Full stack software engineer with a front-end focus and 6+ years of experience building production web applications, most recently with React, TypeScript, Next.js, Node.js and NestJS. I deliver features end to end with automated testing, CI/CD and safe releases, and I enjoy improving architecture and performance. Recognized in internal reviews for autonomy and high-quality pull requests; I mentor new teammates and use Claude Code daily for AI-assisted development.",
  status: "Available for work",
  tags: ["Software Engineer", "Colombia", "Remote"],
  location: "Bogotá, Colombia",
};

export const contact = {
  email: "Juan1diego3@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/juan-diego-estupi%C3%B1an-118481174/",
  github: "https://github.com/jestupinanr",
  whatsapp: "https://wa.me/573222634263",
  cv: "/cv/CV_Juan_Diego_Estupinan_Full_Stack_Engineer.pdf",
};

export const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "Promoted", label: "Frontend → Software Engineer at Unico", small: true },
];

export interface Role {
  title: string;
  dates: string;
  bullets: string[];
}
export interface Job {
  company: string;
  summary?: string;
  roles: Role[];
}

export const experience: Job[] = [
  {
    company: "Unico",
    summary: "Identity verification company",
    roles: [
      {
        title: "Software Engineer (promoted)",
        dates: "Jun 2025 – Oct 2026",
        bullets: [
          "Delivered full stack features from database to UI (per-country settings for Mexico and Brazil, process creation with email notifications, configurable privacy and help URLs).",
          "Built a webhooks configuration panel so clients could manage their own webhooks, plus the backend endpoint that returns its configuration.",
          "Created GitHub Actions pipelines for code quality, security vulnerabilities and file size checks, and deployments to DEV, UAT and production.",
          "Led a frontend architecture refactor of the most-used client portal (7 focused state modules, legacy code removed).",
          "Cut camera startup in the identity verification flow from ~10s to 4.5–6s on most tested devices.",
          "Mentored and onboarded every new engineer on the team.",
        ],
      },
      {
        title: "Frontend Engineer",
        dates: "Jul 2024 – May 2025",
        bullets: [
          "Migrated Dashboard 3.0 (client dashboard for Mexico) from React to Next.js, doing about 80–90% of the implementation.",
          "Improved Lighthouse Performance from 32 to 84 (desktop) and 33 to 88 (mobile).",
        ],
      },
    ],
  },
  {
    company: "Antpack",
    roles: [
      {
        title: "Software Developer",
        dates: "Mar 2022 – May 2024",
        bullets: [
          "Built e-commerce platforms, ERP systems and internal tools with React, TypeScript, Next.js, Node.js and NestJS.",
          "Integrated AWS (S3, Cognito), HubSpot, Google Authentication and payment gateways.",
          "Led an internal AI project that automatically answered social media messages (launch postponed before it went live).",
        ],
      },
    ],
  },
  {
    company: "Universidad Antonio Nariño (UAN)",
    roles: [
      {
        title: "Junior Developer",
        dates: "Feb 2020 – Apr 2022",
        bullets: [
          "Maintained and improved university web applications (JavaScript, jQuery, Bootstrap, JSP).",
        ],
      },
      {
        title: "Software Development Intern",
        dates: "Jul 2019 – Dec 2019",
        bullets: ["Technical documentation, UML diagrams, JSP/jQuery support."],
      },
    ],
  },
];

export type Tool =
  | "react" | "aws" | "express" | "mysql" | "nestjs" | "nextjs" | "nodejs"
  | "phaser" | "sql" | "tailwind" | "typescript" | "openai" | "html" | "css"
  | "javascript" | "postgresql" | "mongodb" | "mui" | "jest"
  | "githubactions" | "sentry" | "claude" | "git";

export const toolLabels: Record<Tool, string> = {
  react: "React", aws: "AWS", express: "Express", mysql: "MySQL",
  nestjs: "NestJS", nextjs: "Next.js", nodejs: "Node.js", phaser: "Phaser",
  sql: "SQL Server", tailwind: "Tailwind CSS", typescript: "TypeScript",
  openai: "OpenAI", html: "HTML5", css: "CSS3", javascript: "JavaScript",
  postgresql: "PostgreSQL", mongodb: "MongoDB", mui: "Material UI",
  jest: "Jest", githubactions: "GitHub Actions", sentry: "Sentry",
  claude: "Claude Code", git: "Git / GitHub",
};

// "sql" (SQL Server) and "phaser" kept on purpose (confirmed by Juan).
export const skills: Tool[] = [
  "react", "typescript", "nextjs", "javascript", "html", "css", "tailwind", "mui",
  "nodejs", "nestjs", "express",
  "postgresql", "mongodb", "mysql", "sql",
  "aws", "githubactions", "git", "sentry",
  "jest", "openai", "claude", "phaser",
];

export interface Project {
  title: string;
  description: string;
  image?: "truf" | "trufAdmin" | "ebloqs" | "winis" | "gws" | "brandforce";
  tools: Tool[];
  company?: string;
  type?: "small" | "big";
  href?: string; // no href => card is not clickable
  textOnly?: boolean; // no screenshot, text-only card
  isPrivate?: boolean;
}

// No project URLs available (confirmed by Juan): cards are not clickable.
export const projects: Project[] = [
  {
    title: "TRUF",
    description: "E-commerce store for pet food.",
    image: "truf",
    tools: ["react", "typescript", "nodejs", "tailwind", "express", "mysql", "aws"],
    company: "Antpack",
  },
  {
    title: "TRUF ADMIN",
    description:
      "ERP / admin dashboard to manage the TRUF e-commerce (orders, products, metrics).",
    image: "trufAdmin",
    tools: ["react", "typescript", "nodejs", "tailwind", "express", "mysql", "aws"],
    company: "Antpack",
    type: "small",
    isPrivate: true,
  },
  {
    title: "EBLOQS",
    description: "Landing page for an investment app.",
    image: "ebloqs",
    tools: ["nextjs", "typescript"],
    company: "Antpack",
  },
  {
    title: "WINIS",
    description: 'Browser game: build the tallest tower with "Winis" cubes.',
    image: "winis",
    tools: ["nextjs", "typescript", "phaser"],
    company: "Antpack",
  },
  {
    title: "GWS",
    description: "ERP for Global Wine.",
    image: "gws",
    tools: ["react", "typescript", "nodejs", "tailwind", "nestjs", "sql", "aws"],
    company: "Antpack",
    type: "small",
    isPrivate: true,
  },
  {
    title: "BRANDFORCE",
    description:
      "Internal AI tool that automatically answered social media messages, with a dashboard to configure brand tone, audience satisfaction and automated replies. (Launch postponed before going live.)",
    image: "brandforce",
    tools: ["nextjs", "typescript", "nodejs", "tailwind", "nestjs", "mysql", "aws", "openai"],
    company: "Antpack",
    type: "small",
    isPrivate: true,
  },
  {
    title: "UNICO",
    description:
      "Client portal and dashboards for an identity verification company: webhooks configuration, per-country settings, React → Next.js migration, CI/CD pipelines.",
    tools: ["react", "nextjs", "typescript", "githubactions"],
    company: "Unico",
    isPrivate: true, // confidential: no screenshots or client data
    textOnly: true,
  },
];
