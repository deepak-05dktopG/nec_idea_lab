import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Import Local Images
import necLogo from '../assets/images/NEC_Logo.png';
import aicteLogo from '../assets/images/aicte-logo.png';
import ideaLabLogo from '../assets/images/idea_lab.png';

const Footer = () => {
    return (
        <footer className="footer py-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="container">

                {/* Compact Logos Section */}
                <div className="row mb-4 justify-content-center text-center" data-aos="zoom-in" data-aos-delay="50">
                    <div className="col-auto footer-logo-container d-flex justify-content-center align-items-center gap-4 px-4 py-2">
                        <img src={aicteLogo} alt="AICTE" className="footer-logo" />
                        <div className="vr d-none d-md-block" style={{ height: '30px', opacity: 0.3 }}></div>
                        <img src={ideaLabLogo} alt="IDEA Lab" className="footer-logo" />
                        <div className="vr d-none d-md-block" style={{ height: '30px', opacity: 0.3 }}></div>
                        <img src={necLogo} alt="NEC" className="footer-logo" />
                    </div>
                </div>

                <div className="row g-4">
                    {/* Column 1: College Info */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="50">
                        <h6 className="footer-title small mb-3">Nandha Engineering College</h6>
                        <p className="footer-text small mb-1">(Autonomous)</p>
                        <p className="footer-text small mb-2">NANDHA ENGINEERING COLLEGE, ERODE – 638052.</p>
                        <p className="footer-text small d-flex align-items-start">
                            <i className="bi bi-geo-alt-fill me-2 text-success"></i>
                            <span>
                                Erode - Perundurai Main Road,<br />
                                Vaikkaalmedu, Erode - 638 052.
                            </span>
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-lg-2 col-md-6 col-6" data-aos="fade-up" data-aos-delay="100">
                        <h6 className="footer-title small mb-3">Quick Links</h6>
                        <ul className="list-unstyled quick-links small">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/about" className="footer-link">About</Link></li>
                            <li><Link to="/leadership" className="footer-link">Leadership</Link></li>
                            <li><Link to="/implementation" className="footer-link">Implementation</Link></li>
                            <li><Link to="/equipments" className="footer-link">Lab Equipments</Link></li>
                            <li><Link to="/events/fdp" className="footer-link">Event Calendar</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">
                        <h6 className="footer-title small mb-3">Get in Touch</h6>
                        <div className="contact-item small mb-2">
                            <i className="bi bi-envelope-fill contact-icon"></i>
                            <a
                                href="mailto:aicte_idea_lab_nec@nandhaengg.org"
                                className="text-light text-decoration-none opacity-75 hover-opacity-100"
                            >
                                aicte_idea_lab_nec@nandhaengg.org
                            </a>
                        </div>
                        <div className="contact-item small mb-2">
                            <i className="bi bi-telephone-fill contact-icon"></i>
                            <span className="opacity-75">04294 225585, 226393</span>
                        </div>

                        <div className="d-flex gap-2 mt-3">
                            <a href="https://www.facebook.com/nandhaengg/" target="_blank" rel="noopener noreferrer" className="social-icon sm">
                                <i className="bi bi-facebook"></i>
                            </a>
                            {/* <a href="#" className="social-icon sm"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="social-icon sm"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="social-icon sm"><i className="bi bi-youtube"></i></a> */}
                        </div>
                    </div>

                    {/* Column 4: Map */}
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <h6 className="footer-title small mb-3">Location</h6>
                        <div className="ratio ratio-21x9 map-container" style={{ height: '100px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6642052296597!2d77.6184424745088!3d11.286075949587449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d97cfae1069%3A0x7369b4b751e95b88!2sNandha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1768103614085!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="College Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="copyright-section mt-4 pt-3 border-top border-secondary border-opacity-25">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="small mb-0 text-white-50 copyright-text">&copy; {new Date().getFullYear()} Nandha Engineering College. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className="small text-white-50 powered-by">Powered by AICTE & NEC Innovation Cell</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
