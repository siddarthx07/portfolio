import type { StaticImageData } from "next/image";

import bookstoreProjectImage from "../../public/bookstore-project.png";
import secureEnterpriseImage from "../../public/Secure-Enterpirse-chatbot-1.png";
import mccsImage from "../../public/MCCS-2.png";
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
      "End-to-end bookstore platform pairing a React + TypeScript client with a Java JAX-RS API. Supports category browsing, detailed product pages, secure checkout, and transactional order management backed by relational storage.",
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
    title: "SecureKnowledge AI",
    description:
      "An intelligent chatbot designed for internal enterprise use that allows employees to query company documents while maintaining strict data privacy and security controls. The system features role-based access control, AI-powered content filtering, and comprehensive audit logging",
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
    title: "Real-Time Fraud Mitigation System for MCCS",
    description:
      "Full-stack e-commerce fraud detection system combining a React analytics dashboard, Node.js services, and Python ML models running on AWS. Reduces false positives by 30%.",
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
      "Chrome extension that extracts job details Greenhouse, analyzes your resume, and generates Gemini-powered cover letters. Auto-fills application forms or exports HTML for manual upload to streamline submissions.",
    image: aiCoverLetterImage,
    skills: [
      "JavaScript",
      "REST APIs",
      "Chrome Extension MV3",
      "Google Gemini API",
      "DOM Manipulation",
      "Async/Await",
      "Web Scraping",
    ],
    links: {
      github: "https://github.com/siddarthx07/ai-job-application-helper",
    },
  },
];
