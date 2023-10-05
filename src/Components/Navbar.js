import React from 'react'
import '../Style/style.css'

import name_logo from '../Images/name_logo.png'

export default function Navbar() {
  function openResume(){
      window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
  }
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <img className='name_logo' src={name_logo} alt="" />
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <div><a href="#section1">Home</a></div>
          <div><a href="#section2">About Me</a></div>
          <div><a href="#section3">Skills</a></div>
          <div><a href="#section4">Projects</a></div>
          <div><a href="#section5">Contact</a></div>
          <div onclick={{openResume}}><a className='Resumebut' href="../Images/Sagar-Thakur-Resume.pdf" download="">Resume</a></div>
        </div>
     </div>
    </>
  )
}
