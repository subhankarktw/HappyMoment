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
  const { isAdded } = useSelector((state) => state.productauthentication);

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
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImgName(file.name);
    }
  };

  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", img);
    dispatch(addProduct(formdata));
    reset();
    setImg(null);
    setImgName("");
  };

  useEffect(() => {
    if (isAdded) {
      navigate("/showpost");
      dispatch(restAddedState());
    }
  }, [isAdded, navigate, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "black",
        backgroundImage: "url(images/pexels2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Typography 
        component="h1" 
        variant="h5" 
        sx={{ 
          mt: 4, 
          color: "white", 
          fontWeight: "800", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" // Added text shadow here
        }}
      >
        Add Post
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.7)",
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
                  color: "black",
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "black",
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
                  color: "black",
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "black",
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
                style={{ display: "none" }}
              />
              <label htmlFor="image">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
                  component="span"
                >
                  Upload Image
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
                sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
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
