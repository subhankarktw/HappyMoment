import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, restAddedState } from "../../Redux/curdSlice";

export default function Addproduct() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState("");
  const dispatch = useDispatch();
  const { isAdded, redirectProduct } = useSelector(
    (state) => state.productauthentication
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImg(file);
      setImgName(file.name);
    }
  };

  const onSubmit = (data) => {
    let formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", img);
    dispatch(addProduct(formdata));
    reset();
    setImg(null);
    setImgName("");
  };

  useEffect(() => {
    if (isAdded && redirectProduct) {
      navigate(redirectProduct);
      dispatch(restAddedState());
    }
  }, [isAdded, redirectProduct, navigate, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "black", // Set background color to black
        color: "#8bc34a", // Set text color to #8bc34a
        // Set a consistent margin
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
        Add Post
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.1)", // Set form background to a darker white
          boxShadow: 3,
          maxWidth: 400,
          m: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              {...register("title", {
                required: "Please enter Title",
              })}
              error={Boolean(errors.title)}
              helperText={errors.title?.message}
              InputLabelProps={{
                sx: {
                  color: "#8bc34a", // Set label color to light green
                  "&.Mui-focused": {
                    color: "#8bc34a", // Set label color when focused to light green
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#8bc34a", // Set input text color to light green
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color to light green
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color on hover to light green
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color when focused to light green
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              label="Description"
              {...register("description", {
                required: "Please enter Description",
              })}
              error={Boolean(errors.description)}
              helperText={errors.description?.message}
              InputLabelProps={{
                sx: {
                  color: "#8bc34a", // Set label color to light green
                  "&.Mui-focused": {
                    color: "#8bc34a", // Set label color when focused to light green
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#8bc34a", // Set input text color to light green
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color to light green
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color on hover to light green
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#8bc34a", // Set input border color when focused to light green
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
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#8bc34a", color: "black" }}
                  component="span"
                >
                  Upload Image
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
                sx={{ mt: 3, mb: 2, bgcolor: "#8bc34a", color: "black" }} // Set button color
                disabled={isSubmitting}
              >
                Upload Post
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
