import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skilling = () => {
  const tracks = [
    { name: 'Full Stack Development', color: 'primary', focus: 'Web + APIs + deployment' },
    { name: 'AI / Data Science', color: 'success', focus: 'ML basics, projects, portfolios' },
    { name: 'IoT & Embedded', color: 'primary', focus: 'Sensors, ESP32, edge prototyping' },
    { name: 'Design & Prototyping', color: 'success', focus: 'CAD, 3D printing, product thinking' },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Professional Skilling Program</h1>
            <p className="text-muted mb-0">Industry-aligned tracks with projects and mentorship.</p>
          </div>
        </div>

        <div className="row g-4">
          {tracks.map((t, idx) => (
            <div className="col-md-6 col-lg-3" key={t.name} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className={`badge text-bg-${t.color} mb-3`}>Track</span>
                  <h5 className="fw-bold">{t.name}</h5>
                  <p className="text-muted mb-4">{t.focus}</p>
                  <a
                    className={`btn btn-${t.color} w-100`}
                    href={`mailto:aicte_idea_lab_nec@nandhaengg.org?subject=${encodeURIComponent(`Skilling Program Enquiry - ${t.name}`)}`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="alert alert-success border-0 mb-0" data-aos="fade-up">
              <div className="fw-bold">Need an industry-aligned skilling plan?</div>
              <div className="text-muted">Contact: aicte_idea_lab_nec@nandhaengg.org</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilling;
