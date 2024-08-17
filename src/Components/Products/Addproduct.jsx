import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography, CircularProgress } from "@mui/material";
import { addProduct, restAddedState } from "../../Redux/curdSlice";
import "./AddProduct.css"; // Import the CSS file

export default function AddProduct() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState("");
  const dispatch = useDispatch();
  const { isAdded } = useSelector((state) => state.productauthentication);
  const [loading, setLoading] = useState(false); 

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

  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", img);

    setLoading(true); 
    await dispatch(addProduct(formdata));
    reset();
    setImg(null);
    setImgName("");
    setLoading(false); 
  };

  useEffect(() => {
    if (isAdded) {
      navigate("/showpost");
      dispatch(restAddedState());
    }
  }, [isAdded, navigate, dispatch]);

  return (
    <Box className="add-product-container" style={{ backgroundImage: `url(/images/pexels2.jpg)` }}>
      <Typography 
        component="h1" 
        variant="h5" 
        className="add-product-title"
      >
        Add Post
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="add-product-form"
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
              className="add-product-textfield"
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
              className="add-product-textfield"
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
                  className="upload-image-button"
                  component="span"
                >
                  Upload Image
                </Button>
              </label>
              {imgName && (
                <Typography variant="body2" className="uploaded-file-name">
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
                className="upload-post-button"
                disabled={isSubmitting || loading} 
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Upload Post"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
