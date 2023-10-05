import React from 'react'
import '../../Style/style.css'
export default function Iskills(props) {
  return (
    <div className="serviceimgbox">
        <img src={props.img} alt="/" />
        <div className="middle">
            <div className="text">{props.name}</div>
        </div>
        <div className="name_service">{props.name}</div>
    </div>
  )
}
