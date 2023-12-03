import React from 'react'
import Logo  from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div  className="footer  section padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to know more about our service</h1>
      </div>
      <div className="footer-btn">
      <p>Contact Us</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
