import "./Program.css";
import p1 from "../../assets/program-1.png";
import p2 from "../../assets/program-2.png";
import p3 from "../../assets/program-3.png";
import pi1 from "../../assets/program-icon-1.png";
import pi2 from "../../assets/program-icon-2.png";
import pi3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={p1} alt="p1" />
        <div className="caption">
          <img src={pi1} alt="pi1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p2} alt="p2" />
        <div className="caption">
          <img src={pi2} alt="pi2" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p3} alt="p3" />
        <div className="caption">
          <img src={pi3} alt="pi3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};
export default Program;
