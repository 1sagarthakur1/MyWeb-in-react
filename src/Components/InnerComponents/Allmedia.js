import React, { Component } from 'react'
import instagram from '../../Images/Instagram.png';
import tiwwiter from '../../Images/tiwwiter.png';
import facebook from '../../Images/facebook.png';
import linkedin from '../../Images/Linkedin.png';
export class Allmedia extends Component {
  render() {
    return (
      <div className="social-buttons">
        <div className='social-button'>
          <a href="https://www.instagram.com/sagarsingh_thakur5028/"><img src={instagram}alt="" /></a>
        </div>
        <div className='social-button'>
          <a href="/"><img src={tiwwiter} alt="" /></a>
        </div>
        <div className='social-button'>
          <a href="https://www.facebook.com/sagarsinghthakur123/"><img src={facebook} alt="" /></a>
        </div>
        <div className='social-button'>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img src={linkedin} alt="" /></a>
        </div>
      </div>
    )
  }
}

export default Allmedia
