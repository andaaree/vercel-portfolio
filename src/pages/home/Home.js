import React from 'react';
//import components
import './home.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import LoadIcon from '../LoadIcon';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

//import router
import { Outlet,useNavigation } from 'react-router-dom';

function Home() {
  let navigation = useNavigation();
  
  return (
    <div className='drawer lg:drawer-open'>
      <input className='drawer-toggle' type='checkbox' id='sidebar'/>
      <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Nav />
          {/* Page content here */}
          {checkLoad(navigation)}
          <Outlet />
          <Footer />
      </div>
      <Sidebar />
      <ScrollToTop />
    </div>
  )
}

function checkLoad(nav,component){
 if (nav.state === "loading") {
  return (<>
    <LoadIcon />
    </>);
 }
}
export default Home;