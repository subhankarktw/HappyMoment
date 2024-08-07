import { Box, Typography } from "@mui/material";
import React from "react";

export default function HappyMomentsBlog() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        mt: 7,
        gap: 4,
        bgcolor: "white", 
        color: "black", 
      }}
    >
      
      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#f0f0f0",
          color:"black",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Share Your Happy Moment</Typography>
        <Typography>
          Life is full of beautiful moments, and we believe that sharing them
          can inspire joy and positivity in others. Whether it’s a special
          occasion, a trip to a breathtaking destination, or a simple moment
          spent with loved ones, we invite you to share your happy moments
          with our community. By writing about your experiences, you can not
          only reflect on the joy these moments brought you, but also spread
          happiness and positivity to others. Join us in celebrating life’s
          little pleasures and create a space where everyone feels inspired
          to share their stories. Together, we can create a tapestry of joy,
          reminding ourselves that happiness is often found in the smallest
          of moments. What’s your happy moment? Let’s share it and inspire
          each other!
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#e8f5e9",
          color:"black",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Connect with Others</Typography>
        <Typography>
          Sharing your happy moments is not just about storytelling; it’s also
          about connecting with like-minded individuals who appreciate the
          beauty of life. Our lifestyle blog offers a platform for you to
          engage with others who share your passion for celebrating joyful
          experiences. By reading and commenting on each other’s stories,
          you can build meaningful connections and foster a supportive
          community. Join discussions, exchange ideas, and discover new ways
          to find happiness in everyday life. Whether it's through sharing
          photographs, writing about experiences, or simply leaving a kind
          comment, your participation can make a difference. Let’s come
          together to uplift one another and celebrate the happiness we all
          cherish. Your story could inspire someone else’s journey toward
          finding joy!
        </Typography>
      </Box>

    
      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#ffe0b2",
          color:"black",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Embrace Positivity</Typography>
        <Typography>
          In a world that can sometimes feel overwhelming, embracing positivity
          through sharing happy moments is essential. Our lifestyle blog aims
          to create a space where we focus on the good things in life, big or
          small. By writing about your happy moments, you contribute to a
          positive narrative that encourages others to look for joy in their
          lives. Happiness is contagious, and when we share our moments of
          joy, we can uplift not only ourselves but also those around us. Let’s
          fill our blog with stories that celebrate love, laughter, and the
          simple pleasures that make life worth living. Together, we can
          cultivate a culture of positivity and gratitude, reminding each other
          to appreciate the little things that bring us happiness. Join us in
          this journey and let your story shine!
        </Typography>
      </Box>
    </Box>
  );
}
