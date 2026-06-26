function Hero() {
  return (
    <section id="home" className="container min-vh-100 d-flex align-items-center">

      <div className="row align-items-center w-100">

        <div className="col-lg-6 text-center text-lg-start">

          <span className="badge bg-primary mb-3">
            AI Powered Career Discovery
          </span>

          <h1 className="display-2 fw-bold">
            Find Your Perfect Internship with AI
          </h1>

          <p className="lead text-secondary my-4">
            Personalized internship recommendations
            based on your skills, interests and goals.
          </p>

          <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">

            <button className="btn btn-primary px-4 py-3 rounded-pill">
              Get Started
            </button>

            <button className="btn btn-outline-light px-4 py-3 rounded-pill">
              Learn More
            </button>

          </div>

        </div>

        <div className="col-lg-6 text-center mt-5 mt-lg-0">

          <div
            className="p-5 rounded-5 shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,#6f42c1,#0d6efd)"
            }}
          >

            <h2 className="fw-bold mb-4">
              AI Recommendation Engine
            </h2>

            <div className="bg-dark rounded-4 p-4">

              <p>📄 Upload Resume</p>
              <p>🧠 Analyze Skills</p>
              <p>🎯 Internship Match: 92%</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero