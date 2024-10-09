import data from '../data'

const Skills = () => {

    return (
        <section className="skills py-3 py-md-5">
            <div className="container">
                <h2 className="text-center mb-5">Tech Stack</h2>
                <div className="container">
                    <div className="row gap-2 m-auto">
                    {
                        data.map((item, index) => (
                            <div key={index} className="tech-stack text-bg-light col-6 col-sm-4 col-md-3 gap-2 m-auto"><h4>{item.name}</h4></div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills