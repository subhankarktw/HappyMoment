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
    <Grid container sx={{ height: "100vh", justifyContent: "center", backgroundImage: "url(images/pexels2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Image Container for Large Screens */}
      <Grid item xs={false} sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <img src="images/children.png" alt="Happy Moments" style={{ width: "300px", height: "300px" }} />
          <Typography variant="h4" sx={{ color: "black", mt: 1 }}>Happy Moments</Typography>
        </Box>
      </Grid>

      {/* Registration Form Container */}
      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", padding: 4 }}>
        <Typography component="h1" variant="h5" sx={{ mt: 6, color: "black", fontWeight: "800" }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, p: 4, borderRadius: 2, backgroundColor: "white", boxShadow: 3, opacity: 0.8 }}>
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
                  <Button variant="contained" sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }} component="span">
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
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1, color: "black" }}>
              Already registered?
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
