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
        Description: "I recently completed a significant project named 'WeatherWise,' where I designed and developed a feature-rich weather application. The objective of this project was to create a user-friendly platform that provides accurate and up-to-date weather information to users worldwide. WeatherWise offers real-time weather forecasts, next 15 days forecasts, and weather Images according to current conditions. It integrates with various weather data APIs The application supports multiple platforms, including web, iOS, and Android, and offers a sleek and intuitive user interface. It also incorporates geolocation services to provide location-specific weather updates.",
        Functionalitys: [
          "User can serach specific location",
          "There 15 Days forecast",
          "You can see diffrent diffrent images according current weather condition.",
          "Temprature, Max Temprature and Min Tamprature",
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
        Description: "BuyP is a meticulously crafted e-commerce platform designed to provide users with a seamless shopping experience. As an individual project, it embodies my dedication and expertise in web development, culminating in a polished product delivered within a tight timeframe of two weeks. With a focus on user-centric design and intuitive navigation, BuyP offers a diverse range of products, ensuring customers find precisely what they need with ease. From its sleek interface to robust backend functionality, BuyP represents a harmonious fusion of aesthetics and functionality. Empowering users to browse, shop, and transact securely, BuyP sets a new standard for online retail.",
        Functionalitys: [
          "User can serach product from search bar",
          "User can longin / sginup",
          "There is mail integration you will receive otp register and forgot password time",
          "Add product in card, and remove also",
          "You can visit user account, and edit details",
          "User can order product",
          "Order status"
        ],
        TackStack: [
          "React.js",
          "Next.js",
          "Node.js",
          "Exprass.js",
          "MongoDB / Mongoose",
          "HTML",
          "Css",
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
