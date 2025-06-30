import React, { useState, useEffect } from 'react';

function GithubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>GitHub Repositories</h2>
      <h3>
        <ul>
            {repos.map((repo) => (
            <li key={repo.id}>
                <a href={repo.html_url} target="_blank">{repo.name}</a>
            </li>
        ))}
      </ul>
      </h3>
    </div>
  );
}

export default GithubRepos;
