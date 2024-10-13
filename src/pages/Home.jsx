import React from 'react'
import Header from '../components/Header'
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
    const url = 'https://darrin-duncan.com/wp-json/wp/v2/pages';
    const projectsUrl = 'https://darrin-duncan.com/wp-json/wp/v2/project'
    const skillsUrl = 'https://darrin-duncan.com/wp-json/wp/v2/skill'
    return (
        <>
            <Header url={url} />
            <About url={url} />
            <Projects url={projectsUrl} />
            <Skills url={skillsUrl} />
            <Footer url={url} />
        </>
    )
}

export default Home