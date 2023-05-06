export default function Navbar(){
    return (
      // navbar navbar-expand-lg navbar-dark bg-dark
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand mx-3" href="#">Shiv Raj Singh </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Project">PROJECTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact ">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      );
}