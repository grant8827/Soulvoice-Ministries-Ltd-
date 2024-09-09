import React from 'react';
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div className='pagesMain' >
  
<div className='pagesContainer' >
<div id='services1'  style={{margin:'20px'}}>
          <h3>Graphics Design,</h3>
            <p style={{marginTop:'10px'}}>Poster, Flyer, Business Card, Programs, Logo, Banner </p>
        </div>
        <div id='services2'  style={{margin:'20px'}}>
          <h3>Live Streaming</h3>
            <p style={{marginTop:'10px'}}> Concert, Rally, Convention, Graduation, Business & Company Launch, Advertisment Video & Audio Commercials</p>
        </div>
        <div id='services3' style={{margin:'20px'}}>
          <h3>Licence & Ordination</h3>
            <p style={{marginTop:'10px'}}>for Any Office in the Church. </p>
        </div>
        <button style={{backgroundColor:'brown', borderRadius:'20px', padding:'8px', margin:'20px'}}><Link style={{textDecoration:'none', color:'white'}} to="/Contact">More Info</Link></button>
</div>
       
    </div>
  )
}

export default Services