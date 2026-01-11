import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ragupathyPhoto from '../assets/images/ragupathy.png';
import easwaramoorthyPhoto from '../assets/images/easwaramoorthy.png';
import lalithaPhoto from '../assets/images/lalitha.png';
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

const Leadership = () => {
  const leaders = [
    {
      name: 'Dr. U.S. Ragupathy',
      role: 'Chief Mentor',
      phone: '7373712234',
      email: 'principal@nandhaengg.org',
      photo: ragupathyPhoto,
    },
    {
      name: 'Dr. M. Easwaramoorthi',
      role: 'Coordinator',
      phone: '7373714707',
      email: 'deaninnovation@nandhaengg.org',
      photo: easwaramoorthyPhoto,
    },
    {
      name: 'Dr. K. Lalitha',
      role: 'Co-Coordinator',
      phone: '9150778585',
      email: 'lalithak@nandhaengg.org',
      photo: lalithaPhoto,
    },
  ];

  const mentors = [
    { name: 'Dr. P. Sukumar', phone: '9842119035', email: 'sukumarnec@nandhaengg.org', photo: sukumarPhoto },
    { name: 'Mr. S. Muruganantham', phone: '9944555505', email: '', photo: murugananthamPhoto },
    { name: 'Mr. M. Sengottaiyan', phone: '9003704787', email: 'sengottaiyan.malaisamy@nandhaengg.org', photo: sengottaiyanPhoto },
    { name: 'Mr. B. Ramraj', phone: '9790480188', email: 'ramrajb@nandhaengg.org', photo: ramrajPhoto },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Leadership Team</h1>
            <p className="text-muted mb-0">People guiding strategy, programs, and partnerships.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {leaders.map((p, idx) => (
            <div className="col-md-6 col-lg-4" key={p.role} data-aos="zoom-in" data-aos-delay={idx * 120}>
              <div className="card border-0 shadow-sm h-100">
                <CardPhoto
                  src={p.photo}
                  alt={p.name}
                  fallbackText={p.name.trim().slice(0, 1)}
                  height={320}
                  fit="contain"
                />
                <div className="card-body p-4">
                  <div className="fw-bold fs-5">{p.name}</div>
                  <div className="text-success fw-semibold mb-3">{p.role}</div>
                  <div className="text-muted small mb-2">
                    <span className="fw-semibold">Mobile:</span> {p.phone}
                  </div>
                  <div className="text-muted small mb-3">
                    <span className="fw-semibold">Email:</span> {p.email}
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    <a className="btn btn-outline-success btn-sm" href={`mailto:${p.email}`}>Email</a>
                    <a className="btn btn-outline-primary btn-sm" href={`tel:${p.phone}`}>Call</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm" data-aos="fade-up">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                  <h2 className="fw-bold mb-0">Mentors</h2>
                  <span className="badge text-bg-primary">Support Team</span>
                </div>

                <div className="row g-3">
                  {mentors.map((m, idx) => (
                    <div className="col-md-6" key={m.name} data-aos="fade-up" data-aos-delay={idx * 80}>
                      <div className="card border-0 shadow-sm h-100 overflow-hidden">
                        <div className="row g-0 h-100">
                          <div className="col-4">
                            <div className="h-100" style={{ minHeight: 120 }}>
                              <CardPhoto
                                src={m.photo}
                                alt={m.name}
                                fallbackText={m.name.trim().slice(0, 1)}
                                height={140}
                                fit="contain"
                              />
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="card-body p-3">
                              <div className="fw-semibold">{m.name}</div>
                              <div className="text-muted small mb-1">Mobile: {m.phone}</div>
                              {m.email ? (
                                <div className="text-muted small">Email: {m.email}</div>
                              ) : (
                                <div className="text-muted small">Email: —</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
