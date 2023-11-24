import React, { useState } from "react";
import "./ImageChange.css";

export function ImageChange(props) {
  const [mainImage, setMainImage] = useState("/assets/images/movie-img-1.png"); // Replace with your default image
  const images = [
    "/assets/images/movie-img-2.png",
    "/assets/images/movie-img-3.png",
    "/assets/images/movie-img-4.png",
  ]; // Replace with your image URLs

  return (
    <div className="image-change">
      <div className="choose-image">
        {images.map((image, index) => (
          <div key={index} onClick={() => setMainImage(image)}>
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className="image-container">
        <img src={mainImage} alt="Main Display" />
      </div>
    </div>
  );
}
