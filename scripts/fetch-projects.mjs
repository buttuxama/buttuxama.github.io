// Fetches public, non-fork repos from the user's GitHub account at build time
// and writes a trimmed JSON file the React app can import.
import { writeFileSync } from 'node:fs';

const USERNAME = 'buttuxama';
const OUT = 'src/content/projects-source.json';

// Repos to exclude from the site. Add full repo names here (case-sensitive).
const SKIP = new Set([
  'buttuxama.github.io', // the portfolio site itself — meta-repo, not a project
]);

const res = await fetch(
  `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated&type=owner`,
  {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'usama-portfolio',
    },
  },
);

if (!res.ok) {
  console.error(`GitHub API responded ${res.status} ${res.statusText}`);
  process.exit(1);
}

const repos = await res.json();

const filtered = repos
  .filter((r) => !r.fork && typeof r.description === 'string' && r.description.length > 0)
  .filter((r) => !SKIP.has(r.name))
  .slice(0, 4)
  .map((r) => ({
    name: r.name,
    html_url: r.html_url,
    description: r.description,
    language: r.language,
    stargazers_count: r.stargazers_count,
    updated_at: r.updated_at,
  }));

writeFileSync(OUT, JSON.stringify(filtered, null, 2) + '\n');
console.log(`Wrote ${filtered.length} repos to ${OUT}`);