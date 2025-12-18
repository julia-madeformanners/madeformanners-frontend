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
import image from '../../images/img.jpeg';
import img1 from '../../images/Youth.png';
import img2 from '../../images/professional.png';
import img3 from '../../images/Private.png';
import img4 from '../../images/online-coach.png';
import waving from '../../images/waving.gif'
import introVideo from '../../images/introVideo.mp4';
import BubbleCard from './BubbleCard';

const Home = () => {
  const items = [
    {
      title: "Youth & Students — Confidence for every stage.",
      text: "We offer an engaging mix of activities designed to help young people feel at ease in any situation. Our lively half-day and full-day workshops are designed to help build the social intelligence and self-assurance to confidently move through study and early professional experiences. Students will develop leadership, social, communication and table etiquette skills, alongside meaningful relationships in a supportive setting. Our International youth etiquette programmes are tailored to two age groups. Little Society Stars is suited to children aged 8–12 Young Adult Social Mastery is designed for young people aged 13–17",
      img: img1
    },
    // {
    //   title: "Professionals & Entrepreneurs — Presence that supports ambition.",
    //   text: "Learn to communicate with clarity and confidence, refine your image, and represent your brand or career with authenticity.",
    //   img: img2
    // },
    {
      title: "Social etiquette",
      text: "Adults of all ages can learn to communicate with improved clarity and confidence. Our approach respects the heritage of traditional etiquette while focusing on skills that remain relevant and genuinely useful today. We offer three signature programmes to support different stages of personal development. The Elegance & Etiquette Mastercourse is a five day immersion devoted to advanced social behaviour and refined interaction. Crafting Your Social Identity is a two day programme centred on communication, confidence and sense of self. Cultural Grace & Global Presence is a three day programme that explores international etiquette and cultural understanding.",
      img: img3
    },
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
        <video className="video-hero__video" autoPlay loop muted>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-hero__overlay">
          <h1>
            The Modern Art of Grace.<br /><br />
            <h2>Be the change that inspires your generation</h2>
            <span
            ><i>Shape your life and the world around you</i><br /><br />
              <i>Lead by example through all stages of life</i><br />

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
          <p>Made for Manners is built on traditional values of integrity and respect.</p>
          <p>These principles were instilled in founder Julia from childhood
            <NavLink to="/about" className="aboutJulia1">, About Julia </NavLink></p>
          <p>shaped by parents who proudly upheld the highest standards in all aspects of life.</p>
        </div>
        {/* <button className="cta-btn" onClick={() => setShowVideo(!showVideo)}>▶ Watch the Video</button> */}
        {/* {showVideo &&  */}
        <PromoVideo />
        {/* } */}

      </section>

      {/* --- What We Offer --- */}
      <div className="recommended what-we-offer wow animate__animated animate__fadeIn">
        <p className="topic">What we offer</p>
        {/* <div className="line-container">
          <span className="line"></span>
          <i className="fas fa-gem"></i>
        </div> */}
        <div className="four-bubbles-wrapper">
          {items.map((item, index) => (
           <BubbleCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      {/* --- Our Identity Section --- */}
      <section className="identity-section">
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
      </section>

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
    </div>
  );
};

export default Home;
