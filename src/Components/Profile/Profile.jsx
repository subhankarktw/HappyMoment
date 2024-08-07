import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  CircularProgress,
  Grid,
} from "@mui/material";
import { profile } from "../../Redux/authSlice"; 
import { profile_Url } from "../../Helper/Helper";

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        gap: 2,
        backgroundColor: "white", 
        color: "black", 
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, mt: 6 }}>
        User Profile
      </Typography>

      {user.profile_pic && (
        <Grid item xs={12} container justifyContent="center">
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100px" }}>
            <img
              src={profilePicUrl}
              alt="Profile"
              width="100px"
              height="100px"
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Grid>
      )}

      <Box sx={{ width: "100%", maxWidth: 400,  }}>
        <TextField
          label="First Name"
          variant="outlined"
          value={user?.first_name || ""}
          fullWidth
          sx={{ marginBottom: 2 }}
          InputProps={{
            readOnly: true,
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
            },
          }}
        />
      </Box>
    </Box>
  );
}
