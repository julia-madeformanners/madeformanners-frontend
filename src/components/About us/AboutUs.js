// import React, { useEffect } from "react";
// import './AboutUs.scss';
import teacherImg from "../../images/julia_photo.jpeg";
// import { Helmet } from "react-helmet";
// import { useSelector } from "react-redux";
// import { useBetween } from "use-between";

// const AboutUs = () => {
//     const state = useSelector((state) => state.data);
//     const { pageDescription, pageKeywords, aboutUsKeyWords, websiteTitle } = useBetween(state.useShareState);


//     useEffect(() => {

//         window.scrollTo(0, 0);

//         const aboutSection = document.querySelector(".about-us");
//         if (!aboutSection) return;

//         const elements = aboutSection.querySelectorAll("[data-animate]");

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add(entry.target.dataset.animate);
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );

//         elements.forEach(el => observer.observe(el));

//         return () => observer.disconnect();
//     }, []);

//     const aboutSections = [
//         {
//             title: "Who We Are",
//             text: "Made for Manners is an international etiquette and lifestyle academy that blends tradition with modern relevance. We teach confidence, communication, and composure as practical life skills — accessible to all, applicable everywhere."
//         },
//         {
//             title: "",
//             text: "We believe manners aren’t about status or appearance. They’re about awareness, kindness, and the confidence to be yourself while making others feel at ease."
//         },
//         {
//             title: "Our Vision",
//             text: "To make etiquette modern, meaningful, and universal — a pathway to genuine confidence and connection."
//         },
//         {
//             title: "Our Values",
//             text: "Grace — Composure and consideration in every action.\nAuthenticity — True elegance begins with being yourself.\nRespect — Courtesy and empathy build lasting connections.\nConfidence — Preparation creates freedom.\nLegacy — Every act of grace leaves an impression."
//         },
//         {
//             title: "Our Promise",
//             text: "We make etiquette feel natural, practical, and alive. Our teaching is approachable, intelligent, and warm — focused on confidence that lasts long after the lesson ends."
//         }
//     ];

//     return (
//         <div className="about-us">
//             <Helmet>
//                 <link rel="canonical" href="https://madeformanners.com/about" />
//                 <title>About us | {websiteTitle}</title>
//                 <meta name="description" content={pageDescription} />
//                 <meta name="keywords" content={`${pageKeywords} ${aboutUsKeyWords}`} />
//                 <meta property="og:title" content={`About Us - ${websiteTitle}`} />
//                 <meta property="og:description" content={pageDescription} />
//             </Helmet>

//             <div className="container">
//                 <h1>About Us</h1>

//                 <div className="content">
//                     <div className="text" data-animate="slide-right">
//                         {aboutSections.map((section, index) => (
//                             <div key={index} className="about-section">
//                                 {section.title && <h3>{section.title}</h3>}
//                                 <p>{section.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>


//                 <div className="content founder-message">
//                     <div className="image" data-animate="slide-left">
//                         <img src={teacherImg} alt="Julia - Founder" />
//                     </div>
//                     <div className="text" data-animate="slide-right">
//                         <h3>Founder’s Message</h3>
//                         <p>Welcome to Made for Manners.
//                             This company was founded on a simple belief: true confidence and courtesy should empower, not intimidate.
//                             Today, good manners are less about formality and more about awareness — of how we make others feel, and how we present ourselves to the world.
//                             Our role is to help you refine that awareness, so you feel comfortable, composed, and confident in any environment.
//                             Refinement is not about changing who you are — it’s about enhancing the way you move, speak, and connect. Because when you feel at ease, everything else follows naturally.<br />
//                             With warmth,<br />
//                             Julia <br />
//                             Founder, Made for Manners.</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };


