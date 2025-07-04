import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isPastHeader, setIsPastHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.hero-section')?.offsetHeight || 0;
      setIsPastHeader(window.scrollY > headerHeight - 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top ${
          isPastHeader ? 'navbar-dark bg-dark shadow' : 'navbar-transparent'
        }`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="nav-left d-flex">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <div className="dropdown-">

            </div>
               {/* Dropdown */}
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clusters
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Writing Cluster
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Design Cluster
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Organizational Cluster
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {isPastHeader && (
            <div className="nav-right">
            <a href="#contact" className="btn btn-primary">
              Apply Now
            </a>
          </div>
          )}
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-overlay">
          <div className="container text-center text-white">
            <h1>Header Section</h1>
            <p>Scroll down to see the navbar blend with the top of the header</p>
            {!isPastHeader && (
            <a href="#contact" className="btn btn-primary">
              Apply Now
            </a>
            )}

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
