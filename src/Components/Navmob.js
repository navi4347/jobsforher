import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyInventory from './MyInventory'; 
import AllUsers from './AllUsers'; 
import Myaccount from './MyAccount';
import CompanyProfile from './CompanyProfile'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navmob() {
  return (
    <Router>
    <div className='mobnav mok'>
      
      <Navbar>
        
          <Nav> 
          <Nav.Item>
              <Link to="/MyInventory" className="nav-link">MyInventory</Link>
            </Nav.Item>
            <span className="navbar-text">|</span> 
            <Nav.Item>
              <Link to="/CompanyProfile" className="nav-link">CompanyProfile</Link>
            </Nav.Item>
            <span className="navbar-text">|</span>
            <Nav.Item>
              <Link to="/AllUsers" className="nav-link">AllUsers</Link>
            </Nav.Item>
            <span className="navbar-text">|</span>
            <Nav.Item>
              <Link to="/MyAccount" className="nav-link">MyAccount</Link>
            </Nav.Item>
          </Nav>
      </Navbar>
    </div>
      <main>
      <Routes>
        <Route path="/MyInventory" element={<MyInventory />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/MyAccount" element={<Myaccount />} /> 
      </Routes>
    </main>
  </Router>
  );
}

export default Navmob;
