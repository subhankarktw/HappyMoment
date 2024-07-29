import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { profile } from "../../Redux/authSlice"; // Ensure correct import path

export default function Profile() {
  const dispatch = useDispatch();
  const { user, upload_status, profilePic } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // Loading state
  if (upload_status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Log the profile picture URL for debugging
  console.log("Profile Picture URL:", profilePic);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        height: "100vh",
        gap: 2,
        backgroundColor: "black", // Set background color to black
        color: "#8bc34a", // Set text color to light green
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        User Profile
      </Typography>

      <Avatar
        alt="Profile Picture"
        src={profilePic || "/path/to/default/profile-pic.png"} // Fallback image
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />

      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <TextField
          label="First Name"
          variant="outlined"
          value={user?.first_name || ""}
          fullWidth
          sx={{ marginBottom: 2 }}
          InputProps={{
            readOnly: true,
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
            },
          }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={user?.last_name || ""}
          fullWidth
          sx={{ marginBottom: 2 }}
          InputProps={{
            readOnly: true,
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
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={user?.email || ""}
          fullWidth
          sx={{ marginBottom: 2 }}
          InputProps={{
            readOnly: true,
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
            },
          }}
        />
      </Box>
    </Box>
  );
}
