import React from 'react'
import {Link} from 'react-router-dom'
import "./headStyles.css";
import DrawerComponent from './DrawerComponent';
function NavBar() {
  return (
    <div className='navBarLinks'>
      <ul className='navLinks'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li> 
        <li><Link to="/Schedule">Schedule</Link></li> 
        <li><Link to="/Contact">Contact</Link></li>
        <div><DrawerComponent/></div>
      </ul>
    </div>
  )
}

export default NavBar