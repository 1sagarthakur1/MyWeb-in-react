import React from 'react'
import '../../Style/style.css'

export default function Iprojects(props) {
  return (
    <div className="card">
      <div className="content">
        <p className="heading">{props.heading}</p>
        <div className="drop_card">
          <img className="bg" src={props.image} alt="" />
          <div className="blob"> </div>
        </div>
        <p className="para">{props.project_des1}</p>
        <p className="para" >{props.project_des2}<br/>
          {props.fun1}<br/>
          {props.fun2}<br/>
          {props.fun3}
        </p>
        <p className='para'><b>Tech stack : {props.tech_stack}</b></p>
        <div className="bottons_P">
          <a href={props.git_link} className="btn">GIT REPO</a>
          <a href={props.prsent_link} className="btn">Presentation</a>
        </div>
      </div>
      <div className="upon_Card">
        <img className="bg" src={props.image} alt="" />
        <div className="blob"> </div>
      </div>
    </div>
  )
}
