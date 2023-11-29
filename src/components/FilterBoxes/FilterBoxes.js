import "./filterboxes.css";
import LanguageBox from "./languageBox/LanguageBox";

export default function FilterBoxes() {
  return (
    <div className="formm">
      <div className="filter-radius">
        <div className="filter-box">
          <h3>ჟანრი</h3>
          <div className="bottom-arrow">
            <img
              src="./assets/images/header-films-img/Vector.png"
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      <></>
      <LanguageBox />
      <></>
      <div className="filter-radius">
        <div className="filter-box">
          <h3>წელი</h3>
          <div className="bottom-arrow">
            <img
              src="./assets/images/header-films-img/Vector.png"
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      <></>
      <div className="filter-radius">
        <div className="filter-box">
          <h3>რეიტინგი</h3>
          <div className="bottom-arrow">
            <img
              src="./assets/images/header-films-img/Vector.png"
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      <></>
      <div className="filter-radius">
        <div className="filter-box">
          <h3>ქვეყანა</h3>
          <div className="bottom-arrow">
            <img
              src="./assets/images/header-films-img/Vector.png"
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      <></>
    </div>
  );
}
