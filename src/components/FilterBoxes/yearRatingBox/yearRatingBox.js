import React, { useState } from "react";
import Draggable from "react-draggable";

function YearRatingBox({ isOpen, toggleDropdown }) {
  const [ratingStart, setRatingStart] = useState(1980);
  const [ratingEnd, setRatingEnd] = useState(2024);
  const yearRange = 2024 - 1980;
  const draggableWidth = 533;
  const scalingFactor = draggableWidth / yearRange;

  const calculateYear = (xPosition) => {
    return Math.round(xPosition / scalingFactor) + 1980;
  };

  const handleStartDrag = (e, data) => {
    setRatingStart(Math.min(calculateYear(data.x), ratingEnd));
  };

  const handleEndDrag = (e, data) => {
    setRatingEnd(Math.max(calculateYear(data.x), ratingStart));
  };

  return (
    <div className="filter-radius">
      <div className="filter-box">
        <input
          placeholder="IMDb Rating"
          readOnly
          className="language-input"
          value={`${ratingStart} - ${ratingEnd}/2024`}
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
        <div className="language-dropdown">
          <div style={{ backgroundColor: "black" }}>
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
              <Draggable
                axis="x"
                bounds={{ left: 0, right: (ratingEnd - 1980) * scalingFactor }}
                onDrag={handleStartDrag}
              >
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
              <Draggable
                axis="x"
                bounds={{
                  left: (ratingStart - 1980) * scalingFactor,
                  right: draggableWidth,
                }}
                onDrag={handleEndDrag}
              >
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
          </div>
        </div>
      )}
    </div>
  );
}

export default YearRatingBox;
