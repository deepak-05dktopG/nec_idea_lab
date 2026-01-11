import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Conference = () => {
  const info = {
    title: 'Annual Conference',
    theme: 'Innovation for a Sustainable Future',
    date: 'Sep 2026',
    venue: 'Nandha Engineering College, Erode',
  };

  const tracks = [
    { name: 'Innovation & Entrepreneurship', color: 'success' },
    { name: 'Emerging Tech (AI/IoT)', color: 'primary' },
    { name: 'Sustainable Engineering', color: 'success' },
    { name: 'Education & Pedagogy', color: 'primary' },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">{info.title}</h1>
            <p className="text-muted mb-0">Theme: {info.theme}</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex gap-2 flex-wrap mb-3">
                  <span className="badge text-bg-success">{info.date}</span>
                  <span className="badge text-bg-primary">{info.venue}</span>
                </div>
                <h5 className="fw-bold">Call for Papers</h5>
                <p className="text-muted mb-0">
                  Share your research, prototypes, and case studies. Selected papers will be presented and published.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Tracks</h5>
                <div className="row g-2">
                  {tracks.map((t, idx) => (
                    <div className="col-12" key={t.name} data-aos="fade-up" data-aos-delay={idx * 80}>
                      <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between">
                        <span className="fw-semibold">{t.name}</span>
                        <span className={`badge text-bg-${t.color}`}>Open</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm" data-aos="fade-up">
              <div className="card-body p-4 d-flex flex-wrap align-items-center justify-content-between gap-2">
                <div>
                  <div className="fw-bold">Interested to participate?</div>
                  <div className="text-muted">Mail: aicte_idea_lab_nec@nandhaengg.org</div>
                </div>
                <a
                  className="btn btn-primary"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aicte_idea_lab_nec@nandhaengg.org&su=Annual%20Conference%20-%20Enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
