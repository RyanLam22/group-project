import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import Apps from '../../pages/resumeBuilder/resumeBuilder';
import App from '../../App';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
      <div className="navbar">
        <div className="navbar-links">
          {/* <div className="navbar-links_logo">
            <img src={logo} alt="logo" />
          </div> */}
          <div className="navbar-links_container">
            <p><Link to="/"><ion-icon name="home-outline"></ion-icon></Link></p>
            <p><Link to="/resumebuilder">Resume Builder</Link></p>
            <p><Link to="/contact"><ion-icon name="call-outline"></ion-icon></Link></p>
            
          </div>  
        </div>
        <div className="navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="navbar-menu_container slide-bottom">
              <div className="navbar-menu_container-links">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/resumebuilder">Resume Builder</Link></p>
                <p><Link to="/contact">Contact</Link></p>
              </div>
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    
  );
};

export default Navbar;
