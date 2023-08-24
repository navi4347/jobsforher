import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BsBoxes } from "react-icons/bs";
import hp from '../Assets/Svg/hp.svg';
import './style.css';

import Dashboard from './Dashboard'; 
import Jobs from './Jobs'; 
import Applications from './Applications'; 
import Followers from './Followers'; 
import MyInventory from './MyInventory'; 
import CompanyProfile from './CompanyProfile'; 
import AllUsers from './AllUsers'; 
import Myaccount from './MyAccount';
import Profiles from '../Assets/Svg/profiles.svg';
import collaboration from '../Assets/Svg/collaboration.svg';
import enterprise from '../Assets/Svg/enterprise.svg';
import dashboard from '../Assets/Svg/dashboard.svg';
import Jobs_Outline from '../Assets/Svg/Jobs_Outline.svg';
import followers from '../Assets/Svg/followers.svg';
import conversation from '../Assets/Svg/conversation.svg';

function Sidebar() {
  return (
    <Router>
      <aside className="side-nav">
        <div className="hp">
          <img src={hp} alt="HP Logo" className="resp" />
          <h1 className='myh1'>Hello,</h1>
        </div>
        <h3 className='myh3'>hewlett packard enterprise</h3>
        <div className="sidebar-links">
          <ul className="side-by-side-links">
          <div className='links'>
 <li>
              <img src={dashboard} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
              <Link to="/Dashboard" className='link'>Dashboard</Link>
          </li>        </div>

          <div className='links'>
 <li>
          <img src={Jobs_Outline} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
            <Link to="/Jobs" className='link'><span className="job-link-content">Jobs</span>
</Link>
          </li>        </div>

          <div className='links'>
 <li>
          <img src={Profiles} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
           <Link to="/Applications" className='link'>Applications</Link>
          </li>        </div>

          <div className='links'>
  <li>
          <img src={followers} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
          <Link to="/Followers" className='link'>Followers</Link>
          </li>         </div>

          <div className='link links'>
          <li>
          <BsBoxes/>&nbsp;&nbsp;
          <Link to="/MyInventory" className='link'>My Inventory</Link>        
          </li> 
          </div>
          <div className='links'>
<li>
          <img src={enterprise} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
           <Link to="/CompanyProfile" className='link'>Company Profile</Link>
          </li>        </div>

          <div className='links'>
<li>
          <img src={collaboration} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
          <Link to="/AllUsers" className='link'>All Users</Link>
          </li>        </div>

          <div className='links'>
 <li>
          <img src={conversation} alt="Profile Icon" style={{ width: '20px', height: '20px' }} />&nbsp;&nbsp;
          <Link to="/Myaccount" className='link'>My Account</Link>
          </li>
          </div>
</ul>
        </div>
        <p>Contact US -</p>
        <p>Email: <a href="mailto:admin@jobsforher.com">admin@jobsforher.com</a></p>
        <br/>

      </aside>

      <main>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/MyInventory" element={<MyInventory />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/MyAccount" element={<Myaccount />} /> 
        </Routes>
      </main>
    </Router>
  );
}

export default Sidebar;
