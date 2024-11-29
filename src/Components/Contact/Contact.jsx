import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import pghone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import wa from "../../assets/white-arrow.png";
import { KEY } from "../../utils/constant";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg} alt="" />
        </h3>
        <p>
          The medical knowledge of the homeopathic system is included in this
          degree. After completing this degree, you will be qualified to
          practice homeopathy as a doctor. The degree holder is qualified to use
          the prefix which is abbreviated as Dr. Homeopathy is an alternative
          medicine system.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" />
            Contact@educity.gmail.com
          </li>
          <li>
            <img src={pghone} alt="" /> +91 123-4567-789
          </li>
          <li>
            <img src={location} alt="" /> carrigton, mancheter
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} action="">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea name="message" id="" rows="6"></textarea>
          <button className="btn dark_btn" type="submit">
            Submit Now
            <img src={wa} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
