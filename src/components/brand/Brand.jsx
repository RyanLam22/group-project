import React from 'react'
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png'
import './brand.css'

const Brand = () => {
  return (
    <div className='brand section_padding'>
      <div>
        <img src={google} alt="google"/>
      </div>
      <div>
        <img src={linkedin}  alt="linkedin"/>
      </div>
    </div>
  )
}

export default Brand
