import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./Carousel.css"; // Import the CSS file

const images = [
  { src: "images/home1.jpg", alt: "Beautiful landscape with mountains" },
  { src: "images/home2.jpg", alt: "Serene beach during sunset" },
  { src: "images/home4.jpg", alt: "Lush green forest path" },
  { src: "images/home11.jpg", alt: "Cozy cafe with warm lighting" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="carousel-container">
      <SwipeableViews index={index} enableMouseEvents>
        {images.map((image, idx) => (
          <div key={idx}>
            <img
              src={image.src}
              alt={image.alt} // Updated alt text
              className="carousel-image" // Apply CSS class
              loading="lazy"
            />
          </div>
        ))}
      </SwipeableViews>
      <IconButton
        onClick={handlePrev}
        className="carousel-button carousel-button-prev"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        className="carousel-button carousel-button-next"
      >
        <KeyboardArrowRight />
      </IconButton>
      <Box className="carousel-indicators">
        {images.map((_, idx) => (
          <Typography
            key={idx}
            className={`carousel-indicator ${index === idx ? "carousel-indicator-active" : ""}`}
            onClick={() => setIndex(idx)}
          >
            ●
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
