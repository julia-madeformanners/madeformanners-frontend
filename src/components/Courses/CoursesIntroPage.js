import { useEffect, useRef } from 'react';
import './CoursesIntroPage.scss'
import { NavLink } from 'react-router-dom';
import { WOW } from "wowjs";
import image1 from '../../images/boy.jpg'
import image2 from '../../images/Adults.jpg'


const Intro = () => {
    const coursesRef = useRef(null);

    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);
    const items = [
        {
            title: "Youth Courses",
            text: (
                <div className='text'>
                    At Made for Manners, our ambition is simple: to nurture confidence and courtesy across every generation. We work with both children and young adults, planting the seeds of character, poise, and social intelligence that flourish throughout life.
                    <br />Our lively half-day and full-day workshops, along with our practical dining tutorials, give students the space to develop leadership, social, communication, table etiquette skills and build meaningful relationships in a warm and supportive and safe setting. Whether joining an after-school programme or one of our holiday etiquette camps, young learners enjoy an engaging mix of activities designed to help them feel at ease in any situation.
                    <br /> Our International Youth Etiquette Programmes are thoughtfully tailored to meet the needs of each age group and include:
                    <br /> Little Society Stars (ages 8–12)
                    <br />   Young Adult Social Mastery (ages 13–17)
                    <p className='cardTitle'></p>
                </div>
            ),
            img: image1
        },
        // {
        //   title: "Professionals & Entrepreneurs — Presence that supports ambition.",
        //   text: "Learn to communicate with clarity and confidence, refine your image, and represent your brand or career with authenticity.",
        //   img: img2
        // },
        {
            title: "Adults Courses",
            text: (
                <div className='text'>
                    <p className='cardTitle'>
                        The Elegance & Etiquette Mastercourse - Finishing Touch
                    </p>
                    Made for Manners offers a clear and timeless interpretation of what a finishing school represents. It is a place where adults refine their presence, strengthen their social awareness and develop the confidence that supports them in every aspect of life. Our approach respects the heritage of traditional etiquette while focusing on skills that remain genuinely useful, relevant and gracious in today’s world.
                    <br /> We believe that refinement is an ongoing pursuit. People grow throughout their lives, and there is always room to elevate how we communicate, how we carry ourselves and how we relate to others with ease and authenticity.
                    <br />Our International Finishing School consists of three signature programmers, each designed to guide learners through a different stage of personal and social development.
                    <p className='cardTitle'> The Elegance & Etiquette Master-course</p>
                    A five day immersion devoted to advanced social behaviour, personal polish, confident presence and the principles that shape refined interaction
                    <p className='cardTitle'>  Crafting Your Social Identity</p>
                    A focused two day programme centred on communication, confidence and presenting an authentic, graceful sense of self.
                    <p className='cardTitle'> Cultural Grace & Global Presence</p>
                    A three day programme that explores international etiquette, cultural understanding and the ability to navigate diverse social settings with assurance.
                </div>
            ),
            img: image2
        },
        {
            title: "Etiquette and Presence Across Cultures",
            text: (
                <div className='text'>
                    <p>
                        Made for Manners offers guidance that strengthens confidence, clarity and ease in any social setting. This programme supports you in moving beyond uncertainty so you can set aside the concern of what may or may not be expected and focus fully on the moment at hand. Through the study of etiquette, cultural understanding and refined personal conduct, you learn to carry yourself with assurance, consideration and quiet elegance wherever you go.
                        <br /> Sessions may be arranged as three hour modules, one to three day programmes or bespoke lessons shaped around individual aspirations.</p>
                    a selection of topics includes:
                    <br /> <p className='cardTitle'>Deportment, poise and the art of body language:</p>
                    Understanding how posture, movement and presence communicate confidence and respect.
                    <br />  <p className='cardTitle'> Voice, speech, elocution and public speaking:</p>
                    Developing clarity, tone and expression that support thoughtful and engaging communication.
                    <br /> <p className='cardTitle'> International dining etiquette:</p>
                    Exploring European, Asian and Middle Eastern dining traditions and the cultural values that inform them.
                    <br /> <p className='cardTitle'> Personal image and society dress codes: </p>
                    Choosing attire that reflects the occasion, respects its customs and enhances your own sense of style.
                    <br />  <p className='cardTitle'>Professional presence and cross cultural communication:</p>
                    Cultivating awareness, adaptability and grace in professional and social settings across cultures.
                </div>
            ),
            img: "https://www.invaluable.com/blog/wp-content/uploads/sites/77/2019/06/hero-final-1.jpg"
        },
        {
            title: "At a Moment’s Notice",
            text: (
                <div className='text'>
                    Made for Manners understands that certain occasions call for assurance rather sooner than one might expect. At a Moment’s Notice offers thoughtful guidance for those who wish to feel prepared for an engagement where confidence, ease and social understanding are required, yet time is in short supply.
                    <br />
                    This concise programme provides focused support shaped around your immediate needs. Even with limited preparation time, you receive clear, practical direction that allows you to step into any setting with composure and quiet confidence. Sessions may be arranged with flexibility to suit both circumstance and location, ensuring assistance is available precisely when it is most beneficial.
                    <br />
                    Topics may include social interaction, dining etiquette, greetings and introductions, personal presentation or any particular area in which swift refinement would be welcome.
                </div>
            ),
            img: "https://cdn.secureeyepro.com/subwaytravels.com/2023/09/23075139/cultural-etiquette.jpg"
        }
        // {
        //   title: "Private Coaching — Personalised refinement.",
        //   text: "One-to-one sessions designed to enhance posture, presence, and communication in a way that feels natural and authentic.",
        //   img: img4
        // }
    ];

    return (
        <div className="intro-container">
            <div className='btnDown'>
                <div className="scroll-down-btn shine-arrow" onClick={() => {
                    coursesRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}>
                    ↓
                </div>
            </div>
            {items.map((item, index) => (
                <div className='contaner'>
                <section
                    key={index}
                    className={`intro-section ${index % 2 !== 0 ? "reverse wow animate__animated animate__fadeInRight" : " wow animate__animated animate__fadeInLeft"}`}
                >


                    <div className="intro-image ">
                        <img src={item.img} alt={item.title} />
                    </div>


                    <div className="intro-text ">
                        <h2>{item.title}</h2>
                        {item.text}



                    </div>

                </section>
                </div>

            ))}
            <div className="btn-wrapper1" >
                <NavLink
                    to="/coursesdetelias"
                    className="intro-btn "
                    ref={coursesRef}
                >
                    View All Courses
                </NavLink>
            </div>
            <div className="online-steps wow animate__animated animate__fadeInUp">
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
