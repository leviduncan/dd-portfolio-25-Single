import React from 'react';

const ProjectCard = ({ image, title }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

const ProjectsShowcase = () => {
  const projects = [
    { image: 'project1.jpg', title: 'Yummy Chicken (USA)' },
    { image: 'project2.jpg', title: 'Social Media App' },
    { image: 'project3.jpg', title: 'E-commerce Website' },
    { image: 'project4.jpg', title: 'Government Portal' }
  ];

  return (
    <section className="projects-showcase">
      <h2>Have a look at my recent Projects</h2>
      <p>
        I'm constantly seeking innovative solutions to stay ahead of the curve. I 
        believe in the power of design to elevate your brand and create a lasting 
        impression on your audience.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} title={project.title} />
        ))}
      </div>
      <button className="cta-button">LEARN MORE</button>
    </section>
  );
};

export default ProjectsShowcase;