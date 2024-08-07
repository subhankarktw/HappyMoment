import React from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountBox from "@mui/icons-material/FolderOpen"; // Import the portfolio icon

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        py: 3,
        px: 2,
      }}
    >
      <Grid container spacing={2}>
        {/* Contact Details */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
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
              style={{ textDecoration: 'none', color: 'white' }} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <AccountBox sx={{ verticalAlign: 'middle', marginRight: 1 }} /> {/* Icon beside text */}
              Portfolio
            </a>
          </Typography>
        </Grid>

       
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
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

       
        <Grid item xs={12}>
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
          <Typography variant="body2" align="center">
            Developed by Subhankar Sinha
          </Typography>
          <Typography variant="body2" align="center">
            Copyright © 2024. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
