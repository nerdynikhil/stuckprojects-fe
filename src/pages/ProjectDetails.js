// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch the project details from the API based on the id parameter and update the state
    api.fetchProjectDetails(id)
      .then((data) => setProject(data))
      .catch((error) => console.error('Error fetching project details:', error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Tags: {project.tags.join(', ')}</p>
      {/* Additional project details can be displayed here */}
    </div>
  );
};

export default ProjectDetails;
