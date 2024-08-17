import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/authSlice";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { unwrapResult } from "@reduxjs/toolkit";
import "./Register.css"; // Import the CSS file

export default function Register() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImageName] = useState("");
  const dispatch = useDispatch();
  const { reDirectLogin } = useSelector((state) => state.authentication);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      const resultAction = await dispatch(signup(formdata));
      const result = unwrapResult(resultAction);
      localStorage.setItem("email", result.data.email);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
      setErrorMessage("Signup failed. Please check your input and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reDirectLogin) {
      navigate("/login");
    }
  }, [reDirectLogin, navigate]);

  return (
    <Grid container className="register-container" style={{ backgroundImage: `url(/images/home01.jpg)` }}>
      <Grid item xs={false} sm={6} className="register-sidebar">
        
      </Grid>

      <Grid item xs={12} sm={6} className="register-form-container">
        <Typography component="h1" variant="h5" className="register-title">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="register-form"
        >
          {errorMessage && (
            <Typography variant="body2" className="error-message">
              {errorMessage}
            </Typography>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="first_name"
                label="First Name"
                {...register("first_name", {
                  required: "Please enter first name",
                })}
                error={Boolean(errors.first_name)}
                helperText={errors.first_name?.message}
                className="register-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="last_name"
                label="Last Name"
                {...register("last_name", {
                  required: "Please enter last name",
                })}
                error={Boolean(errors.last_name)}
                helperText={errors.last_name?.message}
                className="register-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                {...register("email", {
                  required: "Please enter email address",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                className="register-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                className="register-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <Box className="file-input-container">
                <input
                  accept="image/*"
                  type="file"
                  id="image"
                  name="img"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="image">
                  <Button
                    variant="contained"
                    className="file-upload-button"
                    component="span"
                  >
                    Upload Profile Picture
                  </Button>
                </label>
                {imgName && (
                  <Typography
                    variant="body2"
                    className="uploaded-file-name"
                  >
                    {imgName}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  className="register-submit-button"
                  disabled={isSubmitting || loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Register"
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            className="login-redirect"
          >
            <Grid item>
              <Typography variant="body2" className="login-text">
                Already have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
                className="login-button"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
