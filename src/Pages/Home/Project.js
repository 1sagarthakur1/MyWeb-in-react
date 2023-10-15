import React from 'react'
import Iprojects from '../../Components/InnerComponents/Iprojects'

import Proimg1 from '../../Images/Crime INMS.png';
import Proimg2 from '../../Images/pharmeasey.png';
import Proimg3 from '../../Images/bewakoof.png';
import Proimg4 from '../../Images/cricket.png';

export default function Project() {
    var porject = [
        {
            heading:"Crime Information Management System",
            project_des1:"Crime Information Management System,This is my java Backend (crime information management system) project,it was my individual project, I tried to make it best, you can see. I used there java programing language and for database I am using MYsql.",
            project_des2:"It was an Console based project. I tried to create here crime information management system. I have added there much functionality",
            functionalty:{
                fun1:"- In this project, I have made logging functionality.",
                fun2:"- Solve and unsolve crime.",
                fun3:"- See all crimes with criminal details.",
                fun4:""
            },
            tech_stack:" Java, MySQL, JDBC",
            git_link:"https://github.com/1sagarthakur1/crime-information-management-system-",
            prsent_link:"https://drive.google.com/file/d/1CEb9s_TSPVRvFR25gy273gmlHOPlHWq3/view?usp=sharing",
            image:Proimg1
        },
        {
            heading:"Clone of Pharmeasy website",
            project_des1:"This is My Pharmeasy Project.PharmEasy is a consumer healthcare 'super app' that provides consumers with on-demand. home deliverd access to wid range fo prescription. we have tried to make it clone. we learned a lot from this.",
            project_des2:"It was a group project of 6 members and contributed the following things.in this project, I have made the navbar, Home page and popup window functionality. We used tools in it.",
            functionalty:{
                fun1:"",
                fun2:"",
                fun3:"",
                fun4:""
            },
            tech_stack:" HTML / CSS / javascript / fatching API / Import-Export",
            git_link:"https://github.com/vinaykumar2n/project_pharmeasy",
            prsent_link:"https://papaya-salmiakki-482569.netlify.app/sagar%20and%20pravhat/navbarforhome",
            image:Proimg2
        },
    
        {
            heading:"Clone of Bewakoof",
            project_des1:"Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness. With a team of 400 members, and 8 Million+ products sold till date.",
            project_des2:"I was assigned the team leader by the Masai School and it was a wonderful experience while leading a team of 5 members. I contributed the following things. in this project, I have made signup and logging functionality. Home page import-export functionality. We used tools in it.",
            functionalty:{
                fun1:"",
                fun2:"",
                fun3:"",
                fun4:""
            },
            tech_stack:"HTML / CSS / javascript / fatching API / Import-Export",
            git_link:"https://github.com/1sagarthakur1/giving-scene-667-Bewakoof",
            prsent_link:"https://bewookoof-app-groupproject.netlify.app/",
            image:Proimg3
        },
    
        {
            heading:"Clone of Cricket.com",
            project_des1:"Get live cricket scores, scorecard updates, match schedule, predictions & results, stats, latest news & videos of all international, domestic & T20 series ...",
            project_des2:"It was a group project of 6 members and contributed the following things.in this project, I have made the player page, fantasy Center . We used tools in it.",
            functionalty:{
                fun1:"",
                fun2:"",
                fun3:"",
                fun4:""
            },
            tech_stack:" HTML / CSS / javascript / fatching API / Import-Export",
            git_link:"https://github.com/Nnishks/Cricket.com_Clone/tree/main/pagelink",
            prsent_link:"https://smooth-book-cricket-com.netlify.app/",
            image:Proimg4
        },
    ]
  return (
    <>
        <section id="section4"></section>
        <div className='projects'>
            <h1>Projects</h1>
            <div>
               {/* Project 1 */}
               <Iprojects heading={porject[0].heading} project_des1={porject[0].project_des1} project_des2={porject[0].project_des2} fun1={porject[0].functionalty.fun1} fun2={porject[0].functionalty.fun2} fun3={porject[0].functionalty.fun3} tech_stack={porject[0].tech_stack} git_link={porject[0].git_link} prsent_link={porject[0].prsent_link} image={porject[0].image}/>

               {/* Project 2 */}
               <Iprojects heading={porject[1].heading} project_des1={porject[1].project_des1} project_des2={porject[1].project_des2} tech_stack={porject[1].tech_stack} git_link={porject[1].git_link} prsent_link={porject[1].prsent_link} image={porject[1].image}/>

                {/* Project 3 */}
                <Iprojects heading={porject[2].heading} project_des1={porject[2].project_des1} project_des2={porject[2].project_des2} tech_stack={porject[2].tech_stack} git_link={porject[2].git_link} prsent_link={porject[2].prsent_link} image={porject[2].image}/>

                {/* Project 4 */}
                <Iprojects heading={porject[3].heading} project_des1={porject[3].project_des1} project_des2={porject[3].project_des2} fun1={porject[3].functionalty.fun1} fun2={porject[3].functionalty.fun2} fun3={porject[3].functionalty.fun3} tech_stack={porject[3].tech_stack} git_link={porject[3].git_link} prsent_link={porject[3].prsent_link} image={porject[3].image}/>
            </div>
        </div>
    </>
  )
}
