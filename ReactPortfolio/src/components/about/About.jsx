import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card bg2"></div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Deatil orientated, Thrill-Seeker, Adventorous
        </p>
        <p className="a-desc">
         Hi, My names Konner, I've been programming since I was 16, started
         off doing C# and Java but then made the transition into web-development.
         I enjoy skydiving and learning new ways to improve myself.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Full Stack Certification - MSU</h4>
            <p className="a-award-desc">
              I graduated from my full-stack course at MSU July, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;