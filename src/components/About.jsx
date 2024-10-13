import { useState, useEffect } from 'react';
import Loading from './Loading';

const AboutContent = ({ post }) => {

    const page_image = 'https://darrin-duncan.com/wp-content/uploads/2024/09/Silver-Laptop.jpg'
    const mug = 'https://darrin-duncan.com/wp-content/uploads/2024/09/mug.jpg'

    return (

        <section className="about py-5 py-md-5" id="about">
            <div className="container">
                <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div className="img-wrapper">
                        <img className="img-fluid rounded-4 portrait fade-in-top" loading="lazy" src={mug} alt="About 1" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7 fade-in-right">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-11">
                                <h2 className="mb-3">Who Am I?</h2>
                                <p className="lead fs-4  mb-3">{post.acf.page_content}</p>
                                <div className="btn-grp col-12 col-sm-6 d-flex gap-3">
                                    <a href={post.acf.main_btn_url} className="d-block btn btn-main cta" >
                                        {post.acf.main_btn_label}
                                    </a>
                                    <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" className="btn btn-outlined cta"><i className="bi bi-linkedin"></i> LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const About = ({ url }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`${url}/541`);
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
        <AboutContent post={post} />
    )
}

export default About