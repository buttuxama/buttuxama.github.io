export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  stack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "August-Wilhelm Scheer Institut gGmbH",
    role: "Full Stack Developer",
    start: "August 2023",
    end: "Present",
    location: "Saarbrücken, Germany",
    stack: [
      "Angular",
      "ASP.NET Core",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "Neo4j",
      "Docker",
      "Azure DevOps",
      "HashiCorp Vault",
    ],
    highlights: [
      "Built production LLM applications with Angular, ASP.NET Core, PostgreSQL, Docker, HashiCorp Vault, and S3-compatible storage.",
      "Integrated multiple LLM APIs (OpenAI, Anthropic) to deliver context-aware conversational features.",
      "Reduced manual support effort by 20% by automating 5+ business processes via REST APIs, webhooks, and LLM APIs.",
      "Built and documented REST APIs and service layers in Python (FastAPI) and C# (ASP.NET Core) with repository patterns, DTOs, and Swagger to integrate AI capabilities into existing products.",
      "Containerized services with Docker and Docker Compose, configured Nginx, and automated deployments via Azure DevOps CI/CD.",
      "Delivered frontend and backend features across 10+ applications and built four reusable Storybook/Nx UI libraries adopted by 3 teams, cutting cross-team code duplication 40%.",
      "Wrote 50+ unit, integration, and end-to-end tests using Jest and Cypress.",
    ],
  },
  {
    company: "Hysab Kytab Pvt. Ltd.",
    role: "Associate iOS Developer",
    start: "August 2021",
    end: "May 2023",
    location: "Karachi, Pakistan",
    stack: ["iOS", "Swift", "WKWebView", "JavaScript bridge", "MVVM"],
    highlights: [
      "Delivered 5 native iOS and web features for an SDK serving 1M+ users in a banking application.",
      "Built a WKWebView JavaScript bridge enabling secure authentication and communication between native iOS and web components.",
      "Cut application startup time 70% (10s → 3s) by refactoring legacy modules into MVVM with reusable services.",
    ],
  },
];
