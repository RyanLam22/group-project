import React from 'react'
import './header.css'
import builder  from '../../assets/builder.png'
import Builder from '../builder/Builder';

const Header = () => (
    <div>
    <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="header-content__input">
        <button type="button">Get Started</button>
      </div>
    </div>
    <div className="header-image">
      <img src={builder} />
    </div>
  </div>
  </div>
);


export default Header
