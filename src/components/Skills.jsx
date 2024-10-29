import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { skillsData } from '../skillsData';

const Skills = () => {
    const [post, setPost] = useState(skillsData);
    const [offset, setOffset] = useState(0);
    const carouselRef = React.createRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOffset((prevOffset) => {
                if (prevOffset < -post.length * 200) {
                    return 0;
                }
                return prevOffset - 1;
            });
        }, 50); // adjust the speed

        return () => clearInterval(intervalId);
    }, [post]);

    return (
        <section className="skills" id="skills">
            <div className="container overflow-hidden">
                <div className="tech-stack text-center">
                    <h2 className="fade-in">Tech Stack</h2>
                    <h3 className="mb-5 fade-in">
                        Leveraging <strong>industry-leading</strong> technologies to create <strong>seamless</strong>, <strong>interactive</strong>, and <strong>visually stunning</strong> web applications.
                    </h3>
                </div>
                <div
                    ref={carouselRef}
                    className="skill-items carousel"
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    {[...post, ...post, ...post].map((skill, idx) => (
                        <div
                            key={idx}
                            className="skill-card mx-4 d-flex flex-column justify-content-center align-items-center"
                        >
                            <skill.icon size={80} className="m-3" />
                            <p className="text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;