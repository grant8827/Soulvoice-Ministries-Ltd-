import React from 'react'
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className='pagesMain'>
      <div className='pagesContainer'>
        <h3 style={{textDecoration:'underline', margin:'20px'}}>Contact</h3>
<div className='contactInfo' style={{display:'flex', }}>
  <div style={{width:'100%'}}>
    <p style={{marginTop:'20px'}}><h4>Tel:</h4><Link to="tel:876-537-6457">876-537-6457</Link></p>
    <p style={{marginTop:'20px',}}><h4>Email:</h4><Link to="mailto:soulvoiceministries@gmail.com">soulvoiceministries@gmail.com</Link> </p>
  </div>
 
</div>
      </div>
    </div>
  )
}

export default Contact