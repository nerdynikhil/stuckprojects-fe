// api.js

// Mock data for demonstration purposes
const projects = [
    {
      id: 1,
      title: 'My Awesome Project',
      description: 'This is an awesome project that needs some help!',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/username/my-awesome-project', // GitHub link for the project
    },
    {
      id: 2,
      title: 'Cool Web App',
      description: 'Looking for collaborators to build a cool web app!',
      tags: ['React', 'Express', 'PostgreSQL'],
      link: 'https://github.com/username/cool-web-app', // GitHub link for the project
    },
    // Add more project data here
  ];
  
  const api = {
    fetchProjects: async () => {
      // Simulate an asynchronous API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(projects);
        }, 1000); // Simulate a 1-second delay
      });
    },
  
    fetchProjectDetails: async (projectId) => {
      // Simulate an asynchronous API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const project = projects.find((proj) => proj.id === parseInt(projectId));
          if (project) {
            resolve(project);
          } else {
            reject(new Error('Project not found'));
          }
        }, 800); // Simulate an 800ms delay
      });
    },
  
    submitProject: async (projectData) => {
      // Simulate an asynchronous API call to submit a new project
      return new Promise((resolve) => {
        setTimeout(() => {
          // Generate a new project ID (for demonstration purposes only)
          const newProjectId = projects.length + 1;
          const newProject = { id: newProjectId, ...projectData };
          projects.push(newProject);
          resolve(newProject);
        }, 1200); // Simulate a 1.2-second delay
      });
    },
  };
  
  export default api;
  