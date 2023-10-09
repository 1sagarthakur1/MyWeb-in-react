import React from 'react'
import '../Style/style.css'

import name_logo from '../Images/name_logo.png'

export default function Navbar() {
  function openResume(){
      window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if(x.className === "drop_box_c"){
      x.className = 'drop_boxOpen';
    }else{
      x.className = "drop_box_c";
    }
  }
  
  return (
    <>
    <nav>
        <div className="Navbar" id="navbar">
            <div className="logo">
              <img className='name_logo' src={name_logo} alt="" />
            </div>
            <div className="all_links">
              <li><a href="#section1">Home</a></li>
              <li><a href="#section2">About me</a></li>
              <li><a href="#section3">Skills</a></li>
              <li><a href="#section4">Service</a></li>
              <li><a href="#section5">Contect</a></li>
              <li onClick={openResume}><a href="#section5">Resume</a></li>
            </div>
            <div onClick={myFunction} className="toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
        <div className="drop_box_c" id="myTopnav">
              <li onClick={myFunction}><a href="#section1">Home</a></li>
              <li onClick={myFunction}><a href="#section2">About me</a></li>
              <li onClick={myFunction}><a href="#section3">Skills</a></li>
              <li onClick={myFunction}><a href="#section4">Service</a></li>
              <li onClick={myFunction}><a href="#section5">Contect</a></li>
              <li onClick={myFunction}><a href="#section5">Resume</a></li>
        </div>
      </nav>
    </>
  )
}
