function Features() {
  return (
    <section id="features" className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Why Choose InternAI?
        </h2>

        <p className="text-secondary">
          Smart tools to help students find internships.
        </p>

      </div>

      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card bg-dark text-light p-4 h-100 rounded-4">
            <h4>🤖 AI Matching</h4>
            <p>Get recommendations based on skills.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card bg-dark text-light p-4 h-100 rounded-4">
            <h4>📄 Resume Analysis</h4>
            <p>Upload resume and discover opportunities.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card bg-dark text-light p-4 h-100 rounded-4">
            <h4>🎯 Smart Suggestions</h4>
            <p>Personalized internship selection.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card bg-dark text-light p-4 h-100 rounded-4">
            <h4>📊 Progress Tracking</h4>
            <p>Track applications and growth.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features