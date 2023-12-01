import "./yearRatingBox.css";
import { useState } from "react";
import { Box, Slider } from "@mui/material";

function YearRatingBox({ isOpen, toggleDropdown }) {
  const minDistance = 0;
  const startYear = 1980;
  const endYear = 2024;

  const [yearRange, setYearRange] = useState([startYear, endYear]);

  const handleChangeRange = (_, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setYearRange([
        Math.min(newValue[0], yearRange[1] - minDistance),
        yearRange[1],
      ]);
    } else {
      setYearRange([
        yearRange[0],
        Math.max(newValue[1], yearRange[0] + minDistance),
      ]);
    }
  };

  return (
    <div className="filter-radius">
      <div className="filter-box" onClick={toggleDropdown}>
        <input
          placeholder="IMDb Rating"
          readOnly
          className="language-input"
          value={`წელი  ${yearRange[0]} - ${yearRange[1]}`}
        />
        <div className="bottom-arrow">
          <img
            src="./assets/images/header-films-img/Vector.png"
            alt="arrow-icon"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="language-dropdown year-range">
          <Box className="slider-box">
            <Slider
              className="slider"
              value={yearRange}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              step={1}
              min={startYear}
              max={endYear}
              disableSwap
            />
          </Box>
        </div>
      )}
    </div>
  );
}

export default YearRatingBox;
