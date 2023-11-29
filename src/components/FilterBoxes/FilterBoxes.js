import "./filterboxes.css";
import { useState } from "react";
import GenreBox from "./genreBox/GenreBox";
import LanguageBox from "./languageBox/LanguageBox";
import CountryBox from "./countryBox/CountryBox";

export default function FilterBoxes() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  return (
    <div className="formm">
      <GenreBox
        isOpen={openDropdown === "genre"}
        toggleDropdown={() => handleToggleDropdown("genre")}
      />
      <></>
      <LanguageBox
        isOpen={openDropdown === "language"}
        toggleDropdown={() => handleToggleDropdown("language")}
      />
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
      <CountryBox
        isOpen={openDropdown === "country"}
        toggleDropdown={() => handleToggleDropdown("country")}
      />
      <></>
    </div>
  );
}
