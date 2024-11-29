import "./Hero.css";
import dark_arw from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better educarion for a better wolrld</h1>
        <p>
          Handpicked image slider and content carousel design inspiration. While
          most people avoid using image sliders in web pages these days, there
          are still a few scenarios where they might prove useful.
        </p>
        <button className="btn">Explore More <img src={dark_arw} alt="drk_arrow"/></button>
      </div>
    </div>
  );
};
export default Hero;
