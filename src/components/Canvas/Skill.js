// import "./Skill.scss";
import emoji from "react-easy-emoji";

const Skill = () => {
  const isDark = true;

  return (
    <div className="greet-main" id="skills">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text " : "greeting-text"}
            >
              {"About SPD-MRF"}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >comming soon...... </p>
            <div className="button-greeting-div"></div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img></img>
        </div>
      </div>
    </div>
  );
};

export default Skill;
