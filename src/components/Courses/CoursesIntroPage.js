import { useEffect } from 'react';
import './CoursesIntroPage.scss'
import { NavLink } from 'react-router-dom';

const Intro = () => {
     useEffect(() => {
    
        window.scrollTo(0, 0);
    
      }, []);

    return (
        <div className="intro-container">
            <section className="intro-section">
                <div className="intro-image right">
                    <img src="https://media.istockphoto.com/id/1805893169/photo/young-businesswoman-carefully-listening-to-a-colleague.jpg?s=2048x2048&w=is&k=20&c=IbmMG9bVECQ6PIGKoDPAVaGNG-xvkRKj-uyYS_S8igA=" alt="Face to Face Courses" />
                </div>
                <div className="intro-text left">
                    <h2>Face-to-Face Courses</h2>
                    <p>
                   Today, etiquette goes beyond formality, focusing on refined self-awareness, confidence, and presence. Refinement is a lifelong journey that enhances how we carry ourselves and helps us navigate interactions with ease, leaving a lasting positive impression.
                   <br/>
                   Everyday life in the contemporary world can make it hard for young people to develop social awareness. Our programmes give them the skills they need to succeed both socially and professionally.
                   </p>

                    <NavLink to="/coursesdetelias"
                        className="intro-btn"
                        state={{ courseType: 'Face-to-Face Course' }}
                    >
                        View Face-to-Face Courses
                    </NavLink>
                </div>
            </section>
            <div className="online-steps">
                <h3>Course Booking Process</h3>
                <ul>
                    <li>Select the course you want to join.</li>
                    <li>You will be contacted through email within a maximum of 2 days.</li>
                    <li>We will share all details and confirm your booking.</li>
                    <li>Payment will be completed online to secure your spot.</li>
                    <li>You will receive an invoice immediately after the payment.</li>
                </ul>
            </div>
            {/* <section className="intro-section reverse">
                <div className="intro-image left">
                    <img src="https://media.istockphoto.com/id/1333547908/photo/smiling-woman-have-webcam-online-meeting-on-computer.jpg?s=2048x2048&w=is&k=20&c=2RzcfjnRKoeKSQjIpS-JT3Nw4R_amYO40lXA9huC724=" alt="Online Courses" />
                </div>
                <div className="intro-text right">
                    <h2>Online Courses</h2>
                    <p>
                        Access all our online courses anytime and from anywhere with flexible
                        schedules and high-quality content.
                    </p>
                    <NavLink to="/coursesdetelias"
                        className="intro-btn"
                        state={{ courseType: 'Online Course' }}
                    >
                        View Online Courses
                    </NavLink>
                </div>
            </section> */}
        </div>
    )
}


export default Intro
