import Menu from './Menu'
import logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light main-nav">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="Darrin Duncan | Front-end Developer" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Menu />
    </div>
  </div>
</nav>
  )
}

export default Navigation