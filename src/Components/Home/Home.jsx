import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import "./Home.css"; 

export default function Home() {
  return (
    <>
      <Carousel className="carousel-container" />
      <Box className="home-container">
        {[
          {
            imgSrc: "images/home01.jpg",
            title: "Welcome to My Lifestyle Blog!",
            description:
              "Welcome to my lifestyle blog, a space dedicated to celebrating the joyous moments that life has to offer. Here, I share my thoughts, experiences, and stories that reflect the beauty in everyday life. My mission is to inspire you to embrace positivity, explore new adventures, and cherish the little things that bring happiness. Join me as I delve into various topics, including travel, wellness, creativity, and personal growth. I believe that sharing our journeys can foster a sense of community and support. This blog is not just a reflection of my life; it’s a celebration of yours too. Let’s embark on this journey together, exploring what makes us happy, and creating a space where we can uplift and encourage each other. I hope you find joy and inspiration in the stories shared here, and I look forward to hearing about your happy moments as well!",
          },
          {
            imgSrc: "images/home02.jpg",
            title: "Share Your Happy Moments",
            description:
              "Everyone has special moments that fill their hearts with joy, and I invite you to share yours. In this corner of the blog, we celebrate the beautiful memories that shape our lives. Whether it’s a significant achievement, a family gathering, or simply a serene moment in nature, each experience holds a story worth sharing. By expressing our feelings and reflections, we create connections that transcend boundaries. I encourage you to join the conversation and submit your happy moments. Together, we can create a tapestry of joy and positivity that inspires others. This space is all about authenticity and vulnerability; we are here to celebrate our uniqueness and shared experiences. Let’s embrace the power of storytelling as a way to uplift one another and recognize the beauty in our lives. Every moment shared is a step toward building a community filled with love, support, and happiness. So, don’t hold back; let’s create a joyful narrative together!",
          },
          {
            imgSrc: "images/home03.jpg",
            title: "Daily Inspiration",
            description:
              "In our fast-paced world, finding inspiration in daily life can be a challenge. Here, I share thoughts, quotes, and stories that spark motivation and positivity. Each day brings new opportunities for growth, creativity, and self-discovery. Let’s explore the small joys that often go unnoticed—those moments that ignite a sense of wonder and curiosity. Through this blog, I aim to cultivate an appreciation for life’s simple pleasures and remind you that inspiration can be found everywhere, from a morning coffee to a walk in the park. Together, we can embrace a mindset of gratitude and open ourselves up to the beauty surrounding us. By focusing on the positive, we can transform our perspectives and enhance our daily experiences. I encourage you to join me on this journey of exploration and mindfulness, as we uncover the extraordinary within the ordinary. Let’s share our stories of inspiration and uplift each other on our paths to happiness.",
          },
          {
            imgSrc: "images/home04.jpg",
            title: "Mindfulness and Well-being",
            description:
              "Discover tips on practicing mindfulness and enhancing your overall well-being. In our busy lives, it’s essential to carve out time for self-care and reflection. Mindfulness allows us to connect with ourselves and the present moment, fostering a deeper understanding of our thoughts and feelings. Through practices like meditation, journaling, and mindful breathing, we can cultivate a sense of peace and clarity. This section of the blog will explore various techniques and insights to help you incorporate mindfulness into your daily routine. Additionally, I will share personal stories about my journey toward mental and emotional well-being, emphasizing the importance of self-compassion and resilience. Let’s embark on this journey together, supporting each other as we navigate the challenges of life. By embracing mindfulness, we can create a nurturing environment for our minds and hearts, allowing us to thrive and find joy in every moment. Together, we can build a community that prioritizes well-being and happiness.",
          },
          {
            imgSrc: "images/home05.png",
            title: "Travel Adventures",
            description:
              "Join me on my travel adventures as I explore new cultures, delicious cuisines, and breathtaking landscapes that create lasting memories. Traveling has a unique way of broadening our perspectives and enriching our lives. In this section, I will share stories from my journeys, highlighting the beautiful moments and valuable lessons learned along the way. Whether it's wandering through a bustling market, hiking a scenic trail, or relaxing on a tranquil beach, each adventure holds a special place in my heart. I’ll also provide practical tips for fellow travelers, including packing essentials, destination recommendations, and insights on immersing yourself in local culture. Traveling isn’t just about the destinations; it’s about the connections we make and the experiences we share. Let’s inspire each other to explore the world around us and uncover the wonders that await us. Your next adventure could be just around the corner, and I’m excited to share this journey with you!",
          },
          {
            imgSrc: "images/home06.jpg",
            title: "Healthy Living",
            description:
              "Embrace healthy living with delicious recipes and lifestyle tips designed to nourish your body and soul. In this section of the blog, I will share nutritious meal ideas, cooking tips, and insights into maintaining a balanced lifestyle. Eating healthy doesn’t have to be boring; I believe that food should be enjoyable and satisfying. Whether you’re looking for quick weeknight dinners or wholesome snacks, you’ll find plenty of inspiration here. Additionally, I’ll delve into the importance of physical activity and how it can enhance our overall well-being. From simple exercises you can do at home to fun outdoor activities, let’s explore ways to stay active and energized. I’ll also touch on mental health and self-care practices that contribute to a healthier lifestyle. Together, we can create a supportive community focused on wellness, encouraging each other to make positive choices and celebrate our progress on the journey to better health.",
          },
          {
            imgSrc: "images/home07.jpg",
            title: "Creative Hobbies",
            description:
              "Explore creative hobbies that bring joy and relaxation to your life. Engaging in creative activities can be a wonderful way to express ourselves and relieve stress. In this section, I will share my favorite hobbies, from painting and photography to writing and crafting. Each hobby offers a unique outlet for creativity and self-expression, allowing us to tap into our imagination and explore new ideas. I’ll also provide tips and tutorials to help you get started or enhance your skills. Whether you’re a seasoned artist or a curious beginner, there’s something for everyone to enjoy. Let’s inspire each other to embrace creativity and make time for hobbies that spark joy. We’ll also discuss the therapeutic benefits of creative expression and how it can enhance our mental and emotional well-being. Together, we can create a community that values creativity and encourages everyone to explore their passions and share their talents with the world.",
          },
          {
            imgSrc: "images/home08.webp",
            title: "Celebrating Milestones",
            description:
              "Life is a collection of milestones worth celebrating. In this section of the blog, we will reflect on significant achievements, both big and small, that shape our journeys. Celebrating milestones—whether it's a graduation, a new job, or personal growth—allows us to acknowledge our hard work and dedication. I will share personal stories and encourage you to reflect on your own milestones, creating a space to honor your accomplishments. Together, we can inspire one another to set new goals and strive for excellence. Milestones are not just about the destination; they are about the journey and the lessons learned along the way. Let’s share our stories of resilience and triumph, reminding each other that every step forward deserves recognition. By celebrating together, we build a supportive community that uplifts and motivates each other to chase our dreams and embrace the exciting opportunities that lie ahead.",
          },
          {
            imgSrc: "images/home09.png",
            title: "Acts of Kindness",
            description:
              "Join me in spreading kindness! Small acts of kindness can have a huge impact, creating ripples of positivity in our communities. In this section, I’ll share inspiring stories of kindness, both from my experiences and from those around me. We’ll explore ways to incorporate kindness into our daily lives, whether it’s through volunteering, helping a neighbor, or simply offering a smile to a stranger. Acts of kindness not only benefit others but also enrich our own lives, fostering a sense of connection and fulfillment. Let’s celebrate the power of kindness and inspire one another to make a difference in the world. Together, we can create a culture of compassion and empathy, showing that our actions can inspire hope and positivity. I encourage you to share your own stories of kindness and join the movement to uplift those around us. Let’s work together to build a kinder, more compassionate world for everyone.",
          },
          {
            imgSrc: "images/home10.jpg",
            title: "Finding Joy in Nature",
            description:
              "Reconnect with nature and find joy in the great outdoors. In this section, I will share my experiences exploring beautiful landscapes, hiking trails, and serene parks. Nature has an incredible ability to rejuvenate our spirits and provide solace in a busy world. I’ll discuss the benefits of spending time outdoors, from improving mental health to fostering a deeper connection with the environment. Whether it’s a peaceful walk in the woods or a day at the beach, nature offers countless opportunities for relaxation and reflection. Let’s celebrate the beauty of the natural world and inspire each other to embrace outdoor adventures. I’ll also share practical tips for enjoying nature responsibly and making the most of your outdoor experiences. Together, we can create a community that values the wonders of nature and encourages everyone to explore and appreciate the great outdoors.",
          },
        ].map((item, index) => (
          <Box key={index} className="section-box">
            <img src={item.imgSrc} alt={item.title} className="section-image" />
            <Typography className="section-title">{item.title}</Typography>
            <Typography className="section-description">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
