import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import necCampus from '../assets/images/nec_campus.png';
import innovationEcosystem from '../assets/images/innovation_ecosystem.png';
import visionConcept from '../assets/images/vision_concept.png';
import missionConcept from '../assets/images/mission_concept.png';

const About = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">AICTE IDEA Lab @ NEC</h1>
            <p className="text-muted mb-0">NANDHA ENGINEERING COLLEGE, ERODE – 638052.</p>
            <p className="text-muted mb-0">aicte_idea_lab_nec@nandhaengg.org</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <img src={necCampus} alt="NEC Campus" className="img-fluid rounded-3 mb-4 w-100" style={{ height: 240, objectFit: 'cover' }} />
                <h2 className="fw-bold mb-3">About NEC</h2>
                <p className="text-muted mb-0">
                  Nandha Engineering College is a leading multi-disciplinary, research-oriented institution committed to
                  excellence in technical and professional education. The college offers a holistic and interdisciplinary
                  learning environment that seamlessly integrates theoretical foundations with practical application,
                  fostering innovation, critical thinking, and ethical values.
                </p>
                <p className="text-muted mt-3 mb-0">
                  Its academic programs are designed to align with emerging technologies and industry needs, ensuring
                  intellectual rigor, hands-on exposure, and career readiness in a supportive academic ecosystem that
                  promotes scholarship and community engagement. The institution is established and nurtured by the Nandha
                  Educational Institutions Trust, Erode District, Tamil Nadu.
                </p>
                <p className="text-muted mt-3 mb-0">
                  Since its inception, the Trust has been steadfast in its mission to provide value-based education and to
                  create opportunities that empower students—both men and women—to achieve excellence, leadership, and
                  societal impact in their chosen professions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <img src={innovationEcosystem} alt="Innovation Ecosystem" className="img-fluid rounded-3 mb-4 w-100" style={{ height: 240, objectFit: 'cover' }} />
                <h2 className="fw-bold mb-3">About IDEA LAB@NEC</h2>
                <p className="text-muted mb-0">
                  The AICTE IDEA Lab (Innovation, Design and Entrepreneurship Academy) is a flagship initiative of the All
                  India Council for Technical Education aimed at transforming technical education through experiential and
                  hands-on learning.
                </p>
                <p className="text-muted mt-3 mb-0">
                  The lab fosters a vibrant innovation ecosystem within the institution, enabling students to ideate,
                  design, prototype, and develop solutions using state-of-the-art facilities such as 3D printers, IoT
                  platforms, robotics systems, and digital fabrication tools.
                </p>
                <p className="text-muted mt-3 mb-0">
                  By promoting multidisciplinary collaboration, design thinking, and entrepreneurial mindset, the IDEA Lab
                  empowers learners to translate innovative ideas into practical solutions, market-ready products, and
                  sustainable startups.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <img src={visionConcept} alt="Vision" className="img-fluid rounded-3 mb-4 w-100" style={{ height: 200, objectFit: 'cover' }} />
                <span className="badge text-bg-success mb-3">VISION</span>
                <p className="mb-0">
                  To be a leading centre for innovation and multidisciplinary product development through Design Thinking
                  for skill enhancement.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <img src={missionConcept} alt="Mission" className="img-fluid rounded-3 mb-4 w-100" style={{ height: 200, objectFit: 'cover' }} />
                <span className="badge text-bg-primary mb-3">MISSION</span>
                <ul className="mb-0">
                  <li>Upskilling the young minds with advanced skills in prototyping</li>
                  <li>Creating strong partnership with industries, investors and startups</li>
                  <li>Active participation in global innovation challenges and entrepreneurship forums</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
