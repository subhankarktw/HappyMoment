import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, TextField, CircularProgress, Grid } from "@mui/material";
import { profile } from "../../Redux/authSlice"; 
import { profile_Url } from "../../Helper/Helper";
import './Profile.css'; // Import the CSS file

export default function Profile() {
  const dispatch = useDispatch();
  const { user, upload_status } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profilePicUrl = profile_Url(user.profile_pic);

  if (upload_status === "loading") {
    return (
      <Box className="profile-container">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="profile-container">
      <Typography className="profile-title">
        Profile Details
      </Typography>

      {user.profile_pic && (
        <Grid item xs={12} container justifyContent="center">
          <Box className="profile-pic-container">
            <img
              src={profilePicUrl}
              alt="Profile"
              className="profile-pic"
            />
          </Box>
        </Grid>
      )}

      <Box sx={{ width: "100%", maxWidth: 400 , mb:24}}>
        <TextField
          label="First Name"
          variant="outlined"
          value={user?.first_name || ""}
          fullWidth
          className="text-field"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={user?.last_name || ""}
          fullWidth
          className="text-field"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={user?.email || ""}
          fullWidth
          className="text-field"
          InputProps={{
            readOnly: true,
          }}
          
        />
      </Box>
    </Box>
  );
}
