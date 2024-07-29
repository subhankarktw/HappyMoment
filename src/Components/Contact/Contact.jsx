import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        gap: 2,
        mt: 1,
        height: "100vh",
        bgcolor: "black", // Set background color to black
        color: "#8bc34a", // Set text color to #8bc34a
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Get in Touch
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        We’d love to hear from you! Whether you have questions about our
        products, need assistance with an order, or just want to share your
        feedback, feel free to reach out to us.
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
          gap: 2,
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
              color: "#8bc34a", // Set input text color to light green
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color to light green
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color on hover to light green
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color when focused to light green
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8bc34a", // Set label color to light green
              "&.Mui-focused": {
                color: "#8bc34a", // Set label color when focused to light green
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
              color: "#8bc34a", // Set input text color to light green
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color to light green
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color on hover to light green
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color when focused to light green
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8bc34a", // Set label color to light green
              "&.Mui-focused": {
                color: "#8bc34a", // Set label color when focused to light green
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
              color: "#8bc34a", // Set input text color to light green
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color to light green
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color on hover to light green
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8bc34a", // Set input border color when focused to light green
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8bc34a", // Set label color to light green
              "&.Mui-focused": {
                color: "#8bc34a", // Set label color when focused to light green
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#8bc34a", // Set button background color to light green
            color: "black", // Set button text color to black
            "&:hover": {
              bgcolor: "#7cb342", // Set button background color on hover to a darker green
            },
          }}
          type="submit"
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
