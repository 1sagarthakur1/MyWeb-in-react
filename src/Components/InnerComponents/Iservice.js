import React from 'react'
import '../../Style/style.css'
export default function Iservice(props) {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={props.img} alt=""/>
            </div>
            <div className="flip-card-back">
                <p className="title">{props.name}</p>
                <p>{props.lang}</p>
            </div>
        </div>
    </div>
  )
}
