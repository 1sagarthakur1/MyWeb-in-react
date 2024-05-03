import React from 'react'

import laptop from '../../Images/mac-laptop-png-13.png'
import mobile from '../../Images/mobo.png';

export default function ProjectShower(props) {

    const functionalitys = props.functionalitys;
    const tackstack = props.tackStack;
    console.log(tackstack);
    return (
        <div className="Iproject1">
            <div className="IndiContainer">
                <div className="Ipr_left">
                    <h1 className='IproHeading'>{props.name}</h1>
                    <p className='IproPeragraf'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.description}</p>
                    <h2 className='IproTeckStecks'>Functionalitys:</h2>
                    <ul>
                        {functionalitys.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2 className='IproTeckStecks'>Tech Stack:</h2>
                    <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {tackstack.map((item, index) => (
                            <span key={index}>
                                {item}
                                {index !== tackstack.length - 1 && " | "}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="Ipr_right">
                    <div className="Ipr_laptop">
                        <div className="Ilaptop">
                            <div className="laptopbackground">
                                <img className="laptopbackground_Img" src={props.weatherAppLAPview} alt="" />
                            </div>
                            <img className="laptop" src={laptop} alt="" />
                        </div>
                        <div className="Ilaptopdescrption">
                            <h1 className='resoposiveheadig'>Laptop Responsive</h1>
                            <p>{props.laptopDesc}</p>
                            <h4>[scroll it]</h4>
                        </div>
                    </div>
                    <div className="Ipr_mobile">
                        <div className="Imobiledescrption">
                            <h1 className='resoposiveheadig'> Mobile Responsive</h1>
                            <p>{props.mobileDesc}</p>
                            <h4>[scroll it]</h4>
                        </div>
                        <div className="Imobile">
                            <div className="mobilebackground">
                                <img className="mobilebackground_Img" src={props.weatherAppMOBview} alt="" />
                            </div>
                            <img className="mobile" src={mobile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="auther">
                <a href={props.github} target="_blank" rel="noreferrer"> <button className="butto">Github</button></a>
                <a href={props.visit} target="_blank" rel="noreferrer"><button className="butto">Visit</button></a>
            </div>
        </div>
    )
}