// export default AboutUs;
import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css";
import "./AboutUs.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    new WOW().init();
    window.scrollTo(0, 0);
  }, []);
  const state = useSelector((state) => state.data);
  const { pageKeٍywords, websiteTitle } = useBetween(state.useShareState);
  const text = "Raised in Moldova as one of five siblings, Julia’s professional ethic is rooted in diversity and cultural awareness. She believes that regardless of background, everyone deserves the confidence to present their best self to the world. Her global perspective comes from lived experience. Having worked and studied in multi-cultural London, Julia’s cross-community understanding runs deep. A year spent living and working in the UAE further broadened her expertise in international conduct, giving her the knowledge to guide others toward inclusive social awareness."

  return (
    <section className="about-julia">
      <Helmet>
        <title>About | {websiteTitle}</title>
        <link rel="canonical" href="https://madeformanners.com/contact" />
        <meta
          name="description"
          content="made for manners contact us  hello@madeformanners.com "
        />
        <meta
          name="keywords"
          content={`${pageKeٍywords} ${text}`}
        />
        <meta property="og:title" content={`About us - ${websiteTitle}`} />
        <meta property="og:description" content={text} />
      </Helmet>
      <div className="innerContainer">
        <div className="about-julia__intro wow animate__animated animate__fadeInLeft">
          <h2>The Difference We Make</h2>

          <p>
            It takes just one person to spark change that echoes through generations.
            Every small, intentional act of grace contributes to creating a more respectful,
            confident, and connected society.
          </p>

          <p>
            Made for Manners was founded to help individuals of all ages and backgrounds
            cultivate the social confidence and presence they need to thrive in life and career.
            We offer a welcoming and mindful environment where learning etiquette becomes a
            journey of empowerment, not pressure. Our programs are designed to make personal
            and professional excellence a natural result of thoughtful growth.
          </p>

          <h2>Opening Doors to the Future You Deserve</h2>

          <p>
            At Made for Manners, we believe that self-awareness and social understanding unlock
            every opportunity. Whether you are entering the workplace, advancing your career,
            or simply wishing to refine your social presence, our bespoke coaching helps you
            navigate life's formalities with authenticity and ease.
          </p>

          <p>
            Our founder, Julia Esanu, trained in London at the Minding Manners International
            Etiquette and Protocol Academy, where she qualified as an International Social
            Etiquette Consultant, Savoir Vivre Specialist, and Certified International Youth
            Etiquette Consultant.
          </p>

          <p>
            Her own journey, from moving to England with no experience to thriving as an HR
            professional across multiple industries, forms the heart of our philosophy. True
            confidence is earned through growth, humility, and a willingness to learn.
          </p>

          <h2>Our Distinction</h2>

          <p>
            Progress often begins with the smallest step, yet confidence can falter when ambitions
            feel just out of reach. Our courses bridge that gap by offering practical insights
            grounded in real-world experience.
          </p>

          <p>
            We combine expertise in human resources, intercultural communication, and
            international etiquette to provide a uniquely holistic approach. Every session is
            guided by three core values: transparency, quality, and personalisation.
          </p>

          <p>
            Each client receives bespoke strategies tailored to their unique goals, ensuring
            progress that feels personal, authentic, and lasting.
          </p>

          <p>
            When timing matters, we offer flexible scheduling and private support to meet your
            needs swiftly and seamlessly.
          </p>

          <h2>Guiding Young Ambition</h2>

          <p>
            Tomorrow's leaders begin with today's manners. Our youth programs, developed in
            consultation with a qualified psychologist, cultivate emotional intelligence, respect,
            and confidence in a way that feels engaging and age-appropriate.
          </p>

          <p>
            Through interactive lessons, children learn the art of modern etiquette and the social
            awareness that opens doors in education and beyond. Private sessions and tailored
            approaches are always available to ensure every child learns comfortably, in a way
            best suited to their personality and pace.
          </p>

          <h2>Serving Berkshire, Buckinghamshire and Beyond</h2>

          <p>
            Based in Windsor, Made for Manners brings world-class etiquette training to the local
            community through in-person and group face-to-face sessions. We understand the
            distinct needs of regional professionals and families, offering an accessible and
            dignified approach to personal development.
          </p>

          <p>
            We are fully licensed to operate across the UK and Abu Dhabi, delivering the same
            premium face-to-face etiquette coaching in both locations. Whether you join us in
            Windsor or Abu Dhabi, you receive personalised guidance tailored to your needs and
            aspirations.
          </p>

          <h2>Mission Statement</h2>

          <p>
            Our mission is to empower individuals of all backgrounds to reach their highest
            potential through social awareness, confidence, and grace, while fostering a culture
            of respect that transcends borders, generations, and experiences.
          </p>

          <h2>Values</h2>

          <p>
            Transparency: Honest communication and genuine guidance underpin every session.
            <br />
            Quality: Every course reflects the highest professional and ethical standards.
            <br />
            Personalisation: Each client journey is tailor-made to honour individuality and goals.
          </p>

          <hr />

          <p>
            Made for Manners — where confidence begins and character endures.
          </p>

          <p>
            Explore our courses:
            <br />
            Social Etiquette for Adults | Youth Etiquette for Young Learners
          </p>
        </div>
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

            <p>
              {text}
            </p>

            <p className="about-julia__signature">With warmth,</p>
            <p className="about-julia__signature">Julia</p>
            <p className="about-julia__role">Founder, Made for Manners</p>
          </div>



        </div>
      </div>

      <div className="about-julia__bottom wow animate__animated animate__fadeInUp">
        <div className="title">We're here to help</div>
        <p>Please get in touch to discuss your training or service needs</p>
        <p>to discover how Made for Manner can assist.</p>

        <NavLink to="/contact"><button className="btn-enquire">ENQUIRE NOW </button> </NavLink>
      </div>
    </section>
  );
}

export default AboutUs;