import React from "react";
import { Typography, Box, Grid, IconButton, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOpenIcon from "@mui/icons-material/FolderOpen"; // Import the portfolio icon

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        py: 4,
        px: 2,
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: subhankarsinhakatwa@gmail.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: +91 7585957009
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://subhankarsinhaportfolio.netlify.app/"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FolderOpenIcon sx={{ marginRight: 1 }} /> Portfolio
            </a>
          </Typography>
        </Grid>

        {/* Address */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body1" gutterBottom>
            Baharan
          </Typography>
          <Typography variant="body1" gutterBottom>
            Katwa, West Bengal, 713123
          </Typography>
          <Typography variant="body1" gutterBottom>
            India
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/about" style={{ textDecoration: "none", color: "white" }}>
              About
            </a>
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            <a href="/portfolio" style={{ textDecoration: "none", color: "white" }}>
              Portfolio
            </a>
          </Typography>
        </Grid>

        {/* Social Links */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Follow Me
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton
              color="inherit"
              href="mailto:subhankarsinhakatwa@gmail.com"
              aria-label="email"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/subhankar-sinha-485242219"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/subhankarktw"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 2, backgroundColor: "white" }} />
        </Grid>

        {/* Footer Text */}
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            Developed by Subhankar Sinha🧡❤💚 Copyright © 2024. All rights
            reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
