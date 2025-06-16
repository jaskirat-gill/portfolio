export interface ExperienceData {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Golf 918",
    duration: "March 2024 – Present",
    location: "Surrey, BC",
    highlights: [
      "Developing full-stack features for Golf918's booking and point-of-sale products, utilizing Node.js, React, and TypeScript",
      "Implementing and optimizing backend services using Express, PostgreSQL (with Kysely), and Redis",
      "Enhancing reliability with RabbitMQ for event-driven architecture and Docker for containerized deployments",
      "Writing automated integration tests with Jest to ensure robust functionality and maintain high-quality standards",
      "Collaborating with a remote team using Slack, and, JIRA, and agile methodologies to deliver weekly product releases"
    ],
    technologies: ["Node.js", "React", "TypeScript", "Express", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Jest", "JIRA"]
  },
  {
    id: 2,
    title: "Software Development & QC Engineer",
    company: "Optum (United Health Group)",
    duration: "Sept 2024 – Apr 2025",
    location: "Richmond, BC",
    highlights: [
      "Engineered full-stack solutions utilizing TypeScript React components integrated with C# API services and C++ middleware, delivering 3 features in an agile environment",
      "Modernized legacy C++ image processing framework through security-focused refactoring, eliminating over 300 high-risk vulnerabilities while maintaining backward compatibility",
      "Accelerated developer feedback cycles by deploying build images to Google Cloud VMs and MIGs for efficient testing"
    ],
    technologies: ["TypeScript", "React", "C#", "C++", "Google Cloud", "API Development", "Security"]
  },
  {
    id: 3,
    title: "Web App Developer",
    company: "Freelance",
    duration: "Nov 2023 – Apr 2025",
    location: "Surrey, BC",
    highlights: [
      "Developed a full-stack e-commerce website with a NextJS frontend, PostgreSQL database, NodeJS backend, and a MedusaJS CMS for a local auto parts store",
      "Integrated Stripe and PayPal API's to implement a secure and efficient cart and checkout process, allowing for the processing of over $10,000 monthly",
      "Deployed back-end on Railway with a PostgreSQL database, a Redis instance for cache and both a worker and server instance of the back-end all with dynamic scaling to handle over 5000 monthly visitors",
      "Built an admin dashboard with NextJS to allow administrators to monitor, update, and manage their business, improving the time spent on these tasks by 30% as compared to their previous solution"
    ],
    technologies: ["NextJS", "Node.js", "PostgreSQL", "MedusaJS", "Stripe", "PayPal", "Redis", "Railway"]
  },
  {
    id: 4,
    title: "Operations Officer",
    company: "Department of National Defense - CCO",
    duration: "November 2024 – Present",
    location: "Surrey, BC",
    highlights: [
      "Employed as a Civilian Instructor for the Canadian Cadet Organization while undergoing the process of becoming a CIC reserve officer",
      "Plan events to support training of over 300 cadets, communicating with vendors, staff and regional office to put together an effective training program",
      "Ensure safety, provide supervision and mentorship to cadets, aiding in their professional development"
    ],
    technologies: ["Leadership", "Event Planning", "Training", "Safety Management", "Communication"]
  }
];