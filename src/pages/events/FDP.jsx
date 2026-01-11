import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FDP = () => {
  const upcoming = [
    { title: 'Design Thinking for Engineering Education', date: 'To be announced', mode: 'Hybrid/Offline' },
    { title: 'IoT Prototyping & Edge Computing', date: 'To be announced', mode: 'Offline' },
    { title: 'AI Tools for Research & Teaching', date: 'To be announced', mode: 'Online/Hybrid' },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Faculty Development Programs</h1>
            <p className="text-muted mb-0">Skill up educators with hands-on sessions and modern toolchains.</p>
          </div>
        </div>

        <div className="row g-4">
          {upcoming.map((p, idx) => (
            <div className="col-md-6 col-lg-4" key={p.title} data-aos="fade-up" data-aos-delay={idx * 120}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge text-bg-success mb-3">Upcoming</span>
                  <h5 className="fw-bold">{p.title}</h5>
                  <div className="text-muted">Date: {p.date}</div>
                  <div className="text-muted mb-3">Mode: {p.mode}</div>
                  <a
                    className="btn btn-success w-100"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aicte_idea_lab_nec@nandhaengg.org&su=FDP%20Registration%20%2F%20Enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire / Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="alert alert-primary border-0" data-aos="fade-up">
              <div className="fw-bold">Want an FDP topic hosted at your institution?</div>
              <div className="text-muted">Mail us at aicte_idea_lab_nec@nandhaengg.org with your proposal.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDP;
