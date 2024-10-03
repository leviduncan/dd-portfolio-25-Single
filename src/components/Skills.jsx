import React from 'react'

const Skills = () => {
    
    return (
        <section className="skills py-3 py-md-5">
            <div className="container">
                <h2 className="text-center mb-5">Tech Stack</h2>
                <div class="d-flex flex-wrap justify-content-center">
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="JavaScript-based library for building user interfaces">React</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Open-source JavaScript library for building user interfaces">jQuery</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Progressive JavaScript framework for building UIs">Vue.js</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="TypeScript-based framework for building web applications">Angular</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="CSS framework for responsive, mobile-first design">Bootstrap</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Utility-first CSS framework for rapid UI development">Tailwind CSS</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="JavaScript library for managing application state">Redux</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="JavaScript build tool and module bundler">Webpack</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Compiler for next generation JavaScript">Babel</button>
                    <button type="button" class="btn tech-button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Superset of JavaScript that adds optional static typing">TypeScript</button>
                </div>
            </div>
        </section>
    )
}

export default Skills