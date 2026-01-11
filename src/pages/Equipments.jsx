import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fdmPrinter from '../assets/images/3d_printer_fdm.png';
import resinPrinter from '../assets/images/3d_printer_resin.png';
import cncMachine from '../assets/images/cnc_machine.png';
import laserCutter from '../assets/images/laser_cutter.png';
import electronicsImg from '../assets/images/highlight_iot.png';
import iotImg from '../assets/images/highlight_iot.png';

const Equipments = () => {
  const categories = [
    {
      name: 'Rapid Prototyping',
      color: 'success',
      image: fdmPrinter,
      items: [
        { title: 'FDM 3D Printer', specs: 'High-speed, PLA/ABS/PETG', qty: 3 },
        { title: 'Resin 3D Printer', specs: 'High-detail SLA/DLP prints', qty: 2 },
        { title: '3D Scanner', specs: 'Reverse engineering workflow', qty: 1 },
      ],
    },
    {
      name: 'CNC & Fabrication',
      color: 'primary',
      image: cncMachine,
      items: [
        { title: 'CNC Router', specs: 'Wood/acrylic/aluminium', qty: 1 },
        { title: 'Laser Cutter', specs: 'Acrylic/plywood engraving & cutting', qty: 1 },
      ],
    },
    {
      name: 'Electronics & IoT',
      color: 'success',
      image: electronicsImg,
      items: [
        { title: 'Oscilloscope', specs: 'Digital scope for debugging', qty: 4 },
        { title: 'Bench Power Supply', specs: 'Dual output, lab-grade', qty: 6 },
        { title: 'Soldering Stations', specs: 'ESD safe stations', qty: 10 },
      ],
    },
    {
      name: 'Development Boards',
      color: 'primary',
      image: iotImg,
      items: [
        { title: 'Arduino / ESP32 Kits', specs: 'Sensors + actuators kits', qty: 40 },
        { title: 'Raspberry Pi', specs: 'Edge computing & vision', qty: 15 },
      ],
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-lg-9">
            <h1 className="fw-bold mb-2">Lab Equipments</h1>
            <p className="text-muted mb-0">Tools, machines, and kits available for prototyping and research.</p>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((c, idx) => (
            <div className="col-12" key={c.name} data-aos="fade-up" data-aos-delay={idx * 120}>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex flex-column flex-lg-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="rounded-3"
                        style={{ width: '100%', maxWidth: 300, height: 240, objectFit: 'cover' }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <h4 className="fw-bold mb-0">{c.name}</h4>
                        <span className={`badge text-bg-${c.color}`}>Available</span>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead className="table-light">
                            <tr>
                              <th>Equipment</th>
                              <th>Specifications</th>
                              <th className="text-center" style={{ width: 120 }}>
                                Qty
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {c.items.map((i) => (
                              <tr key={i.title}>
                                <td className="fw-semibold">{i.title}</td>
                                <td className="text-muted">{i.specs}</td>
                                <td className="text-center">
                                  <span className={`badge text-bg-${c.color}`}>{i.qty}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="text-muted small mt-3">
                        Equipment list is indicative. For current inventory / booking, contact:{' '}
                        <span className="fw-semibold">aicte_idea_lab_nec@nandhaengg.org</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
