import React from 'react'
import { BrowserRouter as Router,  Link } from 'react-router-dom';


function Linknak() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/Packages">Packages</Link>
                </li>
                <li>
                  <Link to="/Events">Events</Link>
                </li>
                <li>
                  <Link to="/Blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
          </div>
         
        </Router>
      );
    }
export default Linknak;