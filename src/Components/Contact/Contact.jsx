import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left side for the map */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" }, // Hide on small screens
          justifyContent: "center",
          alignItems: "center",
          
          bgcolor: "#e3f2fd", // Light blue background
        }}
      >
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

      {/* Right side for the form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          bgcolor: "#f5f5f5", // Light grey background
          color: "black",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#1976d2" }}> {/* Primary blue */}
          Get in Touch
        </Typography>
        <Typography sx={{ textAlign: "center", color: "#555" }}>
          We’d love to hear from you! Whether you have questions about our
          products, need assistance with an order, or just want to share your
          feedback, feel free to reach out to us.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 400,
            gap: 2,
            m: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Name"
            variant="outlined"
            required
            InputProps={{
              sx: {
                color: "black",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2", // Primary blue
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2",
                "&.Mui-focused": {
                  color: "#1976d2",
                },
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            required
            InputProps={{
              sx: {
                color: "black",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2",
                "&.Mui-focused": {
                  color: "#1976d2",
                },
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            InputProps={{
              sx: {
                color: "black",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2",
                "&.Mui-focused": {
                  color: "#1976d2",
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976d2", // Primary blue
              color: "white",
              "&:hover": {
                bgcolor: "#1565c0", // Darker blue on hover
              },
            }}
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
