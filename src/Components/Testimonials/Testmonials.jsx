import "./Testimonials.css";
import nex_btn from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import u1 from "../../assets/user-1.png";
import u2 from "../../assets/user-2.png";
import u3 from "../../assets/user-3.png";
import u4 from "../../assets/user-4.png";
import { useRef } from "react";

const TestiMonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForard = () => {
    if (tx > -50) {
      tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackard = () => {
    if (tx < 0) {
      tx += 10;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img
        src={nex_btn}
        className="nxt_btn"
        alt="testimo"
        onClick={slideForard}
      />
      <img
        src={back_icon}
        className="back_btn"
        alt="testimo1"
        onClick={slideBackard}
      />
      <div className="sliders">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u1} alt="testimo" />
                <div>
                  <h3>William Jacson</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u2} alt="testimo" />
                <div>
                  <h3>Hunter Jacson</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u3} alt="testimo" />
                <div>
                  <h3>Zod Exarion</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u4} alt="testimo" />
                <div>
                  <h3>Desir Arman</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u1} alt="testimo" />
                <div>
                  <h3>William Jacson</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u2} alt="testimo" />
                <div>
                  <h3>Hunter Jacson</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u3} alt="testimo" />
                <div>
                  <h3>Zod Exarion</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={u4} alt="testimo" />
                <div>
                  <h3>Desir Arman</h3>
                  <span>Educity. USA</span>
                </div>
              </div>
              <p>
                The medical knowledge of the homeopathic system is included in
                this degree. After completing this degree, you will be qualified
                to practice homeopathy as a doctor. The degree holder is
                qualified to use the prefix which is abbreviated as Dr.
                Homeopathy is an alternative medicine system.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestiMonials;
