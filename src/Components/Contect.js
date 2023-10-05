import React from 'react'

import '../Style/style.css'
import call from '../Images/10588639_phone_icon.png';
import email from '../Images/5402397_email_inbox_mail_message_envelope_icon.png';
import linkedin from '../Images/1217173_linkedin_icon.png';
import git from '../Images/4961959_github_logo_icon.png';

export default function Contect() {
  return (
    <>
        <section id='section5'></section>
        <div className='contect'>
            <h1>Contect</h1>
            <div>
                {/* contect1 */}
                <div className="contect_card">
                    <div className="image">
                    <img src={call} alt=""/>
                    </div>
                    <div className="card_info">
                    <span>Phone Number</span>
                    <p>+91 6267986053</p>
                    </div>
                    <a className="button" href="tel:+916267986053">Call</a>
                </div>

                 {/* contect2 */}
                 <div className="contect_card">
                    <div className="image">
                    <img src={email} alt=""/>
                    </div>
                    <div className="card_info">
                    <span>Email id</span>
                    <p>sagarthakur5710@gmail.com</p>
                    </div>
                    <a className="button" href="mailto:sagarthakur5710@gmail.com">Email</a>
                </div>

                 {/* contect3 */}
                 <div className="contect_card">
                    <div className="image">
                    <img src={git} alt=""/>
                    </div>
                    <div className="card_info">
                    <span>GitHub</span>
                    <p>1sagarthakur1</p>
                    </div>
                    <a className="button" href="https://github.com/1sagarthakur1">Follow</a>
                </div>

                 {/* contect4 */}
                 <div className="contect_card">
                    <div className="image">
                    <img src={linkedin} alt=""/>
                    </div>
                    <div className="card_info">
                    <span>Linkedin</span>
                    <p>Sagar Thakur</p>
                    </div>
                    <a className="button" href="https://www.linkedin.com/in/sagar-singh-thakur-982400230">Follow</a>
                </div>
            </div>
        </div>
    </>
  )
}
