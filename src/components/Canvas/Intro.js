import "./Intro.scss";
import emoji from "react-easy-emoji";

const Intro = () => {
  const isDark = true;

  return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
              </p>
              <div className="button-greeting-div">
              </div>
            </div>
          </div>
          <div className="greeting-image-div">

              <img
                alt="man sitting on table"
              ></img>

          </div>
        </div>
      </div>
  );
};

export default Intro;
