import React from 'react'
import "./headStyles.css";
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
function TopHead() {
  return (
    <div className='tophead'>
    <div style={{display:'flex', justifyContent:"space-around", alignItems:'center',}}>
      <h2 className='servicesTopHead' style={{color:'white'}}><Link style={{textDecoration:'none', color:'white'}} to="/services "> Services</Link></h2>
      <ul className='topNavbar'>
        <li><Link to="/services ">Graphics Design</Link></li>
        <li><Link to="/services">Live Streaming</Link></li>
        <li><Link to="/services">Licence Ordination</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default TopHead