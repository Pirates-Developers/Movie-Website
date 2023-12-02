import React, { useState } from "react";
import "./genreBox.css";

function LanguageSelector({ isOpen, toggleDropdown }) {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const languages = [
    "კომედია",
    "სათავგადასავლო",
    "დრამა",
    "მელოდრამა",
    "ისტორიული",
    "დრამააა",
    "მელოდრამააა",
    "ისტორიულიიი",
    "კომედიააა",
    "სათავგადასავლოო",
    "დრამაააა",
    "მელოდრამაააა",
    "ისტორიულიი",
    "დრამაა",
    "მელოდრამაა",
    "ისტორიულია",
    "ჯუმბერი",
  ];

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
    <div className="boxes-parent">
      <div className="filter-radius" onClick={toggleDropdown}>
        <div className="filter-box">
          <input placeholder="ჟანრი" readOnly className="genre-input" />
          <div className="bottom-arrow">
            <img
              src="./assets/images/header-films-img/Vector.png"
              alt="arrow-icon"
              style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="language-dropdown">
          <div className="genre-dropdown">
            {languages.map((language) => (
              <div key={language} className="genre-option">
                <input
                  type="checkbox"
                  className="genre-buttons"
                  id={language}
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageSelection(language)}
                />
                <label htmlFor={language}>{language} </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
