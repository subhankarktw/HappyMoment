import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Carousel from "./Carousel";
import "./Home.css";

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const partners = [
    { name: "InspireWriters", logo: "images/partner1.png" },
    { name: "MindfulScribes", logo: "images/partner2.png" },
    { name: "EchoChapters", logo: "images/partner3.png" },
    { name: "VerseVault", logo: "images/partner4.png" },
  ];

  const featuredPosts = [
    {
      imgSrc: "images/Embrace Each Day with Positivity.jpeg",
      title: "Embrace Each Day with Positivity",
      description:
        "Each new day offers a fresh opportunity to find joy and grow. This post delves into how positive changes in your daily routine can foster a more fulfilling life. Learn about the power of affirmations, morning rituals, and staying motivated. Embracing these practices will help you overcome life's challenges, filling your days with positivity and motivation for ongoing personal growth.",
    },
    {
      imgSrc: "images/home04.jpg",
      title: "A Path to Inner Peace",
      description:
        "In our hectic world, mindfulness is a sanctuary for the mind and soul. This post introduces simple mindfulness techniques, like mindful breathing and creating a peaceful home environment. These practices can reduce stress, improve focus, and enhance your well-being. Embrace mindfulness to find inner peace and maintain balance in your life amidst the chaos.",
    },
    {
      imgSrc: "images/home05.png",
      title: "My Travel Adventures",
      description:
        "Travel opens up a world of new perspectives. Join me as I share stories from my adventures, from Tokyo's busy streets to Bali's tranquil beaches. Each journey offers unique discoveries, showcasing beautiful landscapes, local cuisines, and memorable encounters. Explore how travel enriches our lives, broadens our horizons, and creates unforgettable memories.",
    },
    {
      imgSrc: "images/home06.jpg",
      title: "Healthy Eating for a Better Life",
      description:
        "Eating well is a cornerstone of a healthy lifestyle. This post provides tips on incorporating nutritious foods into your diet, exploring the benefits of balanced meals, and making healthy eating enjoyable. Discover recipes, meal planning strategies, and how to overcome common dietary challenges to enhance your overall well-being.",
    },
    {
      imgSrc: "images/Mastering Time Management.jpg",
      title: "Mastering Time Management",
      description:
        "Effective time management can transform your productivity and reduce stress. Learn strategies to prioritize tasks, set achievable goals, and balance work and personal life. This post offers practical advice on creating schedules, avoiding procrastination, and making the most of your time, leading to a more organized and fulfilling life.",
    },
    {
      imgSrc: "images/Exploring Creativity Through Art.jpg",
      title: "Exploring Creativity Through Art",
      description:
        "Artistic expression is a powerful way to explore creativity and personal growth. This post delves into various forms of art, from painting and sculpture to digital design and writing. Discover how engaging with art can inspire, heal, and provide a deeper connection to your inner self and the world around you.",
    },
  ];

  const differentPosts = [
    {
      imgSrc: "images/wellness.jpg",
      title: "Wellness Tips",
      description:
        "Discover wellness tips for a healthier, balanced life. This section provides insights into nutrition, mental health, and practical advice to help you improve your well-being and maintain a harmonious lifestyle in today’s fast-paced world.",
    },
    {
      imgSrc: "images/creativity.jpg",
      title: "Creative Corner",
      description:
        "Unleash your creativity with our Creative Corner. Whether you enjoy painting, writing, or any form of art, find inspiration and practical tips to fuel your creative endeavors. Explore new techniques and ideas to bring your artistic visions to life.",
    },
    {
      imgSrc: "images/tech.jpg",
      title: "Tech Insights",
      description:
        "Stay updated with the latest tech trends and innovations. Our Tech Insights cover everything from new gadgets to industry news. Learn about the technologies shaping our future and their potential impact on your life.",
    },

    {
      imgSrc: "images/travel.jpg",
      title: "Travel Guides",
      description:
        "Explore the world with our comprehensive travel guides. From hidden gems to popular destinations, find tips on where to stay, what to eat, and must-see attractions. Start planning your next adventure with insights that cater to both seasoned travelers and first-time explorers.",
    },
    {
      imgSrc: "images/fitness.jpg",
      title: "Fitness Goals",
      description:
        "Achieve your fitness goals with expert advice on workouts, training routines, and motivational strategies. Whether you're a beginner or an experienced athlete, our fitness section offers the guidance you need to stay fit, healthy, and active.",
    },
    {
      imgSrc: "images/cooking.jpg",
      title: "Culinary Delights",
      description:
        "Dive into the world of culinary delights with recipes, cooking tips, and food stories from around the globe. Whether you're a home cook or a food enthusiast, discover delicious dishes and techniques to elevate your cooking game and enjoy every meal.",
    },
  ];

  const testimonials = [
    {
      text: "I've been following this blog for months, and it's become a staple in my daily routine. The content is always uplifting and thought-provoking.",
      author: "Subhankar Sinha",
      bgColor: "#f0f8ff",
      borderColor: "#dcdcdc",
    },
    {
      text: "The variety of topics covered is impressive. From travel to mindfulness, each post brings something new and valuable to my life.",
      author: "Rituparna Das",
      bgColor: "#f5f5dc",
      borderColor: "#e0e0e0",
    },
    {
      text: "I appreciate the genuine and personal touch of each post. It feels like a conversation with a friend who truly understands and cares.",
      author: "Sumanta Baral",
      bgColor: "#e6ffe6",
      borderColor: "#c0c0c0",
    },
  ];

  return (
    <>
      <Carousel className="carousel-container" />

      <Box className="home-container">
        <Box className="section-box featured-posts">
          <Typography className="section-title">Featured Posts</Typography>
          <Grid container spacing={2}>
            {featuredPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Card
                  className="featured-card"
                  sx={{
                    height: {
                      xs: "auto",
                      md: "auto",
                      lg: 520,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.imgSrc}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="section-box different-posts">
          <Typography className="section-title">Explore More</Typography>
          <Grid container spacing={2}>
            {differentPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Card
                  className="different-card"
                  sx={{
                    height: {
                      xs: "auto",
                      md: "auto",
                      lg: 480,
                    },
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.imgSrc}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="section-box testimonials">
          <Typography className="section-title">
            What Our Readers Say
          </Typography>
          <Grid container spacing={2}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  className="testimonial-card"
                  sx={{
                    bgcolor: testimonial.bgColor,
                    border: `1px solid ${testimonial.borderColor}`,
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.text}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary.main"
                      className="testimonial-author"
                    >
                      - {testimonial.author}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          className="section-box cta-subscription"
          style={{ backgroundImage: `url(/images/home03.jpg)` }}
        >
          <Typography className="section-title">
            Subscribe to Our Newsletter
          </Typography>
          <Typography className="section-description">
            Stay updated with the latest posts, tips, and inspiration. Join our
            community of happy readers!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="subscribe-button"
          >
            Subscribe Now
          </Button>
        </Box>

        <Box className="section-box partners">
          <Typography className="section-title">
            Our Trusted Partners
          </Typography>
          <Grid container spacing={2}>
            {partners.map((partner, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  style={{
                    width: isSmallScreen ? "75px" : "100px",
                    height: isSmallScreen ? "75px" : "100px",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          className="section-box modern-cta"
          sx={{
            position: "relative",
            backgroundImage: "url(images/travel.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <Typography className="section-title" variant="h4">
            Join Our Community Today!
          </Typography>
          <Typography className="section-description" variant="body1">
            Be part of a vibrant community that celebrates life's best moments.
            Share your stories, connect with others, and explore the world with
            us.
          </Typography>
          <Button variant="contained" color="secondary" className="join-button">
            Join Now
          </Button>
        </Box>
      </Box>
    </>
  );
}
