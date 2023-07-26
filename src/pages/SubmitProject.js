// SubmitProject.js
import React, { useState } from 'react';
import api from '../api';

const SubmitProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tags.split(',').map(tag => tag.trim());
    const projectData = { title, description, tags: tagsArray };

    // Submit the project data to the API
    api.submitProject(projectData)
      .then((data) => {
        // Handle success, redirect to project list or show a success message
      })
      .catch((error) => console.error('Error submitting project:', error));
  };

  return (
    <div>
      <h2>Submit Your Stuck Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Tags (comma-separated)</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
        </div>
        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default SubmitProject;
