import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Redux/authSlice";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reDirectHome } = useSelector((state) => state.authentication);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const resultAction = await dispatch(signin(formData));
      return resultAction.payload;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    const redirectUser = () => {
      const token = localStorage.getItem("token");
      const isLoginPage = window.location.pathname.toLowerCase() === "/login";

      if (token && isLoginPage) {
        navigate("/");
      }
    };

    redirectUser();
  }, [reDirectHome, navigate]);

  return (
    <Grid
      container
      className="login-container"
      style={{ backgroundImage: `url(/images/home03.jpg)` }}
    >
      <Grid item xs={false} sm={6} className="login-image">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/3d.png"
            alt="Happy Moments"
            className="login-image-img"
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} className="login-form-container">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
        >
          <Typography component="h1" variant="h4" className="login-title">
            Login
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Please enter email address",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                className="login-form-text-field"
                InputLabelProps={{ style: { color: "black" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                className="login-form-text-field"
                InputLabelProps={{ style: { color: "black" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  className="login-form-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography className="login-register-link">
              Not registered? Please  
            </Typography>
            <Button
              component={Link}
              to="/register"
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
                ml: 1,
              }}
            >
              Register
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
