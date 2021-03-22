function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active" id="link-1">
              <a className="nav-link" onClick={() => "smoothScroll(event);"} href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item" id="link-2">
              <a className="nav-link" onClick={() => "smoothScroll(event);"} href="#about">About me</a>
            </li>
            <li className="nav-item" id="link-3">
              <a className="nav-link" onClick={() => "smoothScroll(event);"} href="#my-projects">My projects</a>
            </li>
            <li className="nav-item" id="link-4">
              <a className="nav-link" onClick={() => "smoothScroll(event);"} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;