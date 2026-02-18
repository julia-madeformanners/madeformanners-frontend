import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Mail, Phone, MessageCircle } from "lucide-react";
import "./ContactUsUser.scss";
import { useBetween } from "use-between";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import image from '../../images/contactUs.jpg'
import ReCAPTCHA from "react-google-recaptcha";

const countryCodes = [

  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Qatar", code: "+974" },
  { name: "Kuwait", code: "+965" },
  { name: "Oman", code: "+968" },
  { name: "Bahrain", code: "+973" },
  { name: "Jordan", code: "+962" },
  { name: "Lebanon", code: "+961" },
  { name: "Syria", code: "+963" },
  { name: "Egypt", code: "+20" },
  { name: "France", code: "+33" },
  { name: "Germany", code: "+49" },
  { name: "Turkey", code: "+90" },
  { name: "India", code: "+91" },
  { name: "Pakistan", code: "+92" },
  { name: "Philippines", code: "+63" },
 

];


const ContactUsUser = () => {
  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",

  });
  const [selectedCode, setSelectedCode] = useState("+971");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const state = useSelector((state) => state.data);
  const {
    serverUrl,
    pageDescription,
    pageKeywords,
    contactUsKeyWords,
    websiteTitle,
    setLoading,
  } = useBetween(state.useShareState);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{5,15}$/.test(phone);

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")
    const { name, email, phone, message } = formData;
    const fullPhone = `${selectedCode}${phone}`;

    if (!name || !email || !phone || !message) {
      setError("Please fill all fields ");
      return;
    }
    if (!recaptchaToken) {
      setError("Please verify that you are not a robot");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Invalid phone number (digits only)");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/contactUs`, {
        ...formData,
        phone: fullPhone,
        recaptchaToken

      });

      // await axios.post(`${serverUrl}/api/notification/contactusAlert`, {
      //   ...formData,
      //   phone: fullPhone,

      // });

      setError("Please check your email to verify your message!");
      setLoading(false);

    }

    catch (err) {
      setError("Failed to send message, please try again.");
      setLoading(false);
    } finally {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }


  };

  const content =
    "Have questions or suggestions? Feel free to reach out. We’d love to hear from you!";

  return (
    <div className="contact-us wow animate__animated animate__fadeInUp">
      <Helmet>
        <title>Contact us | {websiteTitle}</title>
        <link rel="canonical" href="https://madeformanners.com/contact" />
        <meta
          name="description"
          content="made for manners contact us +447415891605 hello@madeformanners.com"
        />
        <metahandle
          name="keywords"
          content={`${pageKeywords} ${contactUsKeyWords} ${content}`}
        />
        <meta property="og:title" content={`Contact Us - ${websiteTitle}`} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>

      <div className="header ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
          alt="Contact Us"
          className="header-img"
        />
        <h1>Contact Us</h1>
        <p>
          Your journey towards refined confidence begins here.
          <br />
          {content}
        </p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="phone-input">
            <div className="phone-wrapper">
              <select
                onChange={(e) => setSelectedCode(e.target.value)}
                value={selectedCode}
                className="country-select"
              >
                {countryCodes.map((c, index) => (
                  <option key={index} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>

              <div className="phone-field">
                <span className="phone-code">{selectedCode}</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LeqgU0sAAAAAGqCaH0j-r9S_mESLoyq5zRmCilV" // put your site key here
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <a href="mailto:hello@madeformanners.com">
            <Mail className="icon" />
            <span>hello@madeformanners.com</span>
          </a>
           <a href="tel:+447415891605">
            <Phone className="icon" />
            <span>+44 7415 891605</span>
          </a> 
           <a
            href="https://wa.me/447415891605"
            target="_blank"
            rel="noopener noreferrer"
          > 
           <MessageCircle className="icon" />
            <span>Chat on WhatsApp</span>
          </a> 

        </div>

      </div>
    </div>
  );
};

export default ContactUsUser;



