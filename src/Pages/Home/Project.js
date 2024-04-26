import React from 'react'
import Iprojects from '../../Components/InnerComponents/Iprojects'
import '../../Style/style.css'

import Proimg1 from '../../Images/Crime INMS.png';
import Proimg2 from '../../Images/pharmeasey.png';
import Proimg3 from '../../Images/bewakoof.png';
import Proimg4 from '../../Images/cricket.png';

import weatherAppLAPview from '../../Images/BuyPlaptopView.png';
import weatherAppMOBview from '../../Images/BuyPmobileView.png';

import ProjectShower from '../../Components/InnerComponents/ProjectShower';

export default function Project() {
    var project = [
        {
            heading: "Crime Information Management System",
            project_des1: "Crime Information Management System,This is my java Backend (crime information management system) project,it was my individual project, I tried to make it best, you can see. I used there java programing language and for database I am using MYsql.",
            project_des2: "It was an Console based project. I tried to create here crime information management system. I have added there much functionality",
            functionalty: {
                fun1: "- In this project, I have made logging functionality.",
                fun2: "- Solve and unsolve crime.",
                fun3: "- See all crimes with criminal details.",
                fun4: ""
            },
            tech_stack: " Java, MySQL, JDBC",
            git_link: "https://github.com/1sagarthakur1/crime-information-management-system-",
            prsent_link: "https://drive.google.com/file/d/1CEb9s_TSPVRvFR25gy273gmlHOPlHWq3/view?usp=sharing",
            image: Proimg1
        },
        {
            heading: "Clone of Pharmeasy website",
            project_des1: "This is My Pharmeasy Project.PharmEasy is a consumer healthcare 'super app' that provides consumers with on-demand. home deliverd access to wid range fo prescription. we have tried to make it clone. we learned a lot from this.",
            project_des2: "It was a group project of 6 members and contributed the following things.in this project, I have made the navbar, Home page and popup window functionality. We used tools in it.",
            functionalty: {
                fun1: "",
                fun2: "",
                fun3: "",
                fun4: ""
            },
            tech_stack: " HTML / CSS / javascript / fatching API / Import-Export",
            git_link: "https://github.com/vinaykumar2n/project_pharmeasy",
            prsent_link: "https://papaya-salmiakki-482569.netlify.app/sagar%20and%20pravhat/navbarforhome",
            image: Proimg2
        },

        {
            heading: "Clone of Bewakoof",
            project_des1: "Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness. With a team of 400 members, and 8 Million+ products sold till date.",
            project_des2: "I was assigned the team leader by the Masai School and it was a wonderful experience while leading a team of 5 members. I contributed the following things. in this project, I have made signup and logging functionality. Home page import-export functionality. We used tools in it.",
            functionalty: {
                fun1: "",
                fun2: "",
                fun3: "",
                fun4: ""
            },
            tech_stack: "HTML / CSS / javascript / fatching API / Import-Export",
            git_link: "https://github.com/1sagarthakur1/giving-scene-667-Bewakoof",
            prsent_link: "https://bewookoof-app-groupproject.netlify.app/",
            image: Proimg3
        },

        {
            heading: "Clone of Cricket.com",
            project_des1: "Get live cricket scores, scorecard updates, match schedule, predictions & results, stats, latest news & videos of all international, domestic & T20 series ...",
            project_des2: "It was a group project of 6 members and contributed the following things.in this project, I have made the player page, fantasy Center . We used tools in it.",
            functionalty: {
                fun1: "",
                fun2: "",
                fun3: "",
                fun4: ""
            },
            tech_stack: " HTML / CSS / javascript / fatching API / Import-Export",
            git_link: "https://github.com/Nnishks/Cricket.com_Clone/tree/main/pagelink",
            prsent_link: "https://smooth-book-cricket-com.netlify.app/",
            image: Proimg4
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
            WeatherAppLAPview: weatherAppLAPview,
            WeatherAppMOBview: weatherAppMOBview,
            LaptopDesc: "My website is designed to be fully responsive. you access it from a desktop computer, laptop, or tablet.",
            MobileDesc: "Ensuring a smooth and engaging user experience across various devices and screen sizes. Whether you access it from a desktop computer, laptop, tablet, or smartphone, the website's layout and content automatically adjust to provide optimal readability and usability.",
            Github:"https://github.com/1sagarthakur1/BuyP_Frontend_App",
            Visit:"https://buy-p-frontend-app.vercel.app/"
        }
    ]
    return (
        <>
            <section id="section4"></section>
            <div className='projects'>
                <h1>Projects</h1>
                <div>
                    {/* Project 1 */}
                    <Iprojects heading={project[0].heading} project_des1={project[0].project_des1} project_des2={project[0].project_des2} fun1={project[0].functionalty.fun1} fun2={project[0].functionalty.fun2} fun3={project[0].functionalty.fun3} tech_stack={project[0].tech_stack} git_link={project[0].git_link} prsent_link={project[0].prsent_link} image={project[0].image} />

                    <ProjectShower
                        name={project[4].Name}
                        description={project[4].Description}
                        functionalitys={project[4].Functionalitys}
                        tackStack={project[4].TackStack}
                        weatherAppLAPview={project[4].WeatherAppLAPview}
                        weatherAppMOBview={project[4].WeatherAppMOBview}
                        laptopDesc={project[4].LaptopDesc}
                        mobileDesc={project[4].MobileDesc}
                        github={project[4].Github}
                        visit={project[4].Visit}
                    />

                    {/* Project 2 */}
                    <Iprojects heading={project[1].heading} project_des1={project[1].project_des1} project_des2={project[1].project_des2} tech_stack={project[1].tech_stack} git_link={project[1].git_link} prsent_link={project[1].prsent_link} image={project[1].image} />

                    {/* Project 3 */}
                    <Iprojects heading={project[2].heading} project_des1={project[2].project_des1} project_des2={project[2].project_des2} tech_stack={project[2].tech_stack} git_link={project[2].git_link} prsent_link={project[2].prsent_link} image={project[2].image} />

                    {/* Project 4 */}
                    <Iprojects heading={project[3].heading} project_des1={project[3].project_des1} project_des2={project[3].project_des2} fun1={project[3].functionalty.fun1} fun2={project[3].functionalty.fun2} fun3={project[3].functionalty.fun3} tech_stack={project[3].tech_stack} git_link={project[3].git_link} prsent_link={project[3].prsent_link} image={project[3].image} />
                </div>
            </div>
        </>
    )
}
