import React from 'react'
// import {Routes, Route} from 'react-router-dom';
import '../Style/style.css'

import name_logo from '../Images/name_logo.png'
import { useNavigate } from 'react-router-dom';
// import IndiProjects from './IndiProjects';

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

  const navigate = useNavigate();

  function handleClick1(){
    navigate('/')
  }
  function handleClick2(){
    navigate('/indivisualP')
  }

  const handleButtonClick1 = () => {
      myFunction();
      handleClick1();
  };
  const handleButtonClick2 = () => {
    myFunction();
    handleClick2();
};

  
  return (
    <>
    <nav>
        <div className="Navbar" id="navbar">
            <div className="logo">
              <img className='name_logo' src={name_logo} alt="" />
            </div>
            <div className="all_links">
              <li onClick={handleClick1}><a href="#section1">Home</a></li>
              <li><a href="#section2">About me</a></li>
              <li><a href="#section3">Skills</a></li>
              <li><a href="#section4">Service</a></li>
              <li><a href="#section5">Contect</a></li>
              <li onClick={openResume}><a href="#section5">Resume</a></li>
              <li onClick={handleClick2}>Indivisual Projects</li>
            </div>
            <div onClick={myFunction} className="toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
        <div className="drop_box_c" id="myTopnav">
              <li onClick={handleButtonClick1}><a href="#section1">Home</a></li>
              <li onClick={myFunction}><a href="#section2">About me</a></li>
              <li onClick={myFunction}><a href="#section3">Skills</a></li>
              <li onClick={myFunction}><a href="#section4">Service</a></li>
              <li onClick={myFunction}><a href="#section5">Contect</a></li>
              <li onClick={myFunction}><a href="#section5">Resume</a></li>
              <li onClick={handleButtonClick2}><a href="#section5">Indivisual Projcets</a></li>
        </div>
      </nav>
    </>
  )
}
