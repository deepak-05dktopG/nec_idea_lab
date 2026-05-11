import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bharaniPhoto from '../assets/images/Mr. S. S. Bharani .png';
import prithikaPhoto from '../assets/images/Ms. N. Prithika.png';
import hariharanPhoto from '../assets/images/Mr. A. V. Hariharan.png';
import raghavanPhoto from '../assets/images/Mr. S. Raghavan.png';

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
  const ambassadors = [
    {
      name: 'Mr. M. Sengottaiyan',
      role: 'Assistant Professor',
      department: 'Mechanical Engineering',
      phone: '9003704787',
      email: 'sengottaiyan.malaisamy@nandhaengg.org',
      photo: 'https://nandhaengg.org/wp-content/uploads/2025/04/NEC-Mech-SEngottaiyan.jpg'
    },
    {
      name: 'Mr. V. Ravichandran',
      role: 'Assistant Professor',
      department: 'Electrical and Electronics Engineering',
      phone: '9842483761',
      email: 'ravichandran.v@nandhaengg.org',
      photo: 'https://nandhaengg.org/wp-content/uploads/2025/04/NEC-EEE-RAvichandran.jpg'
    },
    {
      name: 'Mr. C. Prabhu',
      role: 'Assistant Professor',
      department: 'Electronics and Communication Engineering',
      phone: '9489366575',
      email: 'prabhu.ece2022@nandhaengg.org',
      photo: 'https://nandhaengg.org/wp-content/uploads/2025/04/NEC-CSE-Prabhu.jpg'
    },
    {
      name: 'Mr. A. Satheesh Kumar',
      role: 'Assistant Professor',
      department: 'Computer Science and Engineering',
      phone: '9865899677',
      email: 'satheesh.a@nandhaengg.org',
      photo: 'https://nandhaengg.org/wp-content/uploads/2025/03/200-x-200-Faculty-Photo-NEC-CSE-Sathishkumar.jpg'
    },
  ];

  const studentAmbassadors = [
    {
      name: 'Mr. S. S. Bharani',
      year: 'II Year',
      department: 'Mechanical Engineering',
      phone: '8072925263',
      email: '24me006@nandhaengg.org',
      photo: bharaniPhoto
    },
    {
      name: 'Ms. N. Prithika',
      year: 'III Year',
      department: 'Electrical and Electronics Engineering',
      phone: '8072456750',
      email: 'pritthikanatarajan@gmail.com',
      photo: prithikaPhoto
    },
    {
      name: 'Mr. A. V. Hariharan',
      year: 'III Year',
      department: 'Electronics and Communication Engineering',
      phone: '9843325345',
      email: 'hariharanav102006@gmail.com',
      photo: hariharanPhoto
    },
    {
      name: 'Mr. T. Madhan Prasath',
      year: 'II Year',
      department: 'Computer Science and Engineering',
      phone: '',
      email: '',
      photo: ''
    },
    {
      name: 'Mr. S. Raghavan',
      year: 'III Year',
      department: 'Computer Science and Engineering (Cyber Security)',
      phone: '',
      email: '',
      photo: raghavanPhoto
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Tech Gurus - Ambassadors</h1>
            <p className="text-muted mb-0">Meet our ambassadors driving innovation and excellence.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {ambassadors.map((m, idx) => (
            <div className="col-md-6 col-lg-3" key={m.name} data-aos="fade-up" data-aos-delay={idx * 90}>
              <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                <CardPhoto
                  src={m.photo}
                  alt={m.name}
                  fallbackText={m.name.trim().slice(0, 1)}
                  height={280}
                  fit="contain"
                />
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <div className="fw-bold fs-5">{m.name}</div>
                  <div className="text-success small mb-2 fw-medium">{m.role}</div>
                  <div className="text-muted small mb-3 flex-grow-1">{m.department}</div>

                  <div className="text-muted small mb-1">
                    <i className="bi bi-telephone me-2"></i>{m.phone}
                  </div>
                  <div className="text-muted small mb-3 text-break">
                    <i className="bi bi-envelope me-2"></i>{m.email}
                  </div>

                  <div className="d-flex gap-2 flex-wrap mt-auto pt-3 border-top">
                    <a
                      className="btn btn-outline-success btn-sm btn-icon-only"
                      href={`mailto:${m.email}`}
                      aria-label="Mail"
                      title="Mail"
                    >
                      <i className="bi bi-envelope" aria-hidden="true"></i>
                      <span className="visually-hidden">Mail</span>
                    </a>
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

        <div className="row mb-4" data-aos="fade-up">
          <div className="col-12 mt-4">
            <h2 className="fw-bold mb-2">AICTE IDEA LAB – Student Ambassadors</h2>
            <p className="text-muted mb-0">Our student leaders driving the maker culture.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {studentAmbassadors.map((m, idx) => (
            <div className="col-md-6 col-lg-3" key={m.name} data-aos="fade-up" data-aos-delay={idx * 90}>
              <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                <CardPhoto
                  src={m.photo}
                  alt={m.name}
                  fallbackText={m.name.trim().replace(/^(Mr\.|Ms\.)\s*/i, '').slice(0, 1)}
                  height={280}
                  fit="contain"
                />
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <div className="fw-bold fs-5">{m.name}</div>
                  <div className="text-success small mb-2 fw-medium">{m.year}</div>
                  <div className="text-muted small mb-3 flex-grow-1">{m.department}</div>

                  {m.phone && (
                    <div className="text-muted small mb-1">
                      <i className="bi bi-telephone me-2"></i>{m.phone}
                    </div>
                  )}
                  {m.email && (
                    <div className="text-muted small mb-3 text-break">
                      <i className="bi bi-envelope me-2"></i>{m.email}
                    </div>
                  )}

                  {(m.email || m.phone) ? (
                    <div className="d-flex gap-2 flex-wrap mt-auto pt-3 border-top">
                      {m.email && (
                        <a
                          className="btn btn-outline-success btn-sm btn-icon-only"
                          href={`mailto:${m.email}`}
                          aria-label="Mail"
                          title="Mail"
                        >
                          <i className="bi bi-envelope" aria-hidden="true"></i>
                          <span className="visually-hidden">Mail</span>
                        </a>
                      )}
                      {m.phone && (
                        <a
                          className="btn btn-outline-primary btn-sm btn-icon-only"
                          href={`tel:${m.phone}`}
                          aria-label="Call"
                          title="Call"
                        >
                          <i className="bi bi-telephone" aria-hidden="true"></i>
                          <span className="visually-hidden">Call</span>
                        </a>
                      )}
                    </div>
                  ) : <div className="mt-auto pt-3 border-top d-flex gap-2 flex-wrap"></div>}
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
