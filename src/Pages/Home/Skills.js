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
              <Iskills name="JAVA" img={java} details="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."/>
              <Iskills name="My SQL" img={mysql} details="MySQL is a widely used relational database management system (RDBMS). MySQL is free and open-source. MySQL is ideal for both small and large applications."/>
              <Iskills name="Hibernate" img={hyber} details="Hibernate ORM is an object–relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database."/>
              <Iskills name="Spring Boot" img={springboot} details="Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications"/>
              <Iskills name="Mavan" img={meven} details="Maven is a powerful project management tool that is based on POM (project object model). It is used for projects build, dependency and documentation."/>
              <Iskills name="Rest API" img={Restapi} details="A REST API (also known as RESTful API) is an application programming interface that conforms to the constraints of REST architecture."/>
              <Iskills name="HTML" img={html} details="HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content."/>
              <Iskills name="CSS" img={css} details="CSS, or Cascading Style Sheets, offers a flexible way to style web content, with styles originating from browser defaults, user preferences, or web designers."/>
              <Iskills name="JavaScript" img={script} details="avaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."/>
              <Iskills name="React" img={react} details="React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."/>
              <Iskills name="Bootstrap" img={bootstrap} details="Bootstrap 5 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites."/>
            </div>
        </div>
    </>
  )
}
