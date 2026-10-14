export type ProjectCategory = "Work & Money" | "Life Essentials" | "Community" | "Play & Learn";

export interface Project {
  name: string;
  description: string;
  url: string;
  category: ProjectCategory;
  tech: string[];
  tags?: string[];
  flagship?: boolean;
  pricing?: string;
  access?: string;
  problem?: string;
  built?: string;
  status?: string;
  cta?: { label: string; url: string };
  microsoftStoreUrl?: string;
  googlePlayUrl?: string;
}

export const profile = {
  name: "Ma. Noriña G. Hatamosa",
  seo: {
    title:
      "Ma. Noriña G. Hatamosa | Finance & Performance Professional & AI-assisted Web App Builder",
    description:
      "Finance and performance professional with experience across UN agencies, international NGOs, and the private sector. Combining accounting, finance, audit, procurement, and operations experience with AI-assisted development to design and deploy practical web applications.",
    ogImage: "/icons/icon-512.png",
  },
  hero: {
    eyebrow: "Accounting & Finance · AI-assisted Product Builder",
    headline: "Turning accounting and business experience into practical digital solutions.",
    subheadline:
      "Finance and performance professional with experience in accounting, finance, audit, procurement, and administration across United Nations agencies, international NGOs, and the private sector. I use AI-assisted development to make work more efficient, improve analysis and visualization, and simplify everyday tasks, designing, building, and deploying practical digital tools and web applications.",
    ctaPrimary: "View résumé",
    ctaSecondary: "Explore projects",
  },
  // Stats strip is hidden while this list is empty. Add { label, value } items to show it again.
  stats: [] as { label: string; value: string }[],
  photo: {
    src: "/hatamosa.png",
    alt: "Portrait of Ma. Noriña G. Hatamosa",
  },
  about: {
    heading: "About",
    bio: [
      "I am a finance professional with experience in accounting, finance, audit, procurement, and administration across United Nations agencies, international NGOs, and the private sector.",
      "I have expanded my skill set into AI-assisted product development. Using modern tools such as Lovable, ChatGPT, Claude, Gemini, GitHub, Vercel, and Make for workflow automation, I independently design, build, and deploy production-ready web applications.",
      "Rather than positioning myself as a traditional software engineer, I start from the business problem. Hands-on finance and operations work taught me where time gets lost, where numbers are hard to see, and where routine tasks pile up. I turn those gaps into practical tools, from dashboards to workflow automations, that make work more efficient, sharpen analysis and visualization, and simplify everyday tasks.",
    ],
  },
  timeline: [
    {
      role: "Finance and Performance Associate",
      org: "UNOPS",
      period: "12/24 – present",
    },
    {
      role: "Administrative and Finance Associate",
      org: "UNHCR",
      period: "09/16 – 04/21",
    },
    {
      role: "Programmme Assistant",
      org: "UNDP",
      period: "05/15 – 08/16",
    },
    {
      role: "Finance Officer, UNDP Projects",
      org: "Climate Change Commission",
      period: "10/12 – 05/14",
    },
    { role: "Procurement Focal Person", org: "UNFPA", period: "03/12 – 09/12" },
    { role: "Consultant", org: "WWF & PeaceTech Inc.", period: "08/10 – 12/11" },
    {
      role: "Finance Assistant",
      org: "UNFPA",
      period: "01/06 – 01/07",
    },
    { role: "Accountant", org: "General Electric", period: "04/04 – 12/05" },
  ],
  projectCategories: [
    "All",
    "Work & Money",
    "Life Essentials",
    "Community",
    "Play & Learn",
  ] as const,
  projects: [
    {
      name: "PlanVariance",
      description:
        "Budgeting & BVA tool. Set a budget by category across any number of periods, log actuals as they close, and PlanVariance shows a projected total (actuals-to-date plus remaining budget) and flags variance by category — all in one dashboard. CSV import/export included. Fully rules-based, no AI. Runs entirely in your browser — your data is never sent to a server.",
      url: "https://planvariance-azure.vercel.app/",
      category: "Work & Money",
      pricing: "Free — no paywall. No account required.",
      access: "Free — no paywall. No account required.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    },
    {
      name: "TheNextBit",
      description:
        "Daily anti-procrastination coach. Take a 90-second quiz to find your procrastination type — Overwhelmed, Perfectionist, Avoider, Distracted, or Depleted — then follow a personalized 14-day track of small daily actions, with a streak tracker to keep you going.",
      url: "https://thenextbit.dashcraftco.com/",
      category: "Life Essentials",
      access: "Free — no paywall. No account required.",
      tech: ["HTML", "CSS", "JavaScript", "PWA", "Vercel"],
    },
    {
      name: "DinkLeague",
      description:
        "DinkLeague gives casual pickleball groups one shared, live source of truth. Real Firebase Auth (Google + email) with proper error handling, a friend-request system, match scheduling with live accept/decline, a live on-court scorekeeper, opponent score verification, a DUPR-style leaderboard, and cross-device notifications delivered via Firestore — with real Firebase Cloud Messaging wired up for background push.",
      url: "https://dinkleague.ai.studio",
      category: "Community",
      status: "BETA",
      access: "Free — sign in with Google or email, or use a one-tap demo profile. No account required to preview. Currently in closed testing.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Firebase Auth",
        "Cloud Firestore",
        "Cloud Functions",
        "Firebase Cloud Messaging",
      ],
    },
    {
      name: "PinasWiz",
      description: "Philippine geography game.",
      url: "https://pinaswiz.dashcraftco.com",
      category: "Play & Learn",
      pricing: "Free",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel", "PWA"],
      microsoftStoreUrl: "https://apps.microsoft.com/detail/9P7HXJQLHHTL?referrer=appbadge&mode=full",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gayle.pinaswiz.twa",
    },
  ] as Project[],
  skillGroups: [
    {
      title: "Core Competencies",
      items: [
        "Grant & Donor Fund Management",
        "Financial Reporting & Analysis",
        "ERP",
        "Reconciliation & Closing",
        "Tax, Audit & Compliance (IPSAS, IFRS, PFRS, US GAAP)",
        "Internal Controls & Process Improvement",
        "Procurement & Contract Management",
        "Data Visualization & Business Intelligence",
      ],
    },
    {
      title: "Tech Stack",
      items: [
        "Lovable",
        "ChatGPT",
        "Claude",
        "Gemini",
        "GitHub",
        "Vercel",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zapier",
        "Make",
        "Google AI Studio",
        "Google Apps Script",
      ],
    },
    {
      title: "Tools",
      items: [
        "Windows",
        "MacOS",
        "MS 365/Office (Excel, Word, PowerPoint, Power Query)",
        "Power BI",
        "Asana",
        "Notion",
        "Google Workspace/Suite",
        "Zoom",
        "Slack",
        "GoTo",
        "Guesty",
        "Ramp",
        "Dropbox",
        "Canva",
        "Caseware",
        "SAP",
        "GreatPlains",
        "Oracle",
        "SunSystem",
        "OneUNOPS",
        "PeopleSoft",
        "QuickBooks",
      ],
    },
    {
      title: "Languages",
      items: ["English (C1)", "Spanish (A2)", "French (A1, learning)"],
    },
  ],
  certifications: [
    { name: "Certified Intuit ProAdvisor QuickBooks L1" },
    { name: "Lean Six Sigma Yellow" },
    { name: "PRINCE2 Foundation" },
    { name: "IOSH Managing Safely" },
  ] as { name: string; url?: string }[],
  cpd: {
    heading: "Continuing Professional Development",
    courses: [
      {
        name: "Career Boost with Power BI and AI",
        url: "https://test.careerboostwithpowerbi.com/validation?code=B40E7C58",
      },
      {
        name: "Forensic Accounting and Fraud Examination",
        url: "https://www.coursera.org/account/accomplishments/verify/HYWK2HV72DCA",
      },
      {
        name: "Financial Analysis of Organizations",
        url: "https://www.coursera.org/account/accomplishments/verify/4GB9LJE5K3H9",
      },
      {
        name: "Introduction to Accounting Data Analytics and Visualization",
        url: "https://www.coursera.org/account/accomplishments/verify/B74DTQ9AVLMT",
      },
      {
        name: 'Introduction to Financial Analysis - The "Why?"',
        url: "https://www.coursera.org/account/accomplishments/verify/GSVTFHRFQGRG",
      },
    ],
  },
  education: {
    heading: "Education",
    entries: [
      {
        name: "Bachelor of Science in Accountancy, Notre Dame of Kidapawan College, Philippines",
        url: "https://ndkc.edu.ph/",
      },
    ],
  },
  resume: {
    heading: "Résumé",
    note: "The full career history, with detail beyond the condensed timeline above, lives in the résumé PDF.",
    // Résumé is not connected yet. Once the updated CV is ready, drop the PDF into /public
    // (e.g. public/resume.pdf) and set url: "/resume.pdf" — the buttons enable automatically.
    url: null as string | null,
  },
  contact: {
    heading: "Contact",
    intro: "Open to remote work, or relocation with employer visa sponsorship.",
    email: "noreen.hatamosa@gmail.com",
    linkedin: "https://www.linkedin.com/in/norinahatamosa/",
    linkedinLabel: "linkedin.com/in/norinahatamosa",
    location: "Philippines",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Résumé", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Profile = typeof profile;
