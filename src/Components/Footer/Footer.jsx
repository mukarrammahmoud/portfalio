/* eslint-disable react/no-unescaped-entities */
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I’m a passionate FrontEnd stack developer skilled in JavaScript,
            React.js, Java and the Mobile Developer by Flutter. I'm currently
            seeking opportunities to contribute to innovative projects and grow
            professionally.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="mukarrammahmoud8@gmail.com" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <img src="Muka_logo.svg" alt="Mukarram logo" className="mylogo" />
        <p className="footer-bottom-left">
          © 2025 Mukarram Mahmoud. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>
            <a href="779622">Connect with me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
