function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          How It Works
        </h2>

        <p className="text-secondary">
          Get internship recommendations in 3 simple steps
        </p>
      </div>

      <div className="row g-4">

        <div className="col-12 col-md-4">
          <div className="card bg-dark text-light p-4 h-100 rounded-4 text-center">

            <h1>📄</h1>

            <h4>Upload Resume</h4>

            <p>
              Upload your resume and profile details.
            </p>

          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card bg-dark text-light p-4 h-100 rounded-4 text-center">

            <h1>🧠</h1>

            <h4>AI Analysis</h4>

            <p>
              AI analyzes your skills and interests.
            </p>

          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card bg-dark text-light p-4 h-100 rounded-4 text-center">

            <h1>🚀</h1>

            <h4>Get Matches</h4>

            <p>
              Receive internship recommendations.
            </p>

          </div>
        </div>

      </div>

    </section>
  )
}

export default HowItWorks