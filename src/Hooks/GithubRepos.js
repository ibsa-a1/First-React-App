import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


//   useEffect(() => {
//     fetch("https://api.github.com/users/octocat/repos")
//       .then((res) => res.json())
//       .then((data) => setRepos(data))
//       .catch((err) => console.error(err));
//   }, []);


  useEffect(() => {
    axios.get("https://api.github.com/users/octocat/repos")
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);  

  if(loading){
    return (
        <h2>Loading Repositories...</h2>
    )
  }
  if(error){
    return (
        <h2>{error}</h2>
    )
  }


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
