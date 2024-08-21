import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import React from "react";
import "./Contact.css"; 

export default function Contact() {
  return (
    <Box className="contact-container">
      <Box className="contact-image">
        <img
          src="images/contact.jpg"
          alt="Contact Us"
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
        />
      </Box>

      <Grid container sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6} className="contact-map-container">
          <iframe
            title="Google Map of Baharan, West Bengal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29219.969293178718!2d88.07182107944149!3d23.72968001794569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9a1c03f779667%3A0x84e2d130fbc13bcc!2sBaharan%2C%20West%20Bengal%20713130!5e0!3m2!1sen!2sin!4v1723175978418!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="contact-form-container">
            <Typography variant="h4" className="contact-title">
              Get in Touch
            </Typography>
            <Typography className="contact-description">
              We’d love to hear from you! Whether you have questions about our
              products, need assistance with an order, or just want to share your
              feedback, feel free to reach out to us.
            </Typography>

            <Box
              component="form"
              className="contact-form"
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Name"
                variant="outlined"
                required
                className="contact-textfield"
                InputLabelProps={{
                  className: "contact-textfield-label",
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                required
                className="contact-textfield"
                InputLabelProps={{
                  className: "contact-textfield-label",
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                className="contact-textfield"
                InputLabelProps={{
                  className: "contact-textfield-label",
                }}
              />
              <Button
                variant="contained"
                className="contact-button"
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
