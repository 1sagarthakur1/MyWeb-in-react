import React from 'react'
import '../../Style/style.css'
import Iservice from '../../Components/InnerComponents/Iservice'

import backend from '../../Images/Back End.png'
import frontend from '../../Images/Front End.png'
import dsa from '../../Images/DSA.png'
export default function Service() {
  return (
    <>
        <section id='section4'></section>
        <div className='service'>
            <h1>Service</h1>
            <div>
                <Iservice img={backend} name="BACKEND WITH" lang="Java, JavaScript, Phython, MySQL "/>
                <Iservice img={frontend} name="FRONTEND WITH" lang="Html, Css, JavaScript, React, Bootstrap"/>
                <Iservice img={dsa} name="DSA WITH" lang="Java / JavaScript"/>
            </div>
        </div>
    </>
  )
}
