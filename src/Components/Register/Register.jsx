import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/authSlice"; // Ensure this import path is correct
import { Box, Button, Grid, TextField, Typography, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { unwrapResult } from '@reduxjs/toolkit'; // Import unwrapResult to handle async action results

export default function Register() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImageName] = useState("");
  const dispatch = useDispatch();
  const { reDirectLogin } = useSelector((state) => state.authentication);
  const [errorMessage, setErrorMessage] = useState(""); // Add error message state
  const [loading, setLoading] = useState(false); // Add loading state

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImg(file);
      setImageName(file.name);
    }
  };

  const onSubmit = async (data) => {
    let formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("last_name", data.last_name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("profile_pic", img);

    setLoading(true); // Set loading to true before the API call

    try {
      const resultAction = await dispatch(signup(formdata));
      const result = unwrapResult(resultAction); // Unwrap the result to get the payload
      localStorage.setItem("email", result.data.email);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
      setErrorMessage("Signup failed. Please check your input and try again."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after the API call is done
    }
  };

  useEffect(() => {
    if (reDirectLogin) {
      navigate("/login");
    }
  }, [reDirectLogin, navigate]);

  return (
    <Grid container sx={{ height: "100vh", justifyContent: "center", backgroundImage: "url(images/pexels2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Grid item xs={false} sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <img src="images/children.png" alt="Happy Moments" style={{ width: "300px", height: "300px" }} />
          <Typography variant="h4" sx={{ color: "white", fontWeight: "800", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)", mt: 1, fontFamily: "monospace", }}>Happy Moments</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", padding: 4 }}>
        <Typography component="h1" variant="h5" sx={{ mt: 6, color: "black", fontWeight: "800", fontFamily: "monospace", }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ fontFamily: "monospace", mt: 2, p: 4, borderRadius: 2, backgroundColor: "white", boxShadow: 3, opacity: 0.8 }}>
          {errorMessage && (
            <Typography variant="body2" sx={{ color: "red" }}>
              {errorMessage}
            </Typography>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="first_name"
                label="First Name"
                {...register("first_name", { required: "Please enter first name" })}
                error={Boolean(errors.first_name)}
                helperText={errors.first_name?.message}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    fontFamily: "monospace",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="last_name"
                label="Last Name"
                {...register("last_name", { required: "Please enter last name" })}
                error={Boolean(errors.last_name)}
                helperText={errors.last_name?.message}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    fontFamily: "monospace",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                {...register("email", { required: "Please enter email address" })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    fontFamily: "monospace",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                {...register("password", { required: "Please enter your password" })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    fontFamily: "monospace",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                <input
                  accept="image/*"
                  type="file"
                  id="image"
                  name="img"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="image">
                  <Button variant="contained" sx={{ fontFamily: "monospace", bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }} component="span">
                    Upload Profile Picture
                  </Button>
                </label>
                {imgName && (
                  <Typography variant="body2" sx={{ fontFamily: "monospace", ml: 2, color: "black" }}>
                    {imgName}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontFamily: "monospace", mt: 2, mb: 2, bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
                  disabled={isSubmitting || loading} // Disable button while submitting
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ fontFamily: "monospace", mr: 1, color: "black" }}>
              Already registered?
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ fontFamily: "monospace", bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
