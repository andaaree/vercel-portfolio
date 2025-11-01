import React from 'react';
import {
  NavLink,
} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import FeedIcon from '@mui/icons-material/Feed';

function Sidebar(){
  return (
    <div className='drawer-side'>
      <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
        {/* Large Drawer */}
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content lg:block hidden">
          {/* Sidebar content here */}
          <div className="h3">
            <h3 className="text-2xl center">Andaaree</h3>
          </div>
          <hr className='my-5'/>
          <li>
            <NavLink to='/' className="mt-3 bg-primary text-content-primary">
              <HomeIcon color='info' /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/edu' className="mt-3 bg-warning text-content-warning">
              <BookIcon color='error' /> Education
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' className="mt-3 bg-success text-content-success">
              <FeedIcon color='warning' /> Portfolio
            </NavLink>
          </li>
        </ul>
        {/* Small Drawer */}
        <ul className="menu bg-base-200 rounded-box lg:hidden">
          <div className="h4">
            <h3 className="text-2xl text-center">Andaaree</h3>
          </div>
          <hr className='my-5'/>
          <li>
            <NavLink to='/' className="mt-3 bg-primary">
              <HomeIcon color='info'/>
            </NavLink>
          </li>
          <li>
            <NavLink to='/edu' className="mt-3 bg-warning">
              <BookIcon color='error'/>
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' className="mt-3 bg-success">
              <FeedIcon color='warning'/>
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;