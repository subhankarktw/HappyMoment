import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Redux/authSlice";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
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
    },
    onError: (error) => {
      console.error("login failed", error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isLogin = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      isLogin && navigate("/");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [reDirectHome, navigate, mutation.onSuccess]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "72vh",
          mt: 5,
          backgroundColor: "#8bc34a",
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
            bgcolor: "black", // Set background color to black
            boxShadow: 3,
            maxWidth: 400, // Optional: Restrict the maximum width of the form
          }}
        >
          <Grid container spacing={2}>
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
                InputLabelProps={{ style: { color: "#8bc34a" } }} // Label color
                InputProps={{
                  style: { color: "#8bc34a" }, // Input text color
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color on focus
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
                type="password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                InputLabelProps={{ style: { color: "#8bc34a" } }} // Label color
                InputProps={{
                  style: { color: "#8bc34a" }, // Input text color
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8bc34a", // Outline color on focus
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
                  sx={{ mt: 2, mb: 2, bgcolor: "#8bc34a", color: "black" }} // Button color and text color
                  disabled={isSubmitting}
                >
                  Login
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
            <Typography sx={{ mr: 1, color: "#8bc34a" }}>Not registered? Please </Typography>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{ bgcolor: "#8bc34a", color: "black" }} // Button color and text color
            >
              Register
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
