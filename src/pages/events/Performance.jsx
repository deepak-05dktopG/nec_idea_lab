import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Performance = () => {
  const metrics = [
    'Students trained through workshops and skilling tracks',
    'Prototype and product outcomes from lab projects',
    'Participation in innovation challenges and forums',
    'Industry collaboration and mentorship engagements',
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Skilling Performance</h1>
            <p className="text-muted mb-0">Outcomes and learning impact (shared as updates are published).</p>
          </div>
        </div>

        <div className="card border-0 shadow-sm" data-aos="fade-up" data-aos-delay="50">
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
              <h4 className="fw-bold mb-0">What we track</h4>
              <span className="badge text-bg-primary">Updates</span>
            </div>
            <ul className="mb-0">
              {metrics.map((m, idx) => (
                <li key={m} className="text-muted" data-aos="fade-up" data-aos-delay={80 + idx * 60}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="alert alert-success border-0 mb-0" data-aos="fade-up">
              <div className="fw-bold">Want to know the latest outcomes?</div>
              <div className="text-muted">Mail: aicte_idea_lab_nec@nandhaengg.org</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
