import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

// Import Local Images
import necLogo from '../assets/images/NEC_Logo.png';
import aicteLogo from '../assets/images/aicte-logo.png';
import ideaLabLogo from '../assets/images/idea_lab.png';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active-home' : '';

    return (
        <>
            {/* TOP HEADER (Scrolls Away) */}
            <div className="site-header-top">
                <div className="top-bar">
                    <div className="container-fluid px-4 px-xl-5">
                        <div className="header-container">
                            <div className="header-center-group">
                                {/* NEC Logo (now beside the full center content) */}
                                <div className="logo-left">
                                    <a href="https://nandhaengg.org/" target="_blank" rel="noopener noreferrer">
                                        <img src={necLogo} alt="Nandha Engineering College" />
                                    </a>
                                </div>

                                {/* Center: Info Stack */}
                                <div className="header-center text-center">
                                    <div className="college-name">
                                        NANDHA ENGINEERING COLLEGE <span className="autonomous-tag">(AUTONOMOUS)</span>
                                    </div>
                                    <div className="header-address">
                                        Perundurai, Erode - 638 052, Tamilnadu, India
                                    </div>
                                    <div className="header-email ">
                                            aicte_idea_lab_nec@nandhaengg.org
                                    </div>
                                </div>
                            </div>

                            {/* Right: Estd Badge */}
                            {/* <div className="logo-right">
                                <div className="text-end">
                                    <span className="d-block fw-bold text-success text-uppercase small" style={{ letterSpacing: '2px' }}></span>
                                    <img src={necLogo} alt="NEC" style={{ height: '50px', opacity: '0.6', filter: 'grayscale(100%)' }} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR (Sticky & Wavy) */}
            <nav className={`navbar navbar-expand-lg main-navbar ${scrolled ? 'scrolled' : ''} sticky-top`}>
                <div className="container-fluid px-4 px-xl-5 position-relative">

                    {/* Nav Brands */}
                    <div className="d-flex align-items-center flex-grow-1">
                        <div className="nav-brand-area">
                            {/* Desktop Logos (Hidden on Mobile) */}
                            <img src={aicteLogo} alt="AICTE" className="nav-brand-logo d-none d-lg-block" />
                            <img src={ideaLabLogo} alt="IDEA Lab" className="nav-brand-logo d-none d-lg-block" />

                            {/* Desktop Title */}
                            <h2 className="nav-brand-title d-none d-lg-block">
                                AICTE-IDEA Lab@NEC
                            </h2>

                            {/* Mobile Title (Visible only on Mobile) */}
                            <h2 className="nav-brand-title d-lg-none text-white mb-0 fs-5">
                                AICTE-IDEA Lab@NEC
                            </h2>
                        </div>
                    </div>

                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#necNavbar"
                        aria-controls="necNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="toggler-bars" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    {/* Menu Items */}
                    <div className="collapse navbar-collapse flex-grow-0" id="necNavbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    About Us
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to="/about">About IDEA Lab</Link></li>
                                    <li><Link className="dropdown-item" to="/leadership">Leadership Team</Link></li>
                                    <li><Link className="dropdown-item" to="/implementation">Implementation Team</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/equipments')}`} to="/equipments">Lab Equipments</Link>
                            </li>

                            {/* Updated Event Calendar Menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Event Calendar
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to="/events/fdp">Faculty Development Programs</Link></li>
                                    <li><Link className="dropdown-item" to="/events/skilling">Professional Skilling Program</Link></li>
                                    <li><Link className="dropdown-item" to="/events/performance">Skilling Performance</Link></li>
                                    <li><Link className="dropdown-item" to="/events/teachers">School Teacher Awareness Program</Link></li>
                                    <li><Link className="dropdown-item" to="/events/conference">Annual Conference</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item d-none d-lg-block ms-3">
                                <img src={necLogo} alt="NEC" className="navbar-right-logo" />
                            </li>
                        </ul>
                    </div>

                </div>


            </nav>
        </>
    );
};

export default Navbar;
