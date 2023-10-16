import React from 'react'
import '../../Style/style2.css'

import laptop from '../../Images/mac-laptop-png-13.png'
import mobile from '../../Images/mobo.png';

import weatherAppLAPview from '../../Images/weatherApplicationLAPTOPview.png';
import weatherAppMOBview from '../../Images/weatherApplicationMOBview.png';


export default function Iproject1() {
  return (
    <div className="Iproject1">
        <div className="IndiContainer">
            <div className="Ipr_left">
                <h1 className='IproHeading'>WeatherWise</h1>
                <p className='IproPeragraf'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I recently completed a significant project named 'WeatherWise,' where I designed and developed a feature-rich weather application. The objective of this project was to create a user-friendly platform that provides accurate and up-to-date weather information to users worldwide. WeatherWise offers real-time weather forecasts, next 15 days forecasts, and weather Images according to current conditions. It integrates with various weather data APIs The application supports multiple platforms, including web, iOS, and Android, and offers a sleek and intuitive user interface. It also incorporates geolocation services to provide location-specific weather updates.</p>
                <h2 className='IproTeckStecks'>Functionalitys:</h2>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-User can serach specific location</p>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-There 15 Days forecast</p>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-You can see diffrent diffrent images according current weather condition.</p>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Temprature, Max Temprature and Min Tamprature</p>
                <h2 className='IproTeckStecks'>Teck Stack:</h2>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React js, HTML, Css, JavaScript, npm, npx </p>
            </div>
            <div className="Ipr_right">
                <div className="Ipr_laptop">
                    <div className="Ilaptop">
                        <div className="laptopbackground">
                            <img className="laptopbackground_Img" src={weatherAppLAPview} alt=""/>
                        </div>
                        <img className="laptop" src={laptop} alt=""/>
                 </div>
                    <div className="Ilaptopdescrption">
                        <h1 className='resoposiveheadig'>Laptop Responsive</h1>
                        <p>My website is designed to be fully responsive. you access it from a desktop computer, laptop, or tablet.</p>
                        <h4>[scroll it]</h4>
                    </div>
                </div>
                <div className="Ipr_mobile">
                    <div className="Imobiledescrption">
                       <h1 className='resoposiveheadig'> Mobile Responsive</h1>
                       <p>Ensuring a smooth and engaging user experience across various devices and screen sizes. Whether you access it from a desktop computer, laptop, tablet, or smartphone, the website's layout and content automatically adjust to provide optimal readability and usability.</p>
                       <h4>[scroll it]</h4>
                    </div>
                    <div className="Imobile">
                        <div className="mobilebackground">
                            <img className="mobilebackground_Img" src={weatherAppMOBview} alt=""/>
                        </div>
                        <img className="mobile" src={mobile} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="auther">
            <button className="butto"><a href="https://github.com/1sagarthakur1/react-weather-application">Github</a></button>
            <button className="butto"><a href="https://1sagarthakur1.github.io/react-weather-application/">Visit</a></button>
        </div>
    </div>
  )
}
