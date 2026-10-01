export const siteUrl = "https://fergusruston.com";

export type Role = {
  company: string;
  title: string;
  location?: string;
  startYear: string;
  endYear: string;
  dates: string;
  highlights: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  handle: string;
  href: string;
};

export const profile = {
  firstName: "Fergus",
  lastName: "Ruston",
  title: "Senior Software Engineer",
  location: "London",
  email: "contact@fergusruston.com",
  pitch:
    "Software engineer. I build fast, accessible web products and delightful user experiences.",
  summary: [
    "Senior software engineer specialising in TypeScript, React and application development across web and mobile. I design and build applications across the full stack, from accessible, high-performance user interfaces through to backend services and APIs.",
    "I work with cross-functional, client-facing teams to deliver high-quality digital products for large organisations and established publishers. I take ownership from technical design and implementation through to deployment and ongoing development.",
    "I use AI-assisted development tools throughout the engineering workflow, from exploring solutions and writing code to testing, debugging and documentation. I work with tools including Claude Code and Codex, and approaches such as spec-driven development and BMAD to structure and guide AI-assisted development.",
  ],
};

export const fullName = `${profile.firstName} ${profile.lastName}`;

export const roles: Role[] = [
  {
    company: "Nearform",
    title: "Senior Software Engineer",
    location: "Remote",
    startYear: "2023",
    endYear: "Now",
    dates: "May 2023 – Present",
    highlights: [
      "Develop and ship production features for Virgin Media’s primary web platform, working with Next.js, React and TypeScript.",
      "Designed and delivered features across two large-scale React Native applications, O2 Priority and Travelex Money App.",
      "Work across the full TypeScript stack, from React and React Native front ends through to Node.js/Fastify backend services.",
      "Collaborate closely with product, design and engineering teams to deliver features from technical implementation through to production.",
    ],
  },
  {
    company: "Federatial",
    title: "Full Stack Contractor",
    location: "Remote",
    startYear: "2022",
    endYear: "2023",
    dates: "August 2022 – May 2023",
    highlights: [
      "Modernised the administration interface of a legacy platform using React and Tailwind CSS, substantially improving its user experience and maintainability.",
      "Extended and maintained an Express.js REST API, implementing improved permissions and user-management capabilities.",
      "Designed and implemented bulk create and update endpoints for core domain entities, improving the efficiency of administrative workflows.",
    ],
  },
  {
    company: "Pugpig",
    title: "Frontend Contractor",
    location: "London / Remote",
    startYear: "2020",
    endYear: "2022",
    dates: "September 2020 – August 2022",
    highlights: [
      "Developed websites and mobile applications for major publishers including New Scientist, The Independent and Tortoise Media.",
      "Led much of the Vue.js rewrite of the New Scientist mobile application, which is still in use today and has achieved a consistent 4.7 App Store rating.",
      "Developed bespoke publisher experiences on top of Pugpig’s underlying publishing platforms, adapting shared technology to the requirements of individual products.",
      "Worked across web and mobile codebases within a product-focused engineering environment.",
    ],
  },
  {
    company: "Federatial",
    title: "Full Stack Contractor",
    location: "Remote",
    startYear: "2017",
    endYear: "2020",
    dates: "November 2017 – September 2020",
    highlights: [
      "Architected and implemented the administration interface for a content management system using React, backed by an Express.js REST API.",
      "Worked directly with clients throughout the product lifecycle, from initial requirements and technical design through to deployment.",
      "Built and maintained a production system that continues to be used daily across multiple organisations.",
    ],
  },
  {
    company: "JustAddRed",
    title: "Full Stack Developer",
    location: "London",
    startYear: "2012",
    endYear: "2014",
    dates: "September 2012 – January 2014",
    highlights: [
      "Developed features for PetsPyjamas, a high-traffic e-commerce platform.",
      "Built internal tools to automate operational workflows, including a scheduler for automated Twitter quizzes and surveys.",
      "Developed a self-service banner creation tool enabling non-technical users to manage promotional content.",
      "Worked across the full stack using Django, JavaScript and CSS.",
    ],
  },
  {
    company: "Flooved",
    title: "Frontend Developer",
    location: "London",
    startYear: "2012",
    endYear: "2012",
    dates: "April – September 2012",
    highlights: [
      "Developed the pre-beta marketing website and contributed to the design of an online content distribution platform.",
      "Translated Photoshop designs into responsive production interfaces and reusable UI components.",
    ],
  },
  {
    company: "Empora Ltd",
    title: "Frontend Engineering Intern",
    location: "London",
    startYear: "2010",
    endYear: "2010",
    dates: "June – September 2010",
    highlights: [
      "Developed interactive digital advertising units from PSD designs, with a focus on cross-browser compatibility.",
    ],
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "CSS"] },
  {
    name: "Frontend",
    items: ["React", "React Native", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Fastify", "NestJS", "Django"],
  },
  {
    name: "AI & Development",
    items: [
      "Claude Code",
      "OpenAI Codex",
      "Spec-driven development",
      "BMAD",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    handle: "github.com/ergusto",
    href: "https://www.github.com/ergusto",
  },
  {
    label: "Dribbble",
    handle: "dribbble.com/ergusto",
    href: "https://dribbble.com/ergusto",
  },
];

export const careerStart = roles[roles.length - 1].startYear;
