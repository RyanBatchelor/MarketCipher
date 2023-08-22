import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${isSticky ? 'bg-dark navbar-sticky' : ''}`}>
        <div className="container">
            <img src={logo} alt="" width="200" className='pt-3'/>
        </div>

        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            onClick={toggleNavbar}
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Add the conditional check for the navbar-collapse class */}
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="nav-content navbar-nav ms-auto">
            <li className="nav-item px-3">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item px-3">
                <Link to="/gettingStarted">Getting Started</Link>
            </li>
            <li className="nav-item px-3">
                <Link to="/learn">Learn</Link>
            </li>
            <li className="nav-item px-3">
                <Link to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item px-3">
                <Link to="/reviews">Reviews</Link>
            </li>
            </ul>
        </div>
        </nav>
  );
};

export default Navbar;
