import React, { useState } from 'react';
import './App.css';
import { FaBars } from "react-icons/fa";
import logoImage from './Assets/logo.png';
import it from './Assets/it.png';
import { CgMenuRight } from "react-icons/cg";
import Sidebar from './Components/Sidebar';
import Navmob from './Components/Navmob';
import Navl from './Components/Linknak';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMobContentVisible, setIsMobContentVisible] = useState(true);

  const toggleMenu = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleMob = () => {
    setIsMobContentVisible(!isMobContentVisible);
  };

  return (
    <div className="App">
      <header>
        <div className="logoweb">
          <img src={logoImage} alt="imageone" className="responsive-image" />
        </div>
        <button className="toggle-mob" onClick={toggleMob}>
          <FaBars style={{ marginLeft: '10px' }}  className='mob' />
        </button>
        <button  className="toggle-button" onClick={toggleMenu}>
          <CgMenuRight style={{ marginLeft: '80px' }}  className='web'/>
        </button>
        <div className="logomob" style={{ marginLeft: 'auto' }}>
          <img src={logoImage} alt="imageone" className="responsive-image" />
        </div>
        <nav className="nav-links">
          <div style={{ marginLeft: '80px' }}>
            {/* Navl component within the header */}
            <Navl />
          </div>
        </nav>
        <div className="imgt" style={{ marginLeft: 'auto' }}>
          <img src={it} alt="imageone" className="responsive-it" />
        </div>  
      </header>
      {isMobContentVisible && (
        <div className="mobcontent-container">
          <Navmob />
        </div>
      )}
      <div className="content-container">
        {isSidebarVisible && <Sidebar className="sidebart" />}
      </div>
    </div>
  );
}

export default App;
