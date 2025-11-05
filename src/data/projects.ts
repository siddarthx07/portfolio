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
    title: "Secure Enterprise Document Chatbot",
    description:
      "Role-aware knowledge assistant that ingests PDFs, embeds content, and serves GPT-3.5 powered answers with guardrails. Streamlit front-end, LangChain orchestration, and Firebase services deliver secure chat with full auditability.",
    image: secureEnterpriseImage,
    skills: [
      "Python",
      "LangChain",
      "OpenAI GPT-3.5",
      "Streamlit",
      "Firebase (Auth/Firestore/Storage)",
      "FAISS",
      "RBAC",
    ],
    links: {
      github: "https://github.com/siddarthx07/Secure-Enterprise-Document-Chatbot",
    },
  },
  {
    title: "Real-Time Fraud Mitigation System for MCCS",
    description:
      "Full-stack e-commerce fraud detection system combining a React analytics dashboard, Node.js services, and Python ML models running on AWS. Reduces false positives by 30% via Optuna-tuned ensembles and ships a role-based MERN admin console.",
    image: mccsImage,
    skills: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "JWT Auth",
      "Python ML (XGBoost, Random Forest, Logistic Regression)",
      "Optuna",
      "TailwindCSS",
      "Jest & Supertest",
      "AWS (SageMaker, EC2, S3)",
    ],
  },
  {
    title: "AI Cover Letter Assistant",
    description:
      "Chrome extension that extracts job details from Glassdoor and Greenhouse, analyzes your resume, and generates Gemini-powered cover letters. Auto-fills application forms or exports HTML for manual upload to streamline submissions.",
    image: aiCoverLetterImage,
    skills: [
      "JavaScript",
      "Chrome Extension MV3",
      "Google Gemini API",
      "DOM Manipulation",
      "REST APIs",
      "Async/Await",
      "HTML & CSS",
      "Web Scraping",
      "Chrome Storage API",
      "Object-Oriented Patterns",
    ],
    links: {
      github: "https://github.com/siddarthx07/ai-job-application-helper",
    },
  },
];
