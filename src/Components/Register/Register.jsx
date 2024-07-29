import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/authSlice";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

export default function Register() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImageName] = useState("");
  const dispatch = useDispatch();
  const { reDirectLogin } = useSelector((state) => state.authentication);
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

  // React Query mutation
  const mutation = useMutation({
    mutationFn: async (formdata) => {
      const resultAction = await dispatch(signup(formdata));
      return resultAction.payload; // Directly return the payload from the action
    },
    onSuccess: (data) => {
      if (data?.data?.email) {
        localStorage.setItem("email", data.data.email);
        navigate("/login");
      } else {
        console.error("Email not found in response", data);
      }
    },
    onError: (error) => {
      console.error("Signup failed", error);
    },
  });

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImg(file);
      setImageName(file.name);
    }
  };

  const onSubmit = (data) => {
    let formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("last_name", data.last_name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("profile_pic", img);
    mutation.mutate(formdata);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate("/login");
    }
  }, [mutation.isSuccess, navigate, reDirectLogin]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#8bc34a",
          mt: 4,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mt: 4, color: "#8bc34a" }}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 2,
            p: 4,
            borderRadius: 2,
            bgcolor: "black", // Set background color to black
            boxShadow: 3,
            ml: 3,
            mr: 3,
          }}
        >
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
                id="last_name"
                label="Last Name"
                {...register("last_name", {
                  required: "Please enter last name",
                })}
                error={Boolean(errors.last_name)}
                helperText={errors.last_name?.message}
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
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <input
                  accept="image/*"
                  type="file"
                  id="image"
                  name="img"
                  onChange={handleFileChange}
                  style={{
                    display: "none",
                  }}
                />
                <label htmlFor="image">
                  <Button variant="contained" sx={{ bgcolor: "#8bc34a", color: "black" }} component="span">
                    Upload Profile Picture
                  </Button>
                </label>
                {imgName && (
                  <Typography variant="body2" sx={{ ml: 2, color: "#8bc34a" }}>
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
                  sx={{ mt: 3, mb: 2, bgcolor: "#8bc34a", color: "black" }} // Button color and text color
                  disabled={isSubmitting}
                >
                  Register
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
            <Typography sx={{ mr: 1, color: "#8bc34a" }}>
              Already registered?
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ bgcolor: "#8bc34a", color: "black" }} // Button color and text color
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
