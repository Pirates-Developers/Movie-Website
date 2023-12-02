import "./ratingBox.css";
import { useState } from "react";
import { Box, Slider } from "@mui/material";

function RatingSelector({ isOpen, toggleDropdown }) {
  const minDistance = 0;
  const startRating = 0.0;
  const endRating = 10.0;

  const [ratingRange, setRatingRange] = useState([startRating, endRating]);

  const handleChangeRange = (_, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRatingRange([
        Math.min(newValue[0], ratingRange[1] - minDistance),
        ratingRange[1],
      ]);
    } else {
      setRatingRange([
        ratingRange[0],
        Math.max(newValue[1], ratingRange[0] + minDistance),
      ]);
    }
  };

  return (
    <div className="filter-radius" onClick={toggleDropdown}>
      <div className="filter-box">
        <input
          placeholder="IMDb Rating"
          readOnly
          className="language-input"
          value={`რეიტინგი`}
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
        <div className="language-dropdown rating-range">
          <Box className="slider-box">
            <Slider
              className="slider"
              value={ratingRange}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              step={0.1}
              min={startRating}
              max={endRating}
              disableSwap
            />
          </Box>
          {/* <div style={{ backgroundColor: "black" }}>
            <div
              style={{
                position: "relative",
                width: "533px",
                height: "50px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  width: "100%",
                  border: "1px solid white",
                  background:
                    "linear-gradient(90deg, rgba(255, 0, 188, 0.71) 0%, rgba(0, 178, 255, 0.6816) 100%)",
                }}
              ></div>
              <Draggable axis="x" bounds="parent" onDrag={handleStartDrag}>
                <div
                  style={{
                    position: "absolute",
                    transform: `translateX(${ratingStart * 0.1}px)`,
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                      textAlign: "center",
                    }}
                  >
                    {ratingStart}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </div>
              </Draggable>
              <Draggable axis="x" bounds="parent" onDrag={handleEndDrag}>
                <div
                  style={{
                    position: "absolute",
                    transform: `translateX(${ratingStart * 0.1}px)`,
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                      textAlign: "center",
                    }}
                  >
                    {ratingEnd}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </div>
              </Draggable>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default RatingSelector;
