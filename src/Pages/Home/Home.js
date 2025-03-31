import React from 'react'
import First1 from './First1'
import Skills from './Skills'
import Tools from './Tools'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'
import Stars from './Stars'
import Calender from './GitHubCalendar'
import bg from '../../Images/5_asfasw112.jpg';

export default function Home() {
  return (
    <div>
      <First1 src={bg} alt="Description" className="Home"/>
      <Skills/>
      <Tools/>
      <Service/>
      <Project/>
      <Contact/>
      <Stars/>
      <Calender/>
    </div>
  )
}
