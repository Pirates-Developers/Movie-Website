import "./ratingBox.css";
import React, { useState } from "react";

function RatingSelector({ isOpen, toggleDropdown }) {
  const [selectedRating, setSelectedRating] = useState(5);

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div className="filter-radius">
      <div className="filter-box">
        <input
          placeholder="IMDb Rating"
          readOnly
          className="language-input"
          value={`${selectedRating}/10`}
          onClick={toggleDropdown}
        />
        <div className="bottom-arrow" onClick={toggleDropdown}>
          <img
            src="./assets/images/header-films-img/Vector.png"
            alt="arrow-icon"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="rating-dropdown">
          <input
            type="range"
            min="1"
            max="10"
            value={selectedRating}
            className="rating-slider"
            onChange={handleRatingChange}
          />
        </div>
      )}
    </div>
  );
}

export default RatingSelector;
