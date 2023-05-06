import { Link, useNavigate } from "react-router-dom";
import './profile.css'

export default function Navbar(){
  const Nav = useNavigate()
  return (
      // navbar navbar-expand-lg navbar-dark bg-dark
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand mx-3" id="logo1" href="#">Shiv Raj Singh </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="/">HOME</a> */}
                  <Link className="nav-link active" id="links"  to={'/'} >HOME</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/About">ABOUT</a> */}
                  <Link to={'/About'} id="links" className="nav-link links active" >ABOUT</Link>
                  {/* <p className="nav-link active" onClick={()=>Nav('/About')} > ABOUT    </p> */}
                </li>
                <li className="nav-item">
                <Link to={'/Project'} id="links" className="nav-link links active" >PROJECTS</Link>
                  {/* <a className="nav-link" href="/Project">PROJECTS</a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/Contact ">CONTACT</a> */}
                <Link to={'/Contact'} id="links" className="nav-link links active" >CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      );
}