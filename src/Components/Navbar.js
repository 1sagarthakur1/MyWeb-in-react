import React, { useState } from 'react'
// import {Routes, Route} from 'react-router-dom';
import '../Style/style.css'

import name_logo from '../Images/name_logo.png'
import { useNavigate } from 'react-router-dom';
// import IndiProjects from './IndiProjects';
import resume from '../Images/fp03_018-Sagar-Thakur-Resume.pdf';

export default function Navbar() {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1cY3DCC8RPUEoyPe051p3crc4I7qAMrNq/view?usp=sharing", "_blank")
  }

  const myFunction = (event) => {
    var x = document.getElementById("myTopnav");
    if (x.className === "drop_box_c") {
      x.className = 'drop_boxOpen';
    } else {
      x.className = "drop_box_c";
    }

  }
  const [bool, setBool] = useState(true);

  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/')
    setBool(true);
  }
  // const handleClick2 = () => {
  //   navigate('/indivisualP')
  //   setBool(false);
  // }

  const handleButtonClick1 = () => {
    myFunction();
    handleClick1();
  };
  // const handleButtonClick2 = () => {
  //   myFunction();
  //   handleClick2();
  // };

  const HASSCRI = document.getElementById("HASSCRI");
  const HASSCRIdropbox = document.getElementById("HASSCRIdropbox");
  if (bool === false) {
    if (HASSCRI && HASSCRIdropbox) {
      HASSCRI.style.display = 'none';
      HASSCRIdropbox.style.display = 'none'
    }
  }
  else if (bool === true) {
    if (HASSCRI && HASSCRIdropbox) {
      HASSCRI.style.display = 'flex';
      HASSCRIdropbox.style.display = 'flex'
    }
  }

  return (
    <>
      <nav>
        <div className="Navbar" id="navbar">
          <div className="logo">
            <img className='name_logo-nav' src={name_logo} alt="" />
          </div>
          <div className="all_links">
            <li id='home' onClick={handleClick1}><a href="#section1">Home</a></li>
            <div className='HASSCRI' id='HASSCRI'>
              <li id='aboutme'><a href="#section2"  >About me</a></li>
              <li id='skills'><a href="#section3" >Skills</a></li>
              <li id="service"><a href="#section4" >Service</a></li>
              <li id='contect'><a href="#section5">Contact</a></li>
              <li id='resume' onClick={openResume} href={resume} download><a href={resume} download >Resume</a></li>

              {/* <li id='indiProject' onClick={handleClick2}><a href="#section5">Individual Projects</a></li> */}
            </div>
          </div>
          <div onClick={myFunction} className="toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="drop_box_c" id="myTopnav">
          <li id='home' onClick={handleButtonClick1}><a href="#section1">Home</a></li>
          <div className='HASSCRIdropbox' id='HASSCRIdropbox'>
            <li id='aboutme' onClick={myFunction}><a href="#section2">About me</a></li>
            <li id='skills' onClick={myFunction}><a href="#section3">Skills</a></li>
            <li id="service" onClick={myFunction}><a href="#section4">Service</a></li>
            <li id='contect' onClick={myFunction}><a href="#section5">Contact</a></li>
            <li id='resume' onClick={myFunction} ><a href={resume} download>Resume</a></li>

            {/* <li id='indiProject' onClick={handleButtonClick2}><a href="#section5">Individual Projcets</a></li> */}
          </div>
        </div>
      </nav>
    </>
  )
}
