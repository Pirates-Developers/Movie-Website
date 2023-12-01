import React, { useState } from "react";
import "./languageBox.css";

function LanguageSelector({ isOpen, toggleDropdown }) {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const languages = ["ქართული", "ინგლისური", "რუსული"];

  const handleLanguageSelection = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="filter-radius">
      <div className="filter-box" onClick={toggleDropdown}>
        <input placeholder="ენა" readOnly className="language-input" />
        <div className="bottom-arrow">
          <img
            src="./assets/images/header-films-img/Vector.png"
            alt="arrow-icon"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <div key={language} className="language-option">
              <input
                type="checkbox"
                className="language-buttons"
                id={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageSelection(language)}
              />
              <label htmlFor={language}>{language} </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
