import React from 'react'
import './CSSFile/Footer.css'

var today = new Date();

const Footer = () => {
  return (
    <>
    <div className='lastpart'>
      <h5 >Team Member Allocation - {today.getFullYear()}</h5>
      
      </div>
    </>
  )
}

export default Footer
