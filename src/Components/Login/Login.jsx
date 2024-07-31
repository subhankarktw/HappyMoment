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
  }, [reDirectHome, navigate]);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "center",
        backgroundImage: "url(images/pexel.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image Container for Large Screens */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img
            src="images/3d.png"
            alt="Happy Moments"
            style={{ width: "400px", height: "400px" }}
          />
        </Box>
      </Grid>

      {/* Login Form Container */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          padding: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mt: 6,
            fontFamily: "monospace",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 2,
            p: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: 3,
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
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  sx: {
                    fontFamily: "monospace",
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
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{
                  sx: {
                    fontFamily: "monospace",
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
                  sx={{
                    fontFamily: "monospace",
                    mt: 2,
                    mb: 2,
                    bgcolor: "black",
                    color: "white",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                  }}
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
            <Typography sx={{ fontFamily: "monospace", mr: 1, color: "black" }}>
              Not registered? Please{" "}
            </Typography>
            <Button
              component={Link}
              to="/register"
              variant="outlined"
              sx={{
                fontFamily: "monospace",
                borderColor: "black",
                color: "black",
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "black",
                  color: "white",
                },
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
