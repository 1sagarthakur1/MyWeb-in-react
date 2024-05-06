import React from 'react'
import '../../Style/style.css'
import resume from '../../Images/fp03_018-Sagar-Thakur-Resume.pdf'

export default function AboutMe() {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
  }
  return (
    <>
      <section id='section2'></section>
      <div className='summery'>
        <h1>About me</h1>
        <p>As a seasoned Java developer with a robust background spanning over seven projects, I specialize in infrastructure-related components and platform development, alongside optimizing existing environments. Proficient in Java, JavaScript, React.js, Next.js, Node.js, MongoDB, HTML, CSS, MySQL, and various RDBMS, I am keen on backend development. I am eager to take on new challenges, continuously learn, and contribute effectively towards mutual goals in any professional environment.</p>
        <button className='Res_But'>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <div onClick={openResume}><a className='Resumebut' href={resume} download>Resume</a></div>
        </button>
      </div>

      <div className='div_summery'>
        <h1>About me</h1>
        <p>As a seasoned Java developer with a robust background spanning over seven projects, I specialize in infrastructure-related components and platform development, alongside optimizing existing environments. Proficient in Java, JavaScript, React.js, Next.js, Node.js, MongoDB, HTML, CSS, MySQL, and various RDBMS, I am keen on backend development. I am eager to take on new challenges, continuously learn, and contribute effectively towards mutual goals in any professional environment.</p>
        <button className='Res_But'>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <div onClick={openResume}><a className='Resumebut' href={resume} download>Resume</a></div>
        </button>
      </div>
    </>
  )
}
