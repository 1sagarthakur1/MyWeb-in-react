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
        <p className="para" >- {props.project_des2}
          <h3>Functionalitys:</h3>
          <ul>
            {props.functionalty && Array.isArray(props.functionalty) && props.functionalty.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </p>
        <p className='para'><h3>Tech stack :</h3> {props.tech_stack}</p>
        <div className="bottons_P">
          <a href={props.git_link} className="btn" target="_blank" rel="noreferrer">GIT REPO</a>
          <a href={props.prsent_link} className="btn" target="_blank" rel="noreferrer">Presentation</a>
        </div>
      </div>
      <div className="upon_Card">
        <img className="bg" src={props.image} alt="" />
        <div className="blob"> </div>
      </div>
    </div>
  )
}
