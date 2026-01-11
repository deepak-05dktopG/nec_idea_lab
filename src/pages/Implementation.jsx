import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Implementation = () => {
  const groups = [
    {
      title: 'Technical Team',
      badge: 'success',
      members: ['3D Printing & Fabrication', 'Electronics & IoT', 'CNC / Laser', 'Maintenance & Safety'],
    },
    {
      title: 'Training & Mentorship',
      badge: 'primary',
      members: ['Workshops', 'FDP Programs', 'Skilling Tracks', 'Student Mentoring'],
    },
    {
      title: 'Operations & Admin',
      badge: 'success',
      members: ['Scheduling & Access', 'Inventory', 'Procurement', 'Documentation'],
    },
    {
      title: 'Innovation & Design',
      badge: 'primary',
      members: ['Design Thinking', 'Product Strategy', 'Prototype Reviews', 'Industry Connect'],
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Implementation Team</h1>
            <p className="text-muted mb-0">Teams that run the lab, programs, and innovation ecosystem.</p>
          </div>
        </div>

        <div className="row g-4">
          {groups.map((g, idx) => (
            <div className="col-md-6" key={g.title} data-aos="fade-up" data-aos-delay={idx * 120}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold mb-0">{g.title}</h5>
                    <span className={`badge text-bg-${g.badge}`}>Core</span>
                  </div>
                  <div className="row g-2">
                    {g.members.map((m) => (
                      <div className="col-12" key={m}>
                        <div className="p-3 rounded-3 bg-light d-flex justify-content-between align-items-center">
                          <span className="fw-semibold">{m}</span>
                          <span className="text-muted small">Active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="alert alert-success border-0" data-aos="fade-up">
              <div className="fw-bold">Want to collaborate?</div>
              <div className="text-muted">Reach out at aicte_idea_lab_nec@nandhaengg.org for projects, FDPs, or lab visits.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
