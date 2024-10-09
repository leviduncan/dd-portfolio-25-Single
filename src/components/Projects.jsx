import ecomm from '../assets/ecomm-app.png'

const Projects = () => {
    return (
        <section className="projects py-3 py-md-5">
            <div className="container">
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on:</p>
                <div className="d-flex flex-column flex-lg-row justify-content-center gap-4 project-group">
                    <div className="card">
                        <img src={ecomm} className="card-img-top" alt="project1" />
                        <div className="card-body">
                            <h3 className="card-title">Project-1</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ecomm} className="card-img-top" alt="project1" />
                        <div className="card-body">
                            <h3 className="card-title">Project-2</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ecomm} className="card-img-top" alt="project1" />
                        <div className="card-body">
                            <h3 className="card-title">Project-3</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="button-group">
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects