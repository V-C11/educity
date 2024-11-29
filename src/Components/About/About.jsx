import "./About.css";
import about_img from "../../assets/about.png";
import about_img1 from "../../assets/play-icon.png";

const About = ({ setPlatState }) => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_img} className="about_img" alt="aing" />
        <img
          src={about_img1}
          className="play_icon"
          alt="aing"
          onClick={() => {
            setPlatState(true);
          }}
        />
      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomrrow`s Leader Today</h2>
        <p>
          BHMS course fees range between INR 1.5 Lakh and INR 3 Lakh. For BHMS
          admission, universities solely consider NEET scores. Popular colleges
          offering BHMS courses include Dr D.Y. Patil Vidyapeeth, Parul
          University, MUHS, Kerala University of Health Sciences,
        </p>
        <p>
          No, BHMS is not difficult than MBBS but almost at par with it. The
          curriculum is same as MBBS except the pharmacy part which of course is
          different.
        </p>
        <p>MBBS except the pharmacy part which of course is different.</p>
      </div>
    </div>
  );
};

export default About;
