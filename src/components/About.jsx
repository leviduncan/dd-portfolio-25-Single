import { useState, useEffect } from 'react';
import Loading from './Loading';

const AboutContent = ({ post }) => {

    return (

        <section className="about d-flex flex-column flex-md-row" id="about">
            <div className="left col-12 col-md-6"></div>
            <div className="d-flex align-items-center p-5">
                <div className="content" >
                    <h2 className="mb-3">About Me</h2>
                    <h3 className="mb-4">Empowering <strong>Digital Excellence</strong> Through <strong>Innovative Design</strong> and <strong>Development</strong></h3>
                    <p className="mb-3">I'm passionate about revolutionizing digital experiences by harnessing the power of cutting-edge technologies and expertise. With a strong foundation in modern web development, spanning JavaScript, HTML5, CSS3, and React, I've established myself as a trusted partner for businesses seeking to thrive in today's digital landscape.</p>
                    <p className="mb-5">My journey began with a vision to redefine the standards of excellence in web design and development, blending intuitive user experiences with seamless technical integration. Since then, I've continuously evolved and adapted to meet the ever-changing needs of my clients, staying at the forefront of industry trends and emerging technologies.</p>
                    <div className="btn-grp col-12 d-flex gap-3 flex-column flex-xl-row">
                        <a href="mailto:darrin@darrinduncan.com" className="d-none d-md-block btn btn-main cta" >
                            {post.acf.main_btn_label}
                        </a>
                        <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" className="btn btn-outlined cta"><i className="bi bi-linkedin"></i> LinkedIn</a>
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