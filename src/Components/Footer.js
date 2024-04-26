import React, { Component } from 'react'
import name_logo from '../Images/name_logo.png'

import Iwatch from './InnerComponents/Iwatch'
import Allmedia from './InnerComponents/Allmedia'
export class Footer extends Component {
  render() {
    return (
        <>
            <div className='footer_card'>
                <div className='bgimg'>
                    <div className='log_comment'>
                       <img className='name_logo' src={name_logo} alt="" />
                       <h1>Comment On Own Position</h1>
                    </div>
                    <div className='time_dropbox'>
                      <Iwatch/>
                    </div>
                    <div className='All_footer_containt'>
                          <div className='footer_containt'>
                              <ul>
                                <li className='first_li'><h3>Pointers</h3></li>
                                <li>Home</li>
                                <li>About me</li>
                                <li>Skills</li>
                                <li>Project</li>
                                <li>Contect</li>
                                <li>Resume</li>
                                <li>Stars</li>
                              </ul>
                          </div>
                          <div className='footer_containt'>
                              <ul>
                                  <li className='first_li'><h3>Programing</h3></li>
                                  <li>Java</li>
                                  <li>JavaScript</li>
                                  <li>Python</li>
                                  <li>Html</li>
                                  <li>CSS</li>
                                  <li>React</li>
                                  <li>Spring Boot</li>  
                                  <li>MySQL</li>
                                </ul>
                          </div>
                          <div className='footer_containt'>
                                <ul>
                                    <li className='first_li'><h3>Services</h3></li>
                                    <li>Web Services</li>
                                    <li>Web Design</li>
                                    <li>Rest API(node.js)</li>
                                    <li>Rest API(java)</li>
                                    <li>Problems So.</li>
                                    <li>Data</li>
                                    
                                  </ul>
                          </div>
                        
                          <div className='footer_containt' id='last_footer_containt'>
                            <Iwatch/>
                            <Allmedia/>
                          </div>
                     </div>
                     <div className='media_dropbox'>
                        <Allmedia/>
                     </div>
                     <div className='copyRight'>© 2022 All rights reserved</div>
                </div>
            </div>
        </>
    )
  }
}

export default Footer

