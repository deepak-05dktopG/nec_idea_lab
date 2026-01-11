import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Teachers = () => {
  const modules = [
    { title: 'STEM Innovation', color: 'success', text: 'Modern tools, demo kits, and activity design.' },
    { title: 'Hands-on Prototyping', color: 'primary', text: 'Quick builds using electronics and fabrication.' },
    { title: 'Design Thinking', color: 'success', text: 'Empathy → ideate → prototype → test in classrooms.' },
    { title: 'Career Awareness', color: 'primary', text: 'Guidance on engineering pathways and opportunities.' },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">School Teacher Awareness Program</h1>
            <p className="text-muted mb-0">Helping teachers bring innovation and STEM activities to students.</p>
          </div>
        </div>

        <div className="row g-4">
          {modules.map((m, idx) => (
            <div className="col-md-6" key={m.title} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className={`badge text-bg-${m.color} mb-3`}>Module</span>
                  <h5 className="fw-bold">{m.title}</h5>
                  <p className="text-muted mb-0">{m.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm" data-aos="fade-up">
              <div className="card-body p-4 d-flex flex-wrap align-items-center justify-content-between gap-2">
                <div>
                  <div className="fw-bold">Schedule a visit for your school</div>
                  <div className="text-muted">Mail: aicte_idea_lab_nec@nandhaengg.org</div>
                </div>
                <a
                  className="btn btn-success"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aicte_idea_lab_nec@nandhaengg.org&su=School%20Teacher%20Awareness%20Program%20-%20Enquiry"
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

export default Teachers;
