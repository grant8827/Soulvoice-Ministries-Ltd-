import React from 'react';
import "./headStyles.css";
import { Link } from 'react-router-dom';
import { faFacebook, faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from '../assets/images/church logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MiddleHead() {
  return (
    <div className='middleHead'>
<div className='middleHeadItem' style={{display:'flex', justifyContent:'space-around', alignItems:'center',  }}>
<Link to="/"><img style={{width:'160px', margin:'20px', borderRadius:'20px'}} src={Logo} title='logo' alt='logo'/></Link>
<div className='socialIcons'>

<Link to=''> <FontAwesomeIcon style={{fontSize:'35px', margin:'20px', color:'blue'}} icon={faFacebook}></FontAwesomeIcon>
</Link>
   <Link to=""><FontAwesomeIcon style={{fontSize:'35px', margin:'20px', color:'magenta'}} icon={faInstagram } />
</Link>
   <Link to="https://www.youtube.com/@APOSTLEKGORDON07"><FontAwesomeIcon style={{fontSize:'35px', margin:'20px', color:'red'}} icon={faYoutube} />
 </Link>
   <Link style={{color:'black'}} to="https://www.tiktok.com/@royal_king743?_t=8nEcS6mV2mM&_r=1">   <FontAwesomeIcon style={{fontSize:'35px', margin:'20px'}} icon={faTiktok } />
</Link>
   
</div>
</div>
</div>
  )
}

export default MiddleHead