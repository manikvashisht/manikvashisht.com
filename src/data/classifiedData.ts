// src/data/classifiedData.ts

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ClassifiedData {
  personal: {
    name: string;
    assetCode: string; // e.g., MV-007
    designation: string; // AI Engineer
    operativeStatus: string; // Active, Available
    contact: {
      email: string;
      secureCommsId: string; // e.g., Encrypted Channel 77579
      location: string;
    };
    missionDirective: string; // Reframed objective
  };
  skills: SkillCategory[];
  experience: Array<{
    title: string;
    organization: string;
    period: string;
    operationCode: string; // e.g., OP-THETAMAX
    missionBriefing: string; // High-level summary
    objectivesAchieved: string[]; // Detailed bullet points
  }>;
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
    clearanceLevel: string; // e.g., Top Secret
  };
}

export const classifiedData: ClassifiedData = {
  personal: {
    name: "Manik Vashisht",
    assetCode: "Manik Vashisht",
    designation: "AI ENGINEER (SPECIALIZING IN DEPLOYMENT & ARCHITECTURE)",
    operativeStatus: "ACTIVE / UPGRADING SKILLS",
    contact: {
      email: "manik.vashisht89@gmail.com",
      secureCommsId: "+1 614-956-9073 (Encrypted Channel)",
      location: "Dublin, OH, Earth Sector",
    },
    missionDirective:
      "An evolving AI Engineer and technical leader, actively integrating AI/ML principles into robust cloud-native platforms. Focused on bridging advanced analytical models with scalable, secure deployment architectures. Dedicated to continuous learning, exploring emerging AI technologies, and leveraging established engineering expertise to drive impactful solutions.",
  },
  skills: [
    
    {
      category: "SYSTEM ARCHITECTURES & CLOUD INFRA",
      skills: [
        { name: "Microservices & Distributed Systems - AI Focus", level: 90 },
        { name: "Cloud Platforms (AWS/GCP) - AI/ML Services", level: 85 },
        { name: "Kubernetes (GKE/EKS) - AI/ML Workloads", level: 88 },
        { name: "DevOps & CI/CD Pipelines - MLOps Principles", level: 92 },
        { name: "Serverless Computing - AI Inference", level: 78 },
      ],
    },
    {
      category: "PROGRAMMING & SECURE CODING",
      skills: [
        { name: "Python - AI/ML Libraries", level: 95 },
        { name: "Java/SpringBoot - Integration Patterns", level: 90 },
        { name: "TypeScript/JavaScript - Frontend/Tooling", level: 92 },
        { name: "Containerization (Docker) - Model Deployment", level: 87 },
        { name: "API Development (REST/GraphQL) - AI Endpoints", level: 88 },
      ],
    },
    {
      category: "STRATEGIC COMMAND & ASSET OPTIMIZATION",
      skills: [
        { name: "Technical Leadership & Mentorship - AI Teams", level: 95 },
        { name: "Agile & Scrum Methodologies - AI Project Mgmt", level: 90 },
        { name: "Platform Governance & Best Practices - AI Context", level: 88 },
        { name: "Cross-functional Team Leadership - AI Initiatives", level: 92 },
      ],
    },
    {
      category: "AI/ML PROTOCOLS & DATA INFILTRATION",
      skills: [
        { name: "Machine Learning Concepts (Supervised/Unsupervised)", level: 45 },
        { name: "Deep Learning Fundamentals (TensorFlow/PyTorch)", level: 15 },
        { name: "Natural Language Processing (NLP) Basics", level: 30 },
        { name: "Data Engineering (ETL, Pipelines) - Applying to AI Contexts", level: 15 },
        { name: "Big Data Processing (Spark/Kafka) - Foundational", level: 20 },
      ],
    },
  ],
  experience: [
    {
      title: "OPERATIONS LEAD // AI PLATFORM DEPLOYMENT",
      organization: "CLASSIFIED (Self-employed)",
      period: "September 2023 - Present",
      operationCode: "OP-NEURALNET",
      missionBriefing: "Directing initial phase AI platform deployments, focusing on robust cloud-native architectures and exploring AI/ML integration.",
      objectivesAchieved: [
        "Participated in engineering cells for deploying Kubernetes (GKE) based platforms, with an eye towards AI/ML workload orchestration.",
        "Assisted in architecting novel AI/ML solutions within existing SpringBoot and Angular ecosystems, learning practical integration challenges.",
        "Managed technical operations, identifying blockers and contributing to timely delivery of features with AI relevance.",
        "Mentored junior operatives in adopting engineering best practices, emphasizing foundational knowledge for future AI applications.",
        "Supported DevSecOps protocols, contributing to CI/CD pipelines (Concourse) for efficient software delivery, with an aim to incorporate MLOps principles.",
      ],
    },
    {
      title: "SENIOR TECHNICAL MANAGER // STRATEGIC SOLUTIONS",
      organization: "ACCENTURE",
      period: "December 2021 - September 2023",
      operationCode: "OP-QUANTUMFLOW",
      missionBriefing: "Oversaw a $5M portfolio, applying strategic insight to technology solutions and evaluating potential AI/ML applications.",
      objectivesAchieved: [
        "Managed a $5M technology portfolio, guiding enterprise software solutions from inception to delivery, achieving a high project success rate while exploring AI-driven enhancements.",
        "Evaluated, designed, and deployed innovative software solutions, optimizing technical pathways and considering scalable AI component integration.",
        "Served as a Lead Technical Liaison, aligning engineering efforts with strategic business intelligence goals and translating high-level directives into actionable plans, with a growing focus on AI opportunities.",
        "Spearheaded full-stack system development across Angular and SpringBoot, enhancing integration with advanced DevOps and Cloud technologies, laying groundwork for future AI platform integration.",
      ],
    },
    {
      title: "TECHNICAL MANAGER // SYSTEM INTEGRATION",
      organization: "ACCENTURE",
      period: "December 2019 - November 2021",
      operationCode: "OP-CYPHERBRIDGE",
      missionBriefing: "Led the integration of secure microservices and web applications, building foundational systems applicable to future AI architectures.",
      objectivesAchieved: [
        "Directed design and deployment of secure RESTful Spring Boot microservices, enhancing system modularity and scalability for data-intensive applications.",
        "Implemented Spring Cloud services (Hystrix, Eureka) to fortify system resilience and fault tolerance, critical for complex AI/ML infrastructures.",
        "Orchestrated the development and seamless integration of Angular 2.0+ front-end applications with secure Spring Boot backends, facilitating data interaction layers.",
        "Engineered and deployed SSO solutions with Okta for Angular SPAs, ensuring robust authentication and authorization protocols essential for secure data access in AI systems.",
      ],
    },
  ],
  education: {
    degree: "BACHELOR OF SCIENCE // INFORMATION TECHNOLOGY",
    institution: "JAYPEE UNIVERSITY OF INFORMATION TECHNOLOGY",
    graduationDate: "MAY 2011",
    clearanceLevel: "TOP SECRET // DISTINCTION (75%)",
  },
};