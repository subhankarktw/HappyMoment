import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Redux/authSlice";
import { Box, Button, Grid, TextField, Typography, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

const LIGHT_GREEN = "#8bc34a";

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
    mutationFn: async (formdata) => {
      const resultAction = await dispatch(signin(formdata));
      return resultAction.payload;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/"); // Redirect after successful login
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    const RedirectUser = () => {
      let token = localStorage.getItem("token");
      let isLogin = window.location.pathname.toLowerCase() === "/login";
  
      if (token) {
        isLogin && navigate("/");
      }
    };
  
    RedirectUser();
  }, [reDirectHome, navigate, mutation.onSuccess]); // Removed RedirectUser from here
  
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: LIGHT_GREEN,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: "black" }}>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 3,
            ml: 4,
            mr: 4,
            p: 4,
            borderRadius: 2,
            bgcolor: "black",
            boxShadow: 3,
            maxWidth: 400,
          }}
        >
          <Grid container spacing={2}>
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
                InputLabelProps={{ style: { color: LIGHT_GREEN } }} // Label color
                InputProps={{
                  style: { color: LIGHT_GREEN }, // Input text color
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color on focus
                    },
                  },
                }}
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
                InputLabelProps={{ style: { color: LIGHT_GREEN } }} // Label color
                InputProps={{
                  style: { color: LIGHT_GREEN }, // Input text color
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: LIGHT_GREEN, // Outline color on focus
                    },
                  },
                }}
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
                  sx={{ mt: 2, mb: 2, bgcolor: LIGHT_GREEN, color: "black" }} // Button color and text color
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Login"}
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
            <Typography sx={{ mr: 1, color: LIGHT_GREEN }}>Not registered? Please </Typography>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{ bgcolor: LIGHT_GREEN, color: "black" }} // Button color and text color
            >
              Register
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
