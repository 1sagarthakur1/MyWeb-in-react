import React from 'react'
import '../../Style/style.css'
import Iskills from '../../Components/InnerComponents/Iskills'

import java from '../../Images/java-logo-1.png';
import mysql from '../../Images/MySQL-Logo.png'
import hyber from '../../Images/STS.png';
import springboot from '../../Images/spring boot.png';
import meven from '../../Images/Maven.png';
import Restapi from '../../Images/Rest Api.png';
import html from '../../Images/Html.png';
import css from '../../Images/css3-logo.png';
import script from '../../Images/JavaScript-Logo.png';
import react from '../../Images/react_logo-freelogovectors.net_.webp';
import bootstrap from '../../Images/Bootstrap_logo.svg.png';

export default function Skills() {
  return (
    <>
       <section id='section3'></section>
        <div className='Skills'>
            <h1>My Skills</h1>
            <div>
              <Iskills name="JAVA" img={java}/>
              <Iskills name="My SQL" img={mysql}/>
              <Iskills name="Hibernate" img={hyber}/>
              <Iskills name="Spring Boot" img={springboot}/>
              <Iskills name="Mavan" img={meven}/>
              <Iskills name="Rest API" img={Restapi}/>
              <Iskills name="HTML" img={html}/>
              <Iskills name="CSS" img={css}/>
              <Iskills name="JavaScript" img={script}/>
              <Iskills name="React" img={react}/>
              <Iskills name="Bootstrap" img={bootstrap}/>
            </div>
        </div>
    </>
  )
}
