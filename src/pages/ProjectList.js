// ProjectList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the API and update the state
    api.fetchProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h2>Stuck Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h3>{project.title}</h3>
          </Link>
          <p>{project.description}</p>
          <p>Tags: {project.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
