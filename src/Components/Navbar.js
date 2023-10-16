import React, { useState } from 'react'
// import {Routes, Route} from 'react-router-dom';
import '../Style/style.css'

import name_logo from '../Images/name_logo.png'
import { useNavigate } from 'react-router-dom';
// import IndiProjects from './IndiProjects';

export default function Navbar() {
  const openResume = () =>{
      window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
  }

  const  myFunction = () => {
    var x = document.getElementById("myTopnav");
    
    if(x.className === "drop_box_c"){
      x.className = 'drop_boxOpen';
    }else{
      x.className = "drop_box_c";
    }
  }
  const [bool,setBool] = useState(true);

  const navigate = useNavigate();

  const handleClick1 = () =>{
    navigate('/')
    setBool(true);
  }
  const handleClick2 = () =>{
    navigate('/indivisualP')
    setBool(false);
  }

  const handleButtonClick1 = () => {
      myFunction();
      handleClick1();
  };
  const handleButtonClick2 = () => {
    myFunction();
    handleClick2();
};


if(bool===false){
  const aboutme = document.getElementById("aboutme");
  aboutme.style.display = 'none';
  const skills = document.getElementById("skills");
  skills.style.display = 'none';
  const service = document.getElementById("service");
  service.style.display = 'none';
  const contect = document.getElementById("contect");
  contect.style.display = 'none';
  const resume = document.getElementById("resume");
  resume.style.display = 'none';
  const indiProject = document.getElementById("indiProject");
  indiProject.style.display = 'none';
}
else if(bool===true){
  const aboutme = document.getElementById("aboutme");
  aboutme.style.display = 'block';
  const skills = document.getElementById("skills");
  skills.style.display = 'block';
  const service = document.getElementById("service");
  service.style.display = 'block';
  const contect = document.getElementById("contect");
  contect.style.display = 'block';
  const resume = document.getElementById("resume");
  resume.style.display = 'block';
  const indiProject = document.getElementById("indiProject");
  indiProject.style.display = 'block';
}
  
  return (
    <>
    <nav>
        <div className="Navbar" id="navbar">
            <div className="logo">
              <img className='name_logo' src={name_logo} alt="" />
            </div>
            <div className="all_links">
              <li id='home' onClick={handleClick1}><a href="#section1">Home</a></li>
              <li id='aboutme'><a href="#section2">About me</a></li>
              <li id='skills'><a href="#section3">Skills</a></li>
              <li id="service"><a href="#section4">Service</a></li>
              <li id='contect'><a href="#section5">Contect</a></li>
              <li id='resume' onClick={openResume}><a href="#section5">Resume</a></li>
              <li id='indiProject' onClick={handleClick2}>Indivisual Projects</li>
            </div>
            <div onClick={myFunction} className="toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
        <div className="drop_box_c" id="myTopnav">
              <li id='home' onClick={handleButtonClick1}><a href="#section1">Home</a></li>
              <li id='aboutme' onClick={myFunction}><a href="#section2">About me</a></li>
              <li id='skills'onClick={myFunction}><a href="#section3">Skills</a></li>
              <li id="service" onClick={myFunction}><a href="#section4">Service</a></li>
              <li id='contect' onClick={myFunction}><a href="#section5">Contect</a></li>
              <li id='resume' onClick={myFunction}><a href="#section5">Resume</a></li>
              <li id='indiProject' onClick={handleButtonClick2}><a href="#section5">Indivisual Projcets</a></li>
        </div>
      </nav>
    </>
  )
}
