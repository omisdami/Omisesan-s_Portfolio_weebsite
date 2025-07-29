export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export const fetchGitHubRepos = async (omisdami: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${omisdami}/repos?sort=updated&per_page=20`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Filter out forks and sort by stars/relevance
    return repos
      .filter((repo: GitHubRepo) => !repo.name.includes('.github.io') && repo.description)
      .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};