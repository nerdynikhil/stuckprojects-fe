// ProjectsPage.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the projects from the API
    api.fetchProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div>
      <h1>Projects Page</h1>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tags: {project.tags.join(', ')}</p>
              <p>
                GitHub Link:{' '}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default ProjectsPage;
