import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import necLogo from '../assets/images/NEC_Logo.png';
import aicteLogo from '../assets/images/aicte-logo.png';
import ideaLabLogo from '../assets/images/idea_lab.png';
import heroBg from '../assets/images/hero_bg.png';
import highlightDesign from '../assets/images/highlight_design.png';
import highlightPrototype from '../assets/images/highlight_prototype.png';
import highlightIoT from '../assets/images/highlight_iot.png';
import highlightEntrepreneurship from '../assets/images/highlight_entrepreneurship.png';
import necCampus from '../assets/images/nec_campus.png';
import ideaLabInterior from '../assets/images/idea_lab_interior.png';

const Home = () => {
  const highlights = [
    {
      icon: 'bi-lightbulb',
      badge: 'Design',
      color: 'success',
      title: 'Design Thinking',
      text: 'Problem framing, ideation, user-centric prototyping.',
      image: highlightDesign,
    },
    {
      icon: 'bi-tools',
      badge: 'Build',
      color: 'primary',
      title: 'Rapid Prototyping',
      text: 'CAD → fabricate → test → iterate in shorter cycles.',
      image: highlightPrototype,
    },
    {
      icon: 'bi-cpu',
      badge: 'Make',
      color: 'success',
      title: 'IoT & Robotics',
      text: 'Sensors, controllers, automation, and smart prototypes.',
      image: highlightIoT,
    },
    {
      icon: 'bi-rocket-takeoff',
      badge: 'Grow',
      color: 'primary',
      title: 'Entrepreneurship',
      text: 'Mentorship to translate ideas into practical solutions.',
      image: highlightEntrepreneurship,
    },
  ];

  const quickCards = [
    { title: 'Prototype & Build', text: '3D printing, electronics, robotics, and fabrication support.' },
    { title: 'Learn by Doing', text: 'Workshops, FDPs, skilling programs, and mentoring.' },
    { title: 'Multidisciplinary', text: 'Collaborate across departments to solve real problems.' },
  ];

  const programs = [
    { title: 'Faculty Development Programs', desc: 'Workshops and FDPs for educators.', to: '/events/fdp', icon: 'bi-mortarboard', color: 'success' },
    { title: 'Professional Skilling Program', desc: 'Industry-aligned skilling tracks.', to: '/events/skilling', icon: 'bi-kanban', color: 'primary' },
    { title: 'Skilling Performance', desc: 'Outcomes and learning impact updates.', to: '/events/performance', icon: 'bi-graph-up', color: 'success' },
    { title: 'Teacher Awareness Program', desc: 'STEM awareness and innovation for schools.', to: '/events/teachers', icon: 'bi-easel2', color: 'primary' },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="text-white py-5 position-relative overflow-hidden"
        style={{
          background: `
            radial-gradient(1200px circle at 10% 10%, rgba(34,197,94,0.28), transparent 45%), 
            radial-gradient(900px circle at 90% 25%, rgba(59,130,246,0.20), transparent 48%), 
            linear-gradient(135deg, rgba(11,18,32,0.92) 0%, rgba(15,27,45,0.85) 55%, rgba(11,18,32,0.92) 100%),
            url(${heroBg}) center/cover no-repeat
          `,
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'radial-gradient(800px circle at 60% 60%, rgba(255,255,255,0.05), transparent 55%), radial-gradient(600px circle at 20% 70%, rgba(255,255,255,0.035), transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container py-4 py-lg-5 position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-7" data-aos="fade-up">
              <div
                className="p-4 p-lg-5 rounded-4"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <img src={aicteLogo} alt="AICTE" style={{ height: 34, width: 'auto' }} />
                    <img src={ideaLabLogo} alt="IDEA Lab" style={{ height: 34, width: 'auto' }} />
                  </div>
                  <span className="badge text-bg-success">AICTE</span>
                  <span className="badge text-bg-primary">IDEA Lab</span>
                  <span className="badge text-bg-light text-dark">@ NEC</span>
                </div>

                <h1 className="display-5 fw-bold mb-3">Innovation. Design. Entrepreneurship.</h1>
                <p className="lead text-white-50 mb-4">
                  A hands-on ecosystem for experiential learning, multidisciplinary collaboration, design thinking,
                  prototyping, and entrepreneurship.
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <a className="btn btn-success btn-lg" href="#highlights">Explore Lab</a>
                  <Link className="btn btn-outline-light btn-lg" to="/about">About</Link>
                  <a className="btn btn-outline-light btn-lg" href="#contact">Contact</a>
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 text-white-50 small">
                  <i className="bi bi-geo-alt"></i>
                  <span>NANDHA ENGINEERING COLLEGE, ERODE – 638052.</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="row g-3">
                {quickCards.map((card, idx) => (
                  <div className="col-12" key={card.title} data-aos="fade-up" data-aos-delay={150 + idx * 100}>
                    <div
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <h5 className="fw-bold mb-2">{card.title}</h5>
                      <p className="mb-0 text-white-50">{card.text}</p>
                    </div>
                  </div>
                ))}

                <div className="col-12" data-aos="fade-up" data-aos-delay="450">
                  <div
                    className="p-4 rounded-4 d-flex align-items-center justify-content-between gap-3"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <div>
                      <div className="text-white-50 small">Official Email</div>
                      <div className="fw-semibold">aicte_idea_lab_nec@nandhaengg.org</div>
                    </div>
                    <a
                      className="btn btn-success"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=aicte_idea_lab_nec@nandhaengg.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-5 bg-light">
        <div className="container py-3">
          <div className="row mb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">What you can do here</h2>
              <p className="text-muted mb-0">A modern lab experience built for exploration, collaboration, and impact.</p>
            </div>
          </div>

          <div className="row g-4">
            {highlights.map((f, idx) => (
              <div className="col-md-6 col-lg-3" key={f.title} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className={`badge text-bg-${f.color}`}>{f.badge}</span>
                      <i className={`bi ${f.icon} text-${f.color}`} style={{ fontSize: 22 }}></i>
                    </div>
                    <img
                      src={f.image}
                      alt={f.title}
                      className="img-fluid mb-3 rounded-3 w-100"
                      style={{ height: 160, objectFit: 'cover' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <h5 className="fw-bold">{f.title}</h5>
                    <p className="text-muted mb-0">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Snapshot */}
          <div className="row g-4 mt-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 p-lg-5">
                  <img
                    src={necCampus}
                    alt="NEC Campus"
                    className="img-fluid rounded-3 mb-4 w-100"
                    style={{ height: 200, objectFit: 'cover' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <img src={necLogo} alt="NEC" style={{ height: 34, width: 'auto' }} />
                    <span className="badge text-bg-light text-dark">NEC</span>
                  </div>
                  <h3 className="fw-bold mb-2">About Nandha Engineering College</h3>
                  <p className="text-muted mb-3">
                    A multi-disciplinary, research-oriented institution committed to excellence in technical and
                    professional education.
                  </p>
                  <Link className="btn btn-outline-primary" to="/about">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 p-lg-5">
                  <img
                    src={ideaLabInterior}
                    alt="IDEA Lab"
                    className="img-fluid rounded-3 mb-4 w-100"
                    style={{ height: 200, objectFit: 'cover' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <img src={ideaLabLogo} alt="IDEA Lab" style={{ height: 34, width: 'auto' }} />
                    <span className="badge text-bg-success">AICTE IDEA Lab</span>
                  </div>
                  <h3 className="fw-bold mb-2">About AICTE IDEA Lab @ NEC</h3>
                  <p className="text-muted mb-3">
                    A hands-on innovation ecosystem to ideate, design, prototype, and develop solutions using modern
                    facilities.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <Link className="btn btn-success" to="/about">Vision & Mission</Link>
                    <Link className="btn btn-outline-success" to="/equipments">Lab Facilities</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Programs */}
          {/* <div className="row mt-5 align-items-end" data-aos="fade-up">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">Programs & Events</h2>
              <p className="text-muted mb-0">Explore the Event Calendar and program tracks.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link className="btn btn-primary" to="/events/fdp">View Event Calendar</Link>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {programs.map((p, idx) => (
              <div className="col-md-6 col-lg-3" key={p.title} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className={`badge text-bg-${p.color}`}>Program</span>
                      <i className={`bi ${p.icon} text-${p.color}`} style={{ fontSize: 22 }}></i>
                    </div>
                    <h5 className="fw-bold">{p.title}</h5>
                    <p className="text-muted mb-3">{p.desc}</p>
                    <Link className={`btn btn-outline-${p.color} w-100`} to={p.to}>Open</Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="450">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge text-bg-primary">Community</span>
                    <i className="bi bi-people text-primary" style={{ fontSize: 22 }}></i>
                  </div>
                  <h5 className="fw-bold">Leadership & Mentors</h5>
                  <p className="text-muted mb-3">Meet the team guiding the lab.</p>
                  <Link className="btn btn-outline-primary w-100" to="/leadership">View Team</Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-up">
              <h2 className="fw-bold mb-2">Get in touch</h2>
              <p className="text-muted mb-0">Contact us for lab access, collaborations, FDPs, or student project support.</p>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <div className="text-muted small">Email</div>
                      <div className="fw-semibold">aicte_idea_lab_nec@nandhaengg.org</div>
                      <div className="text-muted small mt-2">Address</div>
                      <div className="text-muted">NANDHA ENGINEERING COLLEGE, ERODE – 638052.</div>
                    </div>
                    <a
                      className="btn btn-success"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=aicte_idea_lab_nec@nandhaengg.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mail
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 mt-3 flex-wrap">
                <Link className="btn btn-outline-primary" to="/about">About</Link>
                <Link className="btn btn-outline-success" to="/equipments">Equipments</Link>
                <Link className="btn btn-outline-primary" to="/events/fdp">Event Calendar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
