import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./Carousel.css"; 

const images = [
  { src: "images/home11.jpg", alt: "Beautiful landscape with mountains" },
  { src: "images/home2.jpg", alt: "Serene beach during sunset" },
  { src: "images/home4.jpg", alt: "Lush green forest path" },
  { src: "images/home1.jpg", alt: "Cozy cafe with warm lighting" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

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
      <div className="carousel-image-wrapper">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="carousel-image"
          loading="lazy"
        />
      </div>

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
            className={`carousel-indicator ${
              index === idx ? "carousel-indicator-active" : ""
            }`}
            onClick={() => setIndex(idx)}
          >
            ●
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
