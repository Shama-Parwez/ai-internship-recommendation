function Recommendations() {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Recommended Internships
        </h2>

        <p className="text-secondary">
          Personalized opportunities for students
        </p>

      </div>

      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-dark text-light p-4 rounded-4 h-100">

            <h4>Frontend Developer</h4>

            <p>Match Score: 92%</p>

            <button className="btn btn-primary">
              Apply
            </button>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-dark text-light p-4 rounded-4 h-100">

            <h4>UI UX Designer</h4>

            <p>Match Score: 89%</p>

            <button className="btn btn-primary">
              Apply
            </button>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-dark text-light p-4 rounded-4 h-100">

            <h4>Data Analyst</h4>

            <p>Match Score: 84%</p>

            <button className="btn btn-primary">
              Apply
            </button>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Recommendations