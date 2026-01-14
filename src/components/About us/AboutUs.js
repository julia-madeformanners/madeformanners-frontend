import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css";
import "./AboutUs.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { Helmet } from "react-helmet";
import teacherImg from "../../images/julia_photo.jpeg";

const AboutUs = () => {
  useEffect(() => {
    new WOW().init();
    window.scrollTo(0, 0);
  }, []);

  const state = useSelector((state) => state.data);
  const { pageKeٍywords, websiteTitle } = useBetween(state.useShareState);

  const text =
    "Raised in Moldova as one of five siblings, Julia’s professional ethic is rooted in diversity and cultural awareness. She believes that regardless of background, everyone deserves the confidence to present their best self to the world. Her global perspective comes from lived experience. Having worked and studied in multi-cultural London, Julia’s cross-community understanding runs deep. A year spent living and working in the UAE further broadened her expertise in international conduct, giving her the knowledge to guide others toward inclusive social awareness.";

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
        <div className="about-julia__intro wow animate__animated animate__fadeInLeft">
          <p className="about-us-into">
            Made for Manners is an etiquette consultancy based in Windsor, serving
            Berkshire, Buckinghamshire, the surrounding areas and Abu Dhabi. The
            consultancy works with children, teenagers and adults who wish to
            feel at ease in social, educational and professional settings through
            clear, practical guidance in contemporary etiquette.
          </p>

          <h2>
            <span className="icon">
              <i className="fas fa-star"></i>
            </span>
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
            <span className="icon">
              <i className="fas fa-book-open"></i>
            </span>
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
            <span className="icon">
              <i className="fas fa-hands-helping"></i>
            </span>
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
             
              About Julia
            </h2>

            <p>{text}</p>

            <p className="about-julia__signature">With warmth,</p>
            <p className="about-julia__signature">Julia</p>
            <p className="about-julia__role">
              Founder, Made for Manners
            </p>
          </div>
        </div>
      </div>

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
