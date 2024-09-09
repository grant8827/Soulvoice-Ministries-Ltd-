import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClock, faContactBook, faHome, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/church logo.jpg';
import { faFacebook, faYoutube, faTiktok, faInstagram, faServicestack, } from "@fortawesome/free-brands-svg-icons";
function DrawerComponent() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div>
         <button className='navMenuBar' onClick={toggleDrawer}><FontAwesomeIcon style={{fontSize:'28px', margin:'15px', color:'white' }} icon={faBars}></FontAwesomeIcon>
</button>
            <Drawer style={{backgroundColor:'antiquewhite', width:'200px', height:'100%' }}
                    ModalProps={{ scrollBehavior: true }}

                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'>
                <div style={{scrollBehavior:'smooth'}}>
                  <img style={{width:'200px'}} src={Logo} title='LOGO' alt='LOGO'/>
                <div style={{display:'block', margin:'10px'}}>
                  <h4 style={{margin:'20px'}}><FontAwesomeIcon className='navbarIcons' icon={faHome} /><Link style={{color:'black', textDecoration:'none',}} to="/">Home</Link></h4>
        <h4  style={{margin:'20px'}}><FontAwesomeIcon className='navbarIcons' icon={faInfoCircle} /><Link style={{color:'black', textDecoration:'none',}} to="/About">About</Link> </h4>
        <h4 style={{margin:'20px'}}><FontAwesomeIcon className='navbarIcons' icon={faClock} /><Link style={{color:'black', textDecoration:'none', marginTop:'30px'}} to="/Schedule">Schedule</Link></h4>
        <h4 style={{margin:'20px'}}><FontAwesomeIcon className='navbarIcons' icon={faContactBook} /><Link style={{color:'black', textDecoration:'none', marginTop:'30px'}} to="/Contact">Contact</Link></h4>
        <h4 style={{margin:'20px'}}><FontAwesomeIcon className='navbarIcons' icon={faServicestack} /><Link style={{color:'black', textDecoration:'none', marginTop:'30px'}} to="/services ">Services</Link></h4>

       <h3 style={{textDecoration:'underline',  color:'red'}}>Follow Us On</h3>
       <div>
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
            </Drawer>
    </div>
  )
}

export default DrawerComponent