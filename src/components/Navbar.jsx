function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 fixed-top bg-dark" style={{ background: "linear-gradient(135deg,#6f42c1,#0d6efd)" }}>

      <div className="container">

        <a className="navbar-brand fw-bold fs-3">
          InternAI
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">
                How it Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li>
            <a href="#features" className="btn btn-primary rounded-pill px-4">
              Get Started
            </a>
            </li>

            </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar