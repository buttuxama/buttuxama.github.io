export type GitHubRepo = {
  name: string;
  html_url: string;
  description: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};