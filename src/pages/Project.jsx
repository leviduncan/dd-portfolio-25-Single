import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Project = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectsUrl = `https://darrin-duncan.com/wp-json/wp/v2/project/${id}`;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(projectsUrl);
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id, projectsUrl]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="project">
      <div className="container">
        <h1>{data.acf.name}</h1>
        <div className="d-flex flex-column flex-md-row gap-4 align-items-md-center">
          <div>
            <div className="img-wrapper">
              <img src={data.acf.img_url} alt="" />
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <p>{data.acf.description}</p>
          </div>
        </div>

        <hr />
        <h3>Features</h3>
        <p>{data.acf.features}</p>
        <hr />
        <h3>Challenges and Solutions</h3>
        <p>{data.acf.challenges_and_solutions}</p>
        <hr />
        <h3>Lessons Learned</h3>
        <p>{data.acf.Lessons_Learned}</p>
        <hr />
        <h3>Future Development</h3>
        <p>{data.acf.Future_Development}</p>
        <hr />
        <h3>Conclusion</h3>
        <p>{data.acf.Conclusion}</p>

      </div>
    </div>
  );
};

export default Project;