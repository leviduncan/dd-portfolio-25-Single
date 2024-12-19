import { useState, useEffect } from 'react';
import Loading from './Loading';

const AboutContent = ({ post }) => {

    return (

        <section className="about d-flex flex-column flex-md-row" id="about">
            <div className="left col-12 col-md-6"></div>
            <div className="d-flex align-items-center p-5">
                <div className="content" >
                    <h2 className="mb-3">About Me</h2>
                    <h3 className="mb-4">Crafting <strong>Exceptional</strong> Digital Experiences with <strong>Precision</strong> and <strong>Creativity</strong></h3>
                    <p className="mb-3">I'm a front-end developer passionate about transforming ideas into impactful digital realities. Leveraging expertise in HTML5, CSS3, and JavaScript, I specialize in creating intuitive, accessible, and visually compelling web interfaces. My goal is to empower businesses with elegant, high-performance solutions that resonate with users.</p>
                    <p className="mb-3">Over the years, I've honed my skills in modern web development, embracing emerging trends and technologies to stay ahead in the ever-evolving digital landscape. Whether collaborating with teams or leading projects, I bring dedication, adaptability, and an unwavering commitment to excellence.</p>
                    <p className="mb-5">
                        I believe that great design and functionality go hand in hand, and I strive to deliver results that make a lasting impression.</p>
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