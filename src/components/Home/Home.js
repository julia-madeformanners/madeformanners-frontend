import './Home.scss';
import 'animate.css';
import { WOW } from 'wowjs';
import { useEffect, useRef, useState } from 'react';
import PromoVideo from "./PromoVideo";
import CoursesContaner from '../Courses/CoursesCont';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import { useBetween } from 'use-between';
import image from '../../images/table.jpg'
import img1 from '../../images/Youth.png';
import img2 from '../../images/professional.png';
import img3 from '../../images/Private.png';
import img4 from '../../images/online-coach.png';
import waving from '../../images/waving.gif'
import introVideo from '../../images/Julia _Video.mp4';
import BubbleCard from './BubbleCard';
import { useLocation } from "react-router-dom";


const Home = () => {
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
      img: img1
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
      img: img3
    },
    {
      title: "Etiquette and Presence Across Cultures",
      text: (
        <div className='text'>
          <p>
            Made for Manners offers guidance that strengthens confidence, clarity and ease in any social setting. This programme supports you in moving beyond uncertainty so you can set aside the concern of what may or may not be expected and focus fully on the moment at hand. Through the study of etiquette, cultural understanding and refined personal conduct, you learn to carry yourself with assurance, consideration and quiet elegance wherever you go.
            <br /> Sessions may be arranged as three hour modules, one to three day programmes or bespoke lessons shaped around individual aspirations.</p>
          A selection of topics includes:
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
      img: img3
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
      img: img3
    }
    // {
    //   title: "Private Coaching — Personalised refinement.",
    //   text: "One-to-one sessions designed to enhance posture, presence, and communication in a way that feels natural and authentic.",
    //   img: img4
    // }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    new WOW({ live: false }).init();
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  const [showVideo, setShowVideo] = useState(false);
  const state = useSelector((state) => state.data);
  const { pageDescription, pageKeٍywords, HomePageKeyWords, websiteTitle } = useBetween(state.useShareState);

  const contentPoints = [
    { title: "Youth & Students — Confidence for every stage.", desc: "We help young people develop social awareness, communication skills, and self-assurance — preparing them for interviews, internships, and new experiences." },
    { title: "Professionals & Entrepreneurs — Presence that supports ambition.", desc: "Learn to communicate with clarity and confidence, refine your image, and represent your brand or career with authenticity." },
    { title: "International Etiquette — Confidence across cultures.", desc: "Navigate professional and social settings globally with ease, cultural awareness, and composure." },
    { title: "Private Coaching — Personalised refinement.", desc: "One-to-one sessions designed to enhance posture, presence, and communication in a way that feels natural and authentic." }
  ];


  return (
    <div className="Home">
      <Helmet>
        <link rel="canonical" href="https://madeformanners.com" />
        <title>Home | {websiteTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${pageKeٍywords} ${HomePageKeyWords}`} />
        <meta property="og:title" content={`Home - ${websiteTitle}`} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>

      {/* --- 1. Hero Section --- */}
      <div className="video-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-hero__video"
          loading="lazy"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-hero__overlay">
          <h1>
            MADE FOR MANNERS<br /><br />
            <h2>Etiquette shared in person. Because how we behave matters.</h2>
            <span
            ><i>In person etiquette courses centred on behaviour, confidence, and real human connection.</i><br /><br />
              {/* <i>Lead by example through all stages of life</i><br /> */}

            </span>
          </h1>
          <div className="video-hero__buttons">
            <NavLink to="/courses"><button className="btn explore">Explore Courses</button></NavLink>
            <NavLink to="/contact"><button className="btn enquire">Enquire Now</button></NavLink>
          </div>
        </div>
      </div>

      {/* --- 2. Intro Text + Video --- */}
      <section className="intro wow animate__animated animate__fadeInRight">

        <div className="recommended">
          {/* <span className='welcome'> */}
          <p className="topic welcome">Welcome to Made for Manners </p>
          <i className='i'>Etiquette Consultancy</i>

          {/* </span> */}
          {/* <div className="line-container">
            <span className="line"></span> */}
          {/* <img src={waving} alt="waving " /> */}
          {/* </div> */}

        </div>
        <div className='introCont'>
          <p>In person, with care :

            At Made for Manners, etiquette is shared through care, guidance, and genuine interaction. Learning is thoughtful and practical, combining clear insight with exercises that help individuals of all ages apply what they learn with confidence.
            Face-to-face courses create a supportive and engaging environment where participants can practise, observe, and grow. Whether learning alongside others or through individual courses, the focus is on building awareness, assurance, and ease in everyday situations.</p>
          <p>
            Why it matters : People want to feel confident, capable, and comfortable in the world — at work, at home, socially, and within their families. Behaviour and etiquette support this.
            They influence how we are perceived, how we connect with others, and how we make people feel. This is not about perfection or rigid rules, but about personal growth and consideration for others.
          </p>
          {/* <p>Shaped by parents who proudly upheld the highest standards in all aspects of life.</p> */}
        </div>
        {/* <button className="cta-btn" onClick={() => setShowVideo(!showVideo)}>▶ Watch the Video</button> */}
        {/* {showVideo &&  */}
        {/* <PromoVideo /> */}
        {/* } */}

      </section>
      {/* --- In-Person Courses Section --- */}
      {/* --- In-Person Courses Section --- */}
      <section className="in-person-courses wow animate__animated animate__fadeInUp">
        <div className="container">


          <div className="course-details">

            <h3>Who we cater for</h3>
            <p>
              We work with children, families, individuals, and professionals who value personal development and understand the importance of respectful behaviour and a confident presence.
              Courses are available in small groups or on a one-to-one basis, allowing information to be shared in a way that suits the individual and the setting, while remaining structured, supportive, and considered.
            </p>

            <h3>More than “good manners”</h3>
            <p>
              Etiquette is not a performance; it becomes part of who you are. It supports confidence, strengthens relationships, and allows people to move through social and professional settings with ease.
              It encourages clear communication, thoughtful behaviour, and quiet confidence — qualities that serve individuals well at every stage of life.
            </p>

            <h3>Begin with a conversation</h3>
            <p>
              If you would like to explore an in person etiquette course and feel this approach aligns with your values, I would be pleased to speak with you.
            </p>

            <p>
              All courses are delivered in person by arrangement.
            </p>
           
              
               <NavLink to="/contact"><button className=" enquire2">Enquire Now</button></NavLink>
         
          </div>
        </div>
      </section>

      {/* --- Our Identity Section --- */}
      {/* <section className="identity-section">
        <div className="identity-grid">

          <div className="identity-card card1">
            <div className="identity-content">
              <h3>Our Vision</h3>
              <p>
                To make modern etiquette the new standard. Encouraging young people and professionals to develop refined social awareness and an authentic presence.
              </p>
            </div>
          </div>


          <div className="identity-card card2">
            <div className="identity-content">
              <h3>Our Values</h3>
              <p className='pCard2'>
                ● Grace : Always move with composure and consideration.<br />
                ● Authenticity : Communicate effectively while staying true to who you are.<br />
                ● Respect : Show courtesy to others and uphold the same standards for yourself. <br />
                ● Confidence : Be prepared and poised to make a positive impression. <br />
                ● Legacy : Remember that every interaction leaves a lasting mark.
              </p>
            </div>
          </div>

          <div className="identity-card card3">
            <div className="identity-content">
              <h3>Our Promise</h3>
              <p>
                Made for Manners brings approachable, warm etiquette guidance to families and individuals pursuing excellence. Our work focuses on developing social skills and self-assurance to last a lifetime.
              </p>
            </div>
          </div>

        </div>
      </section> */}

      {/* --- Recommended Section --- */}
      {/* <div className='recommended wow animate__animated animate__fadeInUp'>
        <p className="topic">Recommended Courses</p> */}
      {/* <div className="line-container">
          <span className="line"></span> */}
      {/* <i className="fas fa-star"></i> */}
      {/* </div> */}
      {/* <NavLink className='all-courses' to='/Courses'>all courses</NavLink> */}
      {/* <div className='noti'>
          Please be advised that once the payment for the course has been completed, cancellations and refunds are not permitted.
        </div> */}
      {/* <CoursesContaner type="recommended" />
      </div> */}

      {/* --- Follow Us Section --- */}
      {/* <div className="recommended follow-us wow animate__animated animate__fadeInUp">
        <p className="topic">Follow Us on Social Media</p>
        <div className="line-container">
          <span className="line"></span>
          <i className="fas fa-heart"></i>
        </div>
        <section className="philosophy wow animate__animated animate__fadeIn">
          <p>Grace isn’t something you’re born with — it’s something you practise. When etiquette becomes natural, confidence follows.</p>
          <p>At Made for Manners, refinement is not about appearing polished; it’s about feeling prepared and confident in every moment.</p>
        </section>
        <div className="social-icons wow animate__animated animate__fadeInUp">
          <a href="https://www.instagram.com/madeformanners/" target="_blank" rel="noopener noreferrer" aria-label="instagram" title='instagram'><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/MannersFor79214" target="_blank" rel="noopener noreferrer" aria-label="x-twitter" title='twitter'><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.tiktok.com/@user1742031833181" target="_blank" rel="noopener noreferrer" aria-label="tiktok" title='tiktok'><i className="fab fa-tiktok"></i></a>
          <a href="http://www.linkedin.com/in/made-for-manners" target="_blank" rel="noopener noreferrer" aria-label="linkedin" title='linkedin'><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div> 
      */}
      {/* --- What We Offer --- */}
      {/* <div className="recommended what-we-offer wow animate__animated animate__fadeIn"
        id="what-we-offer"> */}
      {/* <p className="topic">What we offer</p>
        <div className="line-container">
          <span className="line"></span>
          <i className="fas fa-gem"></i>
        </div>
        <div className="four-bubbles-wrapper">
          {items.map((item, index) => (
            <BubbleCard key={index} item={item} index={index} />
          ))}
        </div> */}
      <div className='exploreBtnCont'>
        <NavLink to='/courses'>
          <button className='exploreBtn'>explore our offerings ⟶ </button>
        </NavLink>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
