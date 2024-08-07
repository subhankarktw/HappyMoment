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
        bgcolor: "white", 
        color: "black", 
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

      
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
          gap: 2,
          m:2
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
                borderColor: "black", 
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black", 
              "&.Mui-focused": {
                color: "black", 
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
                borderColor: "black", 
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black", 
              "&.Mui-focused": {
                color: "black", 
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
                borderColor: "black", 
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", 
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black", 
              "&.Mui-focused": {
                color: "black", 
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "white", 
            color: "black", 
            "&:hover": {
              bgcolor: "#7cb342", 
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
