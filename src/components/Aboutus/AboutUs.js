import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css";
import "./AboutUs.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { Helmet } from "react-helmet";
import teacherImg from "../../images/julia_photo.jpeg";
import Img1 from "../../images/img.png";
import Img2 from "../../images/img1.jpg";

const AboutUs = () => {
  useEffect(() => {
    new WOW().init();
    window.scrollTo(0, 0);

  }, []);


  const state = useSelector((state) => state.data);
  const { pageKeٍywords, websiteTitle } = useBetween(state.useShareState);

  const text =
    "Julia is the Founder of Made For Manners and a certified Youth and Social Etiquette Consultant, trained at Minding Manners International Etiquette and Protocol Academy. Raised in Moldova as one of five siblings, she grew up with strong values of honesty, integrity and respect, which continue to shape her work today. After moving to England, Julia developed her professional background in Human Resources within a school setting, while living between England and the UAE further refined her understanding of cross-cultural communication and international standards of social conduct. Through Made For Manners, she works with children, young adults, families and professionals, delivering youth etiquette programmes focused on confidence and social awareness, alongside social etiquette support for adults navigating personal and professional environments with poise and ease.";

  return (
    <section className="about-julia">
      <Helmet>
        <title>About | {websiteTitle}</title>
        <link rel="canonical" href="https://madeformanners.com/contact" />
        <meta
          name="description"
          content="made for manners contact us  hello@madeformanners.com "
        />
        <meta name="keywords" content={`${pageKeٍywords} ${text}`} />
        <meta property="og:title" content={`About us - ${websiteTitle}`} />
        <meta property="og:description" content={text} />
      </Helmet>

      <div className="innerContainer">
        {/* INTRO */}
        <div className="about-julia__intro">
          <div className="about-us-intro-wrapper">
            {/* LEFT TEXT */}
            <div className="about-us-into" data-wow-delay="0.2s">
              <p>
                Made for Manners is an etiquette consultancy based in Windsor, serving
                Berkshire, Buckinghamshire, the surrounding areas and UAE. The
                consultancy works with children, teenagers and adults who wish to
                feel at ease in social, educational and professional settings through
                clear, practical guidance in contemporary etiquette.
              </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="about-us-intro-images">
              <div className="about-us-intro-img first-img" data-wow-delay="0.8s">
                <img src={Img1} alt="First Visual" />
              </div>

              {/* <div className="about-us-intro-img second-img" data-wow-delay="1s">
                <img src={Img2} alt="Second Visual" />
              </div> */}
            </div>
          </div>
          <div className="second-section wow animate__animated animate__fadeInLeft">
            <div className="second-section-content">
              <div className="text-half">
                <h2>
                  {/* <span className="icon">
              <i className="fas fa-star"></i>
            </span> */}
                  Our strengths
                </h2>

                <p>
                  Specialist focus on etiquette Made for Manners is dedicated solely to
                  etiquette, from day-to-day manners and conversation to dining, hosting
                  and behaviour at formal occasions. This specialist focus allows the
                  consultancy to offer calm, precise guidance that clients can apply
                  immediately in real life.
                </p>

                <h2>
                  {/* <span className="icon">
              <i className="fas fa-book-open"></i>
            </span> */}
                  Thoughtful programmes for all ages
                </h2>

                <p>
                  The consultancy designs age-appropriate programmes for young learners,
                  including term-time sessions, holiday workshops and dining tutorials
                  that nurture consideration for others, confidence at the table and
                  respectful interaction. Adults may join refined short courses and
                  finishing-style programmes covering social and professional behaviour,
                  personal presentation and international etiquette, all taught in an
                  approachable and unpressured way.
                </p>

                <h2>
                  {/* <span className="icon">
              <i className="fas fa-hands-helping"></i>
            </span> */}
                  Personal, flexible support
                </h2>

                <p>
                  Sessions are kept small and personal so that each client can ask
                  questions and practise real situations, with guidance tailored to
                  individual circumstances and cultural background. For those who need
                  urgent assistance, At a Moment’s Notice offers rapid consultation by
                  session or call, giving last-minute reassurance and direction before
                  important engagements.
                </p>
              </div>
              <div className="image-half">
                <img src={Img2} alt="Visual" />
              </div>
            </div>
          </div>
          <NavLink to="/courses">
            <button className="btn-enquire hi">
              View Our Courses <i className="fas fa-arrow-right"></i>
            </button>
          </NavLink>
        </div>

        {/* JULIA */}
        <div className="about-julia__inner">
          <div className="about-julia__image-wrap wow animate__animated animate__fadeInRight">
            <img
              src={teacherImg}
              alt="Julia"
              className="about-julia__image"
            />
          </div>

          <div className="about-julia__text wow animate__animated animate__fadeInLeft">
            <h2 className="about-julia__title wow animate__animated animate__fadeInDown">

              Julia — Founder and Etiquette Consultant, Made For Manners
            </h2>

            <p>{text}</p>

            {/* <p className="about-julia__signature">With warmth,</p>
            <p className="about-julia__signature">Julia</p>
            <p className="about-julia__role">
              Founder, Made for Manners
            </p> */}
          </div>
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


      {/* BOTTOM CTA */}
      <div className="about-julia__bottom wow animate__animated animate__fadeInUp">
        <div className="title">We're here to help</div>
        <p>
          We invite you to get in touch to discuss your training or service
        </p>
        <p>
          needs and explore how Made for Manners can help.
        </p>

        <NavLink to="/contact">
          <button className="btn-enquire">
            ENQUIRE NOW <i className="fas fa-envelope"></i>
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default AboutUs;
