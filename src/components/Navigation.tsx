import logo from '../assets/logo.png'

const Navigation = () => {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt="Darrin Duncan | Front-end Development & Consulting" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation