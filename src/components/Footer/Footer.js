import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={logo} alt="Made for Manners Logo" />
        </div>
        <div className="line"></div>
        <div className="footer-section about-section">
          <p>
            We offer etiquette support for all ages, guided by an experienced instructor. Operating from Windsor and Abu Dhabi, we guide families and professionals committed to advancing in life and career.
            Certified at Minding Manners International Etiquette and Protocol Academy.
          </p>
       
        </div>
        <div className="line"></div>

        <div className="footer-section contact-section">

          <span><i className="fas fa-envelope"></i><p> <a href="mailto:hello@madeformanners.com">hello@madeformanners.com</a></p></span>
          <span><i className="fas fa-globe"></i><p><a href="https://madeformanners.com/home" target="_blank" rel="noopener noreferrer">madeformanners.com</a></p></span>
        </div>

      </div>

      {/* Follow Us */}
      <div className="footer-social">
        <p className="follow">Follow Us On Social Media</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/madeformanners/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/MannersFor79214" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.tiktok.com/@user1742031833181" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/in/made-for-manners" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>© {new Date().getFullYear()} Made for Manners. All rights reserved.</p>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <NavLink to="/policy" className="policy-link">
          Policies & Terms
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
