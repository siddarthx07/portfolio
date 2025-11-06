import type { StaticImageData } from "next/image";

import bookstoreProjectImage from "../../public/bookstore-project.png";
import secureEnterpriseImage from "../../public/Secure-Enterpirse-chatbot-2.png";
import mccsImage from "../../public/MCCS-3.png";
import aiCoverLetterImage from "../../public/AI-Cover-Letter-Assistant.png";

export type Project = {
  title: string;
  description: string;
  image: StaticImageData | string;
  skills: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Bookstore React Full Stack",
    description:
      "An e-commerce bookstore application for browsing books by category, managing a shopping cart, and completing purchases with order confirmation.",
    image: bookstoreProjectImage,
    skills: [
      "React 18",
      "TypeScript",
      "Context API",
      "Java (JAX-RS)",
      "JDBC",
      "Gradle",
    ],
    links: {
      github: "https://github.com/siddarthx07/bookstore-react-full-stack",
    },
  },
  {
    title: "Enterprise ChatDoc",
    description:
      "Secure enterprise document chatbot with role-based access control, AI content filtering, and audit logging for employee queries.",
    image: secureEnterpriseImage,
    skills: [
      "Python",
      "LangChain",
      "RAG",
      "OpenAI GPT-3.5",
      "Streamlit",
      "Firebase",
      "RBAC",
    ],
    links: {
      github: "https://github.com/siddarthx07/Secure-Enterprise-Document-Chatbot",
    },
  },
  {
    title: "FraudGuard AI",
    description:
      "Detects fraudulent online transactions through predictive models, providing merchants with instant alerts and analytics to prevent financial losses.",
    image: mccsImage,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "AWS",
    ],
  },
  {
    title: "AI Cover Letter Assistant",
    description:
      "Smart extension that crafts personalized cover letters and instantly fills Greenhouse job applications using your saved resume details.",
    image: aiCoverLetterImage,
    skills: [
      "JavaScript",
      "REST APIs",
      "Gemini API",
      "Async/Await",
      "DOM Manipulation",
      "Web Scraping",
      "Chrome Extension MV3",
    ],
    links: {
      github: "https://github.com/siddarthx07/ai-job-application-helper",
    },
  },
];
