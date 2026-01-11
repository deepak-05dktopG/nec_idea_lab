import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageBackground from './components/PageBackground';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Implementation from './pages/Implementation';
import Equipments from './pages/Equipments';
import FDP from './pages/events/FDP';
import Skilling from './pages/events/Skilling';
import Performance from './pages/events/Performance';
import Teachers from './pages/events/Teachers';
import Conference from './pages/events/Conference';

function AOSManager() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const isSmallScreen = window.matchMedia?.('(max-width: 768px)')?.matches;

    const deviceMemory = navigator.deviceMemory ?? 8;
    const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
    const isLowEndDevice = deviceMemory <= 2 || hardwareConcurrency <= 4;

    const connection = navigator.connection;
    const saveData = Boolean(connection?.saveData);
    const effectiveType = connection?.effectiveType;
    const isSlowConnection = effectiveType === 'slow-2g' || effectiveType === '2g';

    AOS.init({
      once: true,
      mirror: false,
      duration: isSmallScreen ? 420 : 700,
      easing: 'ease-out-cubic',
      offset: isSmallScreen ? 40 : 80,
      delay: 0,
      disableMutationObserver: true,
      throttleDelay: isSmallScreen ? 90 : 150,
      debounceDelay: 120,
      disable: () => Boolean(prefersReducedMotion) || (isSmallScreen && (saveData || isSlowConnection || isLowEndDevice)),
    });
  }, []);

  useEffect(() => {
    // Let the new route render first, then refresh AOS positions.
    let raf1 = 0;
    let raf2 = 0;

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <AOSManager />
        <ScrollToTop />
        <PageBackground />
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/events/fdp" element={<FDP />} />
            <Route path="/events/skilling" element={<Skilling />} />
            <Route path="/events/performance" element={<Performance />} />
            <Route path="/events/teachers" element={<Teachers />} />
            <Route path="/events/conference" element={<Conference />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
