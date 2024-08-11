import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

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
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden", mt: 7 }}>
      <SwipeableViews index={index} enableMouseEvents>
        {images.map((image, idx) => (
          <div key={idx}>
            <img
              src={image.src}
              alt={image.alt} // Updated alt text
              style={{ width: "100%", height: "auto" }} // Maintain the width and height styles
              loading="lazy"
            />
          </div>
        ))}
      </SwipeableViews>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
      <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1 }}>
        {images.map((_, idx) => (
          <Typography key={idx} variant="body1" sx={{ color: index === idx ? "white" : "gray", cursor: "pointer" }} onClick={() => setIndex(idx)}>
            ●
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
