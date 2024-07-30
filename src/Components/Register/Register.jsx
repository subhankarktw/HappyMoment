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
      return resultAction.payload;
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
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "flex-end", // Align items to the right
        backgroundImage: "url(images/pexels2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Registration Form Container */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          padding: 4,
          backdropFilter: "blur(8px)", // Modern touch with a blur effect
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mt: 6, color: "black", fontWeight: "bold" }}>
          Create an Account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 2,
            p: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            boxShadow: 3,
          }}
        >
          <Grid container spacing={2}>
            {["first_name", "last_name", "email", "password"].map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  id={field}
                  label={field.replace("_", " ").replace(/\b\w/g, char => char.toUpperCase())} // Capitalize labels
                  type={field === "password" ? "password" : "text"}
                  {...register(field, { required: `Please enter your ${field.replace("_", " ")}` })}
                  error={Boolean(errors[field])}
                  helperText={errors[field]?.message}
                  InputLabelProps={{ style: { color: "black" } }}
                  InputProps={{
                    sx: {
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
            ))}
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
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="image">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      "&:hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                    }}
                    component="span"
                  >
                    Upload Profile Picture
                  </Button>
                </label>
                {imgName && (
                  <Typography variant="body2" sx={{ ml: 2, color: "black" }}>
                    {imgName}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
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
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1, color: "black" }}>
              Already have an account?
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                borderColor: "black",
                color: "black",
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
