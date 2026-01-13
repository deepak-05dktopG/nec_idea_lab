import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Equipments.css';

// Importing generated images
import vinylCutter from '../assets/images/generated/vinyl_cutter_1768316566022.png';
import printer3d from '../assets/images/generated/3d_printer_1768316876561.png';
import scanner3d from '../assets/images/generated/3d_scanner_1768316587811.png';
import miniLathe from '../assets/images/generated/mini_lathe_1768316610111.png';
import microscope from '../assets/images/generated/digital_microscope_1768316751772.png';
import pcbMilling from '../assets/images/generated/pcb_milling_machine_1768316770625.png';
import oscilloscope from '../assets/images/generated/oscilloscope_1768316792105.png';
import solderStation from '../assets/images/generated/solder_station_1768316807768.png';
import signalGenerator from '../assets/images/generated/signal_generator_1768316825126.png';
import laserCutter from '../assets/images/generated/laser_cutter_1768316858091.png';
import cncRouter from '../assets/images/generated/cnc_router_1768316897910.png';
import woodLathe from '../assets/images/generated/wood_lathe_1768316923675.png';
import welding from '../assets/images/generated/welding_machine_1768316942173.png';
import drilling from '../assets/images/generated/drilling_machine_1768316960709.png';
import sewing from '../assets/images/generated/sewing_machine_1768316995044.png';
import grinder from '../assets/images/generated/bench_grinder_1768317012614.png';
import projector from '../assets/images/generated/projector_1768317030803.png';
import multimeter from '../assets/images/generated/multimeter_1768317047985.png';
import smartBoard from '../assets/images/generated/smart_board_1768317067560.png';
import handheldDrill from '../assets/images/generated/handheld_drill_1768319589508.png';
import labInterior from '../assets/images/idea_lab_interior.png';
import highlightDesign from '../assets/images/highlight_design.png';

const Equipments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const equipmentList = [
    { name: 'Laser Cutter', image: laserCutter },
    { name: 'Vinyl Cutter', image: vinylCutter },
    { name: '3D Printer', image: printer3d },
    { name: '3D Scanner', image: scanner3d },
    { name: 'CNC Router', image: cncRouter },
    { name: 'Mini Desktop Lathe cum Milling', image: miniLathe },
    { name: 'Drilling Machine (1 HP Motor)', image: drilling },
    { name: 'Handheld High-Speed Drilling Machine', image: handheldDrill },
    { name: 'Benchtop Grinder Machine', image: grinder },
    { name: 'Solder Stations', image: solderStation },
    { name: 'Desoldering Machine', image: solderStation },
    { name: 'Advanced Motorized Sewing Machine', image: sewing },
    { name: 'Wood Lathe', image: woodLathe },
    { name: 'Power Tools', image: handheldDrill },
    { name: 'Portable Welding Machine', image: welding },
    { name: 'Refrigerator', image: labInterior },
    { name: 'Normal Oven & Microwave Oven', image: labInterior },
    { name: 'Magnifying Glass with Stand', image: microscope },
    { name: 'Digital Microscope', image: microscope },
    { name: 'Mixed Signal Oscilloscope', image: oscilloscope },
    { name: 'Digital Storage Oscilloscope', image: oscilloscope },
    { name: 'Signal Generator', image: signalGenerator },
    { name: 'Variable Power Supply', image: signalGenerator },
    { name: 'Benchtop Multimeter', image: multimeter },
    { name: 'Projector', image: projector },
    { name: 'Heavy Duty Laser Printer', image: highlightDesign },
    { name: 'PCB Milling Machine', image: pcbMilling },
    { name: 'Smart Board', image: smartBoard },
    { name: 'Computer Workstations with Networking', image: highlightDesign }
  ];

  // Logic to re-use images for items where we didn't generate exact matches (since we did a best-effort batch).
  // I've mapped similar items (like Drill -> Power Tools, Oscilloscope -> Mixed Signal/Digital Storage).

  const filteredEquipments = equipmentList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row mb-5 text-center" data-aos="fade-up">
          <div className="col-lg-8 mx-auto">
            <h1 className="fw-bold display-5 mb-3">Lab Equipments</h1>
            <p className="text-muted lead mb-4">
              Explore our state-of-the-art machinery and tools available for innovation.
            </p>

            <div className="position-relative mx-auto equipment-search-wrap">
              <input
                type="text"
                className="form-control form-control-lg shadow-sm ps-5 rounded-pill border-0"
                placeholder="Search equipments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                style={{ fontSize: '1.2rem' }}
              >
                🔍
              </span>
            </div>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {filteredEquipments.length > 0 ? (
            filteredEquipments.map((item, idx) => (
              <div key={idx} className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden equipment-card video-card-hover">
                  {/* Using video-card-hover class for potential existing hover effects or standard card */}
                  <div className="card-img-top bg-white d-flex align-items-center justify-content-center p-4 equipment-media">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid equipment-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h5 className="card-title fw-bold mb-0 text-dark equipment-title">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-4">No equipment found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
