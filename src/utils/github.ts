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

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  const pinnedRepoNames = [
    'DSProject',
    'MACHINE-LEARNING-GBC',
    'Networksecurity',
    'GBC_Group7_LLM_Chatbot_Personal',
    'GROUP1_HEART-DISEASE-',
    'Malaria_Cell_Images-_Dataset_group7'
  ];

  try {
    const fetches = pinnedRepoNames.map((repo) =>
      fetch(`https://api.github.com/repos/${username}/${repo}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }).then((res) => (res.ok ? res.json() : null))
    );

    const results = await Promise.all(fetches);
    return results
      .filter(Boolean)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      }));
  } catch (error) {
    console.error('Error fetching pinned GitHub repositories:', error);
    throw error;
  }
};
