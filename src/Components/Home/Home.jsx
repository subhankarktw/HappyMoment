import { Box, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        mt: 4,
        gap: 4,
        bgcolor: "white",
        color: "black",fontFamily: "monospace",
      }}
    >
      {/* First Division: Blog Introduction */}
      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#f5f5f5",
          color: "black",
          borderRadius: 2,
          textAlign: "center",
          mt: 4,fontFamily: "monospace",
        }}
      >
        <img
          src="images/home1.jpg" // Replace with your image path
          alt="Blog Introduction"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        />
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome to My Lifestyle Blog!
        </Typography>
        <Typography>
          Welcome to my lifestyle blog, a space where I share the joyous moments that life has to offer. Here, I explore the little things that bring happiness, from delightful experiences to heartwarming stories. Life is a collection of memories, and I believe it’s essential to cherish them. Each post invites you to reflect on your own happy moments and encourages you to find joy in the everyday. Whether it’s enjoying a cup of coffee on a sunny morning or celebrating milestones with loved ones, this blog serves as a reminder to embrace positivity. My journey is filled with gratitude and inspiration, and I hope that by sharing my experiences, I can inspire you to create and celebrate your own joyful moments. Thank you for joining me on this adventure of happiness and self-discovery!
        </Typography>
      </Box>

      {/* Second Division: Share Your Happy Moment */}
      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#e0f7fa",
          color: "black",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <img
          src="images/home2.jpg" // Replace with your image path
          alt="Share Your Happy Moments"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        />
        <Typography variant="h6">Share Your Happy Moments</Typography>
        <Typography>
          Everyone has special moments that fill their hearts with joy, and I invite you to share yours. Life is a tapestry woven from experiences, and each thread represents a cherished memory. Whether it’s a spontaneous trip, a celebration with family and friends, or simply enjoying nature’s beauty, these moments deserve to be shared. By opening up and expressing our joy, we create connections and inspire others to do the same. This section of the blog is dedicated to you—submit your stories, and let’s build a community of positivity and happiness together. Remember, it’s often the simple things that bring the most joy, like a shared laugh or a warm hug. So, let’s gather our stories and celebrate the happiness that life brings. I can’t wait to read your happy moments and celebrate them alongside you!
        </Typography>
      </Box>

      {/* Third Division: Daily Inspiration */}
      <Box
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "#ffe0b2",
          color: "black",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <img
          src="images/home3.jpg" // Replace with your image path
          alt="Daily Inspiration"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        />
        <Typography variant="h6">Daily Inspiration</Typography>
        <Typography>
          In our fast-paced world, finding inspiration in daily life can be a challenge, but it’s essential for cultivating a positive mindset. This section of the blog is dedicated to uplifting quotes, motivational stories, and practical tips to help you embrace happiness every day. Inspiration can be found in the smallest moments—a kind gesture from a stranger, a breathtaking sunset, or a heartwarming story shared among friends. Here, I aim to remind you of the beauty that exists in life, encouraging you to appreciate the present. Each day is an opportunity to create joy and discover something new. Together, we’ll explore various themes, from mindfulness to gratitude, allowing us to reflect and grow. Let’s embark on this journey of positivity and inspiration, uplifting one another to live our best lives, filled with love, laughter, and happiness!
        </Typography>
      </Box>
    </Box>
  );
}
