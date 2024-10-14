import { useState, useEffect } from 'react';
import Loading from './Loading';

const Skills = ({ url }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`${url}`);
                const data = await response.json();
                setPost(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPostData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;
    if (!post) return null;

    return (
        <section className="skills py-3 py-md-5" id="skills">
            <div className="container">
                <h2 className="text-center mb-5 fade-in">Tech Stack</h2>

                <div className="container d-flex flex-column flex-md-row">
                    <div className="d-flex flex-wrap-reverse col-12 col-md-6 gap-2 fade-in-left">
                        {
                            post.map((item, index) => (
                                <div key={index} className="tech-stack">
                                    <h4 className="col-6">{item.acf.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                    <div className="container overflow-hidden col-12 col-md-6 fade-in-right">
                        <div className="img-wrapper">
                            <img src="https://darrin-duncan.com/wp-content/uploads/2024/09/web-img-13-scaled.jpg" alt="" className="" loading='lazy' />
                        </div>
                    </div>
                    {/* <div className="gap-4 gap-sm-3 m-auto d-flex flex-row-reverse flex-wrap">
                        {
                            post.map((item, index) => (
                                <div key={index} className="tech-stack gap-2">
                                    <h4 className=" col-6 col-sm-4 col-md-3">{item.acf.name}</h4>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Skills