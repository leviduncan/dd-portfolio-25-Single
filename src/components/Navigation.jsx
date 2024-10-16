import logo from '../assets/logo.png'
import Menu from './Menu'

const Navigation = () => {
    return (
        <div className="navigation">
            <nav className="navbar fixed-top fade-in">
                <div className="d-flex align-items-center justify-content-between container">
                        <a className="navbar-brand" href="/"><img src={logo} alt="Darrin Duncan | Front-end Development & Consulting" /></a>

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="d-none d-md-block">
                            <Menu />
                        </div>

                    </div>

                    <a href="#" className="d-block d-md-none menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-three-dots-vertical"></i></a>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Navigation