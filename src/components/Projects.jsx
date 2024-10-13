import { useState, useEffect } from 'react';
import Loading from './Loading';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img
          src={project.acf?.img_url}
          className="card-img-top"
          alt={project.title || 'Project Image'}
        />
      </div>
      <div className="card-body">
        <a href={`/Project/${project.id}`}>
          <h3 className="card-title">{project.acf?.name}</h3>
        </a>
        <p className="card-text">{project.acf?.excerpt}</p>
      </div>
    </div>
  );
};

const Projects = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [url]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>No projects found.</p>;

  return (
    <section className="projects py-3 py-md-5" id="projects">
      <div className="container glass">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <div className="card-grid">
          {posts.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

{/* <div className="d-flex gap-3 btn-grp">
                    <a href={project.acf.github} target="_blank" className="btn btn-main cta">
                        <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href={project.acf.web} target="_blank" className="btn btn-outlined cta">
                        <i className="bi bi-globe-americas"></i> App Link
                    </a>
                </div> */}