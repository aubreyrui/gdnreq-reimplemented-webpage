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
          isPastHeader ? 'navbar-dark' : 'navbar-transparent'
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
            <a href="#apply-now" className="btn btn-primary">
              APPLY NOW
            </a>
          </div>
          )}
        </div>
      </nav>

      <header className="head-section">
        <div className="head-overlay">
          <div className="container text-center text-white">
            <h1 className='h1-styling'>Grounded in the Truth.</h1>
            <p className='p-styling'>The GUIDON Intersession RecWeek 2025 <br/>June 24 to June 28</p>
            {!isPastHeader && (
            <a href="#apply-now" className="btn btn-primary">
              APPLY NOW
            </a>
            )}

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
