/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";
import profile_img from "../../assets/mukarram.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" className="profile-img" />
      <h1>
        <span>I'm Mukarram Mahmoud,</span> Mobile developer and frontend
        Developer.
      </h1>
      <p>
        I’m a passionate FrontEnd stack developer skilled in JavaScript,
        React.js, Java and the Mobile Developer by Flutter. I'm currently
        seeking opportunities to contribute to innovative projects and grow
        professionally.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="/.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor-link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
