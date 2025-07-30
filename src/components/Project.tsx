import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { fetchGitHubRepos } from '../utils/github';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repositories = await fetchGitHubRepos('omisdami');
        setRepos(repositories.slice(0, 6)); // Show top 6 repositories
      } catch (err) {
        setError('Failed to load repositories');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      'C++': 'bg-purple-500',
      React: 'bg-cyan-500',
      Vue: 'bg-emerald-500',
      default: 'bg-gray-500'
    };
    return colors[language] || colors.default;
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and passion for development
          </p>
        </div>

        {error ? (
          <div className="text-center text-red-600 mb-8">
            <p>{error}</p>
            <p className="text-sm text-gray-500 mt-2">
              
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.length > 0 ? repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 truncate">
                  {repo.name}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {repo.description || 'No description available'}
              </p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star size={16} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork size={16} />
                  <span>{repo.forks_count}</span>
                </div>
                {repo.language && (
                  <div className="flex items-center space-x-1">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                    <span>{repo.language}</span>
                  </div>
                )}
              </div>

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No repositories found. Make sure to update your GitHub username.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/omisdami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
