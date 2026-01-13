import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import sukumarPhoto from '../assets/images/sukumar.png';
import murugananthamPhoto from '../assets/images/muruganandham.png';
import sengottaiyanPhoto from '../assets/images/sengottaiyan.png';
import ramrajPhoto from '../assets/images/ramraj.png';

const CardPhoto = ({ src, alt, fallbackText, height = 260, fit = 'cover' }) => {
  if (!src) {
    return (
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ height, background: 'linear-gradient(135deg, rgba(34,197,94,0.18), rgba(13,110,253,0.12))' }}
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: 84, height: 84, background: 'rgba(255,255,255,0.7)', color: '#0f5132' }}
        >
          <span className="fw-bold" style={{ fontSize: 32 }}>{fallbackText}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-100"
      style={{ height, objectFit: fit, objectPosition: 'center', background: '#f8f9fa' }}
      loading="lazy"
    />
  );
};

const Implementation = () => {
  const mentors = [
    { name: 'Dr. P. Sukumar', phone: '9842119035', email: 'sukumarnec@nandhaengg.org', photo: sukumarPhoto },
    { name: 'Mr. S. Muruganantham', phone: '9944555505', email: '', photo: murugananthamPhoto },
    { name: 'Mr. M. Sengottaiyan', phone: '9003704787', email: 'sengottaiyan.malaisamy@nandhaengg.org', photo: sengottaiyanPhoto },
    { name: 'Mr. B. Ramraj', phone: '9790480188', email: 'ramrajb@nandhaengg.org', photo: ramrajPhoto },
  ];

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
            <p className="text-muted mb-0">Mentors and teams that run the lab, programs, and innovation ecosystem.</p>
          </div>
        </div>

        <div className="row mb-3" data-aos="fade-up">
          <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h2 className="fw-bold mb-0">Mentors</h2>
            <span className="badge text-bg-primary">Support Team</span>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {mentors.map((m, idx) => (
            <div className="col-md-6 col-lg-4" key={m.name} data-aos="fade-up" data-aos-delay={idx * 90}>
              <div className="card border-0 shadow-sm h-100">
                <CardPhoto
                  src={m.photo}
                  alt={m.name}
                  fallbackText={m.name.trim().slice(0, 1)}
                  height={260}
                  fit="contain"
                />
                <div className="card-body p-4">
                  <div className="fw-bold fs-5">{m.name}</div>
                  <div className="text-muted small mb-1">Mobile: {m.phone}</div>
                  <div className="text-muted small mb-3">Email: {m.email || '—'}</div>

                  <div className="d-flex gap-2 flex-wrap">
                    {m.email ? (
                      <a
                        className="btn btn-outline-success btn-sm btn-icon-only"
                        href={`mailto:${m.email}`}
                        aria-label="Mail"
                        title="Mail"
                      >
                        <i className="bi bi-envelope" aria-hidden="true"></i>
                        <span className="visually-hidden">Mail</span>
                      </a>
                    ) : null}
                    <a
                      className="btn btn-outline-primary btn-sm btn-icon-only"
                      href={`tel:${m.phone}`}
                      aria-label="Call"
                      title="Call"
                    >
                      <i className="bi bi-telephone" aria-hidden="true"></i>
                      <span className="visually-hidden">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mb-3" data-aos="fade-up">
          <div className="col-12">
            <h2 className="fw-bold mb-0">Core Teams</h2>
          </div>
        </div>

        {/* <div className="row g-4">
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
        </div> */}

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
