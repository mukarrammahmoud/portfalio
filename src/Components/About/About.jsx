import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <div className="logo"></div>
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Front End Developer with hands-on experience in
              frontend technologies like React.js and Mobile Developer tools
              such as dart,Flutter. I have completed several projects involving
              both front-end and Mobile app development, showcasing my skills in
              JavaScript,dart, python, and Django
            </p>
            <p>
              I am now looking to expand my skills and gain further experience
              in the field through exciting opportunities that allow me to
              contribute to impactful projects and grow professionally.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Dart</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>python</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
