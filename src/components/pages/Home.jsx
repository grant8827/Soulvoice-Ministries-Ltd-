import React from 'react';
import { Link } from 'react-router-dom';
import "./pageStyles.css";
import RadioPlayer from '../comps/homeComponents/RadioPlayer';
import ApostleKGordon from '../assets/images/ApostleKGordon.png';
import Bonner from '../comps/homeComponents/Bonner';
function Home() {
  return (
    <div className='homePageBody'>
        <div className='homeMain'>
         <div className='radioPlayer'>
           <div className="radioPlayerText">
           <RadioPlayer/>
          </div>

          <div className='radioPlayerText' >
            <h3 style={{marginBottom:'20px', marginLeft:'10PX'}}>Soulvoice Ministries Radio</h3>
            <p style={{marginLeft:'10PX'}}>24 hours per day 7 days per week non stop Gospel music & the word of God</p>
          </div>
          </div> 
          <Bonner/>
          <div className="ownersDetails" style={{display:'flex', justifyContent:'space-around', marginTop:'50px', marginBottom:'80px'}}>
            <div style={{width:'400px', textAlign:'left', marginLeft:'20px'}}>
              <h3 style={{margin:'20px'}}>CEO : Apostle K. Gordon </h3>
              <p style={{margin:'20px', marginBottom:'30px' }}> Our aim is to spread the gospel of truth worldwide, we are a non denominational organisation.</p>
              <buttom className="ownerDetailbtn"><Link style={{color:'white', fontSize:'18px', textDecoration:'none'}} to="/About">Read More</Link></buttom>

            </div>
            <div style={{width:'400px', textAlign:'center'}}>
              <img style={{width:'250px'}} src={ApostleKGordon} title='Apostle K Gordon' alt='Apostle K Gordon'/>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Home