
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase'; // Ensure logout function is correctly imported

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN" target="_blank" rel="noopener noreferrer">Home</a></li>
          <li><a href="https://www.netflix.com/in/browse/genre/83" target="_blank" rel="noopener noreferrer">TV Shows</a></li>
          <li><a href="https://www.netflix.com/in/browse/genre/34399" target="_blank" rel="noopener noreferrer">Movies</a></li>
          <li><a href="https://www.netflix.com/tudum/top10/" target="_blank" rel="noopener noreferrer">New & Popular</a></li>
          <li><a href="https://help.netflix.com/en/node/10523" target="_blank" rel="noopener noreferrer">My List</a></li>
          <li><a href="https://help.netflix.com/en/node/47765" target="_blank" rel="noopener noreferrer">Browse by Languages</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <a href="https://www.netflix.com/in/browse/genre/783" target="_blank" rel="noopener noreferrer"><p>Children</p></a>
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" />
          <div className="dropdown">
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
