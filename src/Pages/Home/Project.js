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
            project_des1: "Designed and developed the Crime Information Management System, a comprehensive solution tailored for efficient crime tracking, management, and analysis within police stations, enhancing law enforcement capabilities and ensuring data integrity and security.",
            project_des2: "Created a robust Console-based Crime Information Management System with extensive functionality.",
            functionalty: [
                "In this project, I have made logging functionality",
                "Solved and unsolved crimes",
                "See all crimes with criminal details",
                "View all crimes with criminal details"
            ],
            tech_stack: "Java | JDBC | MySQL | IDE  | Maven",
            git_link: "https://github.com/1sagarthakur1/crime-information-management-system-",
            prsent_link: "https://drive.google.com/file/d/1CEb9s_TSPVRvFR25gy273gmlHOPlHWq3/view?usp=sharing",
            image: Proimg1
        },
        {
            heading: "Clone of Pharmeasy website",
            project_des1: "This project is a clone of a consumer healthcare pharmeasy, providing on-demand access to a variety of prescription medications delivered directly to users' homes. Through this endeavor, valuable insights into consumer healthcare services were gained.",
            project_des2: "As part of a 6-member group project, Our project utilized various tools to achieve its objectives.",
            functionalty: [
                "Navbar creation",
                "Homepage design and layout",
                "Implementation of popup window functionality",
                "Integration of user interaction features",
                "Utilization of tools for project development"
            ],
            tech_stack: "HTML | CSS | javascript | fetching API | Import-Export",
            git_link: "https://github.com/vinaykumar2n/project_pharmeasy",
            prsent_link: "https://papaya-salmiakki-482569.netlify.app/sagar%20and%20pravhat/navbarforhome",
            image: Proimg2
        },

        {
            heading: "Clone of Bewakoof",
            project_des1: "Bewakoof is a lifestyle fashion brand that creates creative and distinctive fashion for the trendy, contemporary Indian. Founded on the principles of innovation, honesty, and thoughtfulness, Bewakoof aims to make an impact. With a team of 400 members and over 8 million products sold to date.",
            project_des2: "Coordination of tasks and communication within the team of 5 members.",
            functionalty: [
                "Implementation of signup and logging functionality",
                "Integration of import-export functionality on the homepage",
                "Collaboration with a team of 5 members to achieve project objectives",
                "Utilization of tools for project development"
            ],
            tech_stack: "HTML | CSS | javascript | fetching API | Import-Export",
            git_link: "https://github.com/1sagarthakur1/giving-scene-667-Bewakoof",
            // prsent_link: "https://bewookoof-app-groupproject.netlify.app/",
            prsent_link: "https://buy-p-frontend-app.vercel.app/",
            image: Proimg3
        },

        {
            heading: "Clone of Cricket.com",
            project_des1: "Our cricket.com clone offers live scores, match schedules, and comprehensive stats for international, domestic, and T20 series, providing cricket enthusiasts with a one-stop platform for staying updated on the latest cricket action.",
            project_des2: "Contributed to the player page and fantasy center in a group project with 6 members, utilizing various tools.",
            functionalty: [
                "Creation of player page",
                "Development of fantasy center functionality",
                "Collaboration with a team of 6 members",
                "Utilization of tools for project development"
            ],
            tech_stack: "HTML | CSS | javascript | fetching API | Import-Export",
            git_link: "https://github.com/Nnishks/Cricket.com_Clone/tree/main/pagelink",
            prsent_link: "https://smooth-book-cricket-com.netlify.app/",
            image: Proimg4
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
            WeatherAppLAPview: weatherAppLAPview,
            WeatherAppMOBview: weatherAppMOBview,
            LaptopDesc: "My website is designed to be fully responsive. you access it from a desktop computer, laptop, or tablet.",
            MobileDesc: "Ensuring a smooth and engaging user experience across various devices and screen sizes. Whether you access it from a desktop computer, laptop, tablet, or smartphone, the website's layout and content automatically adjust to provide optimal readability and usability.",
            Github: "https://github.com/1sagarthakur1/BuyP_Frontend_App",
            Visit: "https://buy-p-frontend-app.vercel.app/"
        }
    ]
    return (
        <>
            <section id="section4"></section>
            <div className='projects'>
                <h1>Projects</h1>
                <div>
                    {/* Project 1 */}
                    <Iprojects heading={project[0].heading} project_des1={project[0].project_des1} project_des2={project[0].project_des2} functionalty={project[0].functionalty} tech_stack={project[0].tech_stack} git_link={project[0].git_link} prsent_link={project[0].prsent_link} image={project[0].image} />

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
                    <Iprojects heading={project[1].heading} project_des1={project[1].project_des1} project_des2={project[1].project_des2} functionalty={project[1].functionalty} tech_stack={project[1].tech_stack} git_link={project[1].git_link} prsent_link={project[1].prsent_link} image={project[1].image} />

                    {/* Project 3 */}
                    <Iprojects heading={project[2].heading} project_des1={project[2].project_des1} project_des2={project[2].project_des2} functionalty={project[2].functionalty} tech_stack={project[2].tech_stack} git_link={project[2].git_link} prsent_link={project[2].prsent_link} image={project[2].image} />

                    {/* Project 4 */}
                    <Iprojects heading={project[3].heading} project_des1={project[3].project_des1} project_des2={project[3].project_des2} functionalty={project[2].functionalty} tech_stack={project[3].tech_stack} git_link={project[3].git_link} prsent_link={project[3].prsent_link} image={project[3].image} />
                </div>
            </div>
        </>
    )
}
