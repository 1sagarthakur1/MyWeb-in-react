import React from 'react'
import me from '../../Images/me.jpg'
import AboutMe from './AboutMe'

export default function Home() {
  function openResume(){
    window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
  }

  return (
    <>
       <section id="section1"></section>
        <div className='Home'>
            <div className='heading'>
              <h1>
                <span style={{"--i":"1",color:"#ff256d"}}>H</span>
                <span style={{"--i":"2",color:"#ff256d"}}>i</span>
                !
              </h1>
              <h3>
                <span style={{"--i":"3"}}>I &nbsp;</span>
                <span style={{"--i":"4"}}>am &nbsp;</span>
                <span style={{"--i":"6"}}>Sagar &nbsp;</span>
                <span style={{"--i":"11"}}>Thakur</span>
              </h3>
                 <h4>JAVA BACKEND DEVELOPER</h4>
            </div>
            <div className='Pic_Edu'>
                <div className='Pic_dropbox'>
                     <img className='mypic' src={me} alt="" />
                     <div className='dropbox'>
                      <p>Full Stack development course(Full time) Masai School Bangalore, Graduation BSc with (Math science) Barkatullah University Bhopal</p>  
                      <button className='Res_But'>
                          <span className="circle1"></span>
                          <span className="circle2"></span>
                          <span className="circle3"></span>
                          <span className="circle4"></span>
                          <span className="circle5"></span>
                          <div onclick={{openResume}}><a className='Resumebut' href="../Images/Sagar-Thakur-Resume.pdf" download="">Resume</a></div>
                      </button>
                     </div>
                </div>
                <div className='Education'>
                   <p>Full Stack development course(Full time) Masai School Bangalore, Graduation BSc with (Math science) Barkatullah University Bhopal</p>  
                    <button className='Res_But'>
                        <span className="circle1"></span>
                        <span className="circle2"></span>
                        <span className="circle3"></span>
                        <span className="circle4"></span>
                        <span className="circle5"></span>
                        <div onclick={{openResume}}><a className='Resumebut' href="../Images/Sagar-Thakur-Resume.pdf" download="">Resume</a></div>
                    </button>
                </div>
                <div className='education_line'>
                  <h1>EDUCATION</h1>
                  <div id="arrowAnim">
                    <div className="arrowSliding">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </div>
            </div>
            <AboutMe/>
       </div>
    </>
  )
}
