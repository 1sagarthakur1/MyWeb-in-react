import React, { useEffect, useRef, useState } from 'react'
import me from '../../Images/me-poBG.jpg'
import AboutMe from './AboutMe'
import resume from '../../Images/fp03_018-Sagar-Thakur-Resume.pdf'
import MyEducation from './MyEducation';

export default function First1({ src, alt, className }) {
  const [bodyWidth, setBodyWidth] = useState(0);

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1cY3DCC8RPUEoyPe051p3crc4I7qAMrNq/view?usp=sharing", "_blank")
  }

  useEffect(() => {
    const updateBodyWidth = () => {
      setBodyWidth(document.body.clientWidth);
    };

    updateBodyWidth();
    window.addEventListener('resize', updateBodyWidth);

    return () => {
      window.removeEventListener('resize', updateBodyWidth);
    };
  }, []); 


  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When background becomes visible, load the image
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '0px', // Adjust as needed
        threshold: 0.1 // Adjust as needed
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const backgroundImageStyle = isVisible ? { backgroundImage: `url(${src})` } : {};

  return (
    <>
      <section id="section1"></section>
      <div ref={ref} className={`${className} lazy-background`} style={backgroundImageStyle}>
        <div className='heading' style={{display:bodyWidth>=650?"none":"block"}}>
          <h1>
            <span style={{ "--i": "1", color: "#ff256d" }}>H</span>
            <span style={{ "--i": "2", color: "#ff256d" }}>i</span>
            !
          </h1>
          <h3>
            <span style={{ "--i": "3" }}>I &nbsp;</span>
            <span style={{ "--i": "4" }}>am &nbsp;</span>
            <span style={{ "--i": "6" }}>Sagar &nbsp;</span>
            <span style={{ "--i": "11" }}>Thakur</span>
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
                <div onClick={openResume}><a className='Resumebut' href={resume} download>Resume</a></div>
              </button>
            </div>
          </div>
          <div className='Education'>
            {/* <p>Full Stack development course(Full time) Masai School Bangalore, Graduation BSc with (Math science) Barkatullah University Bhopal</p> */}
            <div className='heading' style={{display:bodyWidth>650?"inline":"none"}}>
              <h1>
                <span style={{ "--i": "1", color: "#ff256d" }}>H</span>
                <span style={{ "--i": "2", color: "#ff256d" }}>i</span>
                !
              </h1>
              <h3>
                <span style={{ "--i": "3" }}>I &nbsp;</span>
                <span style={{ "--i": "4" }}>am &nbsp;</span>
                <span style={{ "--i": "6" }}>Sagar &nbsp;</span>
                <span style={{ "--i": "11" }}>Thakur</span>
              </h3>
              <h4>JAVA BACKEND DEVELOPER</h4>
            </div>
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
        <AboutMe />
        {bodyWidth>=470 ? <MyEducation/> : ""}
      </div>
    </>
  )
}
