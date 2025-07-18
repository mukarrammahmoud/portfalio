/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms access key
    formData.append("access_key", "e1479766-02ed-4ed5-bb65-179fbce64828");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    alert(res.message);
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in Touch</h1>
        <div className="logo"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Collaborate</h1>
          <p>
            I'm actively looking for frontend or Mobile application
            opportunities and open to team projects. Feel free to reach out —
            I'd love to connect!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>mukarrammahmoud8@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Sana'a, Yemen</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
