import { useState, useEffect } from 'react';
import Loading from './Loading';
import frontendTechnologies from './frontEndTechnologies';

const Skills = ({ url }) => {
    const [post, setPost] = useState(frontendTechnologies);


    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="grid-container">
                    <div className="grid-item">
                        <h2 className="fade-in">Tech Stack</h2>
                        <h3 className="mb-5 fade-in ">Leveraging <strong>industry-leading</strong> technologies to <strong>create</strong> seamless, <strong>interactive</strong>, and <strong>visually stunning</strong> web applications.
                        </h3>
                    </div>
                    {
                        post.map((item, index) => (
                            <div key={index} className="grid-item fade-in">
                                <h2 className="">{item.icon} {item.name}</h2>
                                <p className="col">{item.description}</p>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}

export default Skills