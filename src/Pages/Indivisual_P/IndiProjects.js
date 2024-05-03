import React, { Component } from 'react'
import '../../Style/style2.css';
import '../../Style/indivisul.css';
import ProjectShower from '../../Components/InnerComponents/ProjectShower'

import weatherAppLAPview from '../../Images/weatherApplicationLAPTOPview.png';
import weatherAppMOBview from '../../Images/weatherApplicationMOBview.png';

import buyPappLAPview from '../../Images/BuyPlaptopView.png';
import buyPmOBview from '../../Images/BuyPmobileView.png';

import CountributeUIlmain from '../../Images/ContributUI/contributeUImain.png';
import contributeUI1 from '../../Images/ContributUI/contributeUI1.png';
import contributeUI2 from '../../Images/ContributUI/contributeUI2.png';
import contributeUI3 from '../../Images/ContributUI/contributeUI3.png';
import contributeUI4 from '../../Images/ContributUI/contributeUI4.png';

export class IndiProjects extends Component {
  render() {
    const project = [
      {
        Name: 'WeatherWise',
        Description: "I recently finished 'WeatherWise,' a feature-rich weather app. Its goal? Provide accurate, up-to-date global weather info. Real-time and 15-day forecasts, current condition images, and integration with various weather APIs. Works on web, iOS, and Android, with a user-friendly interface and geolocation for precise weather updates.",
        Functionalitys: [
          "Users can search for a specific location.",
          "There is a 15-day forecast available.",
          "Different images corresponding to the current weather conditions can be viewed.",
          "Temperature, maximum temperature, and minimum temperature are provided."
        ],
        TackStack: [
          "React js",
          "HTML",
          "Css",
          "JavaScript",
          "npm",
          "npx"
        ],
        WeatherAppLAPview: weatherAppLAPview,
        WeatherAppMOBview: weatherAppMOBview,
        LaptopDesc: "My website is designed to be fully responsive. you access it from a desktop computer, laptop, or tablet.",
        MobileDesc: "Ensuring a smooth and engaging user experience across various devices and screen sizes. Whether you access it from a desktop computer, laptop, tablet, or smartphone, the website's layout and content automatically adjust to provide optimal readability and usability.",
        Github: "https://github.com/1sagarthakur1/react-weather-application",
        Visit: "https://1sagarthakur1.github.io/react-weather-application/"
      },
      {
        Name: 'E-commerce website (BuyP)',
        Description: "BuyP is a meticulously crafted e-commerce platform offering seamless shopping. Developed within two weeks, it showcases user-centric design and intuitive navigation. With a diverse product range and robust backend, BuyP blends aesthetics with functionality. Empowering secure browsing and transactions, it sets a new standard in online retail.",
        Functionalitys: [
            "Users can search for products using the search bar.",
            "Users can log in or sign up.",
            "The platform features mail integration, providing OTPs for registration and password recovery.",
            "Users can add or remove products from their cart.",
            "Users have access to their accounts, allowing them to edit details.",
            "Users can place orders for products.",
            "Order status is available."
        ],
        TackStack: [
            "React.js",
            "Next.js",
            "Node.js",
            "Exprass.js",
            "MongoDB / Mongoose",
            "HTML",
            "CSS",
            "JavaScript",
            "npm",
            "npx"
        ],
        WeatherAppLAPview: buyPappLAPview,
        WeatherAppMOBview: buyPmOBview,
        LaptopDesc: "My website is designed to be fully responsive. you access it from a desktop computer, laptop, or tablet.",
        MobileDesc: "Ensuring a smooth and engaging user experience across various devices and screen sizes. Whether you access it from a desktop computer, laptop, tablet, or smartphone, the website's layout and content automatically adjust to provide optimal readability and usability.",
        Github: "https://github.com/1sagarthakur1/BuyP_Frontend_App",
        Visit: "https://buy-p-frontend-app.vercel.app/"
    }
    ]

    return (
      <div className='Indivisual-pro'>
        <ProjectShower
          name={project[0].Name}
          description={project[0].Description}
          functionalitys={project[0].Functionalitys}
          tackStack={project[0].TackStack}
          weatherAppLAPview={project[0].WeatherAppLAPview}
          weatherAppMOBview={project[0].WeatherAppMOBview}
          laptopDesc={project[0].LaptopDesc}
          mobileDesc={project[0].MobileDesc}
          github={project[0].Github}
          visit={project[0].Visit}
        />
        <hr margin="0px 50px" color='pink' />
        <ProjectShower
          name={project[1].Name}
          description={project[1].Description}
          functionalitys={project[1].Functionalitys}
          tackStack={project[1].TackStack}
          weatherAppLAPview={project[1].WeatherAppLAPview}
          weatherAppMOBview={project[1].WeatherAppMOBview}
          laptopDesc={project[1].LaptopDesc}
          mobileDesc={project[1].MobileDesc}
          github={project[1].Github}
          visit={project[1].Visit}
        />

        <h1>For You</h1>
        <div className="contributeUIproject">
          <h1>Contribute UI</h1>
          <p>Welcome to our Contribute UI, where creativity meets simplicity! With our intuitive platform, users can effortlessly design stunning div elements for their web projects. Whether you're a seasoned developer or just starting out, our user-friendly interface empowers you to craft visually appealing divs with ease. Best of all, the generated code is readily available and completely free, ensuring accessibility for all aspiring designers and developers. Dive in and bring your web design ideas to life!</p>
          <i>This project is in the process of creation, you can use the creativity feature.The new update will come soon.</i>
          <div className='contributUIimagesDIV'>
            <div>
              <img src={CountributeUIlmain} alt='not found' />
            </div>
            <div className='contributeUImoreIMAGES'>
              <h2>You can create</h2>
              <div>
                <img src={contributeUI1} alt='not found' />
                <img src={contributeUI2} alt='not found' />
                <img src={contributeUI3} alt='not found' />
                <img src={contributeUI4} alt='not found' />
                <span>more designs..</span>
              </div>
              <button><a href='https://contributeui.netlify.app/'>Try it</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndiProjects
