export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C#', 'TypeScript', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    category: 'Frontend',
    items: [
      'Angular',
      'React',
      'HTML5',
      'CSS3',
      'RxJS',
      'NgRx',
      'Storybook',
      'WCAG',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend',
    items: [
      'ASP.NET Core',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'NuGet',
      'GraphQL',
      'WebSockets',
      'Microservices',
    ],
  },
  {
    category: 'AI & LLM',
    items: [
      'RAG',
      'LLM APIs',
      'AI Agents',
      'MCP',
      'LangChain',
      'LangGraph',
      'Hugging Face Transformers',
      'n8n',
      'Claude Code',
      'Codex',
    ],
  },
  {
    category: 'Databases',
    items: [
      'PostgreSQL',
      'pgvector',
      'Neo4j',
      'MySQL',
      'SQL Server',
      'Entity Framework Core',
    ],
  },
  {
    category: 'DevOps & Testing',
    items: [
      'Docker',
      'Docker Compose',
      'Azure DevOps',
      'CI/CD',
      'Nginx',
      'AWS',
      'Kubernetes',
      'Git',
      'Jest',
      'Cypress',
    ],
  },
  {
    category: 'Security',
    items: [
      'JWT',
      'HashiCorp Vault',
      'Envelope Encryption',
      'Keycloak',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science (M.Sc.) in Data Science & Artificial Intelligence',
    school: 'Universität des Saarlandes, Saarbrücken, Germany',
    period: 'Expected 2027',
  },
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science',
    school: 'National University of Computer and Emerging Sciences (NUCES – FAST), Karachi, Pakistan',
    period: '2021',
  },
];

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'German', level: '' },
];