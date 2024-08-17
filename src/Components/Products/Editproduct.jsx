import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editProduct, updateProduct } from "../../Redux/curdSlice";
import { useForm } from "react-hook-form";
import "./EditProduct.css"; 

export default function EditProduct() {
  const { id } = useParams();
  const {
    editProducts,
    loading: loadingFromStore,
    error: updateError,
  } = useSelector((state) => state.productauthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    dispatch(editProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (editProducts.data) {
      setValue("title", editProducts.data.title);
      setValue("description", editProducts.data.description);
      if (editProducts.data.image) {
        setSelectedImage(
          `https://wtsacademy.dedicateddevelopers.us/uploads/product/${editProducts.data.image}`
        );
      }
    }
  }, [editProducts, setValue]);

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setValue("image", file); // Register the file with useForm
    }
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    // Check if a new image was uploaded
    if (data.image && data.image instanceof File) {
      formData.append("image", data.image); // New image uploaded
    } else if (editProducts.data && editProducts.data.image) {
      formData.append("image", editProducts.data.image); // Use existing image
    } else {
      console.error("No image file selected");
    }

    formData.append("id", id);

    dispatch(updateProduct(formData))
      .then(() => {
        setSuccessMessage("Edit successful!");
        navigate("/showpost");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box
      className="edit-product-container"
      style={{ backgroundImage: `url(/images/background.jpg)` }}
    >
      <Typography component="h1" variant="h5" className="edit-product-title">
        Edit Post
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="edit-product-form"
      >
        {loadingFromStore || isSubmitting ? (
          <Box className="edit-product-loader">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                label="Title"
                {...register("title", { required: "Please enter Title" })}
                error={!!errors.title}
                helperText={errors.title?.message}
                InputLabelProps={{
                  shrink: true,
                  className: "input-label",
                }}
                InputProps={{
                  className: "input-field",
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
                  required: "Please enter a description",
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
                InputLabelProps={{
                  shrink: true,
                  className: "input-label",
                }}
                InputProps={{
                  className: "input-field",
                }}
              />
            </Grid>
            <Grid item xs={12} className="edit-product-image-container">
              {selectedImage && (
                <Box
                  component="img"
                  src={selectedImage}
                  alt="Selected Image"
                  className="selected-image"
                />
              )}
              <Button
                variant="contained"
                component="label"
                className="upload-button"
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  {...register("image")}
                  onChange={handleImageChange}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box className="edit-product-button-container">
                <Button
                  type="submit"
                  variant="contained"
                  className="update-button"
                  disabled={isSubmitting || loadingFromStore}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Update Post"
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
        {successMessage && (
          <Typography variant="body2" className="success-message">
            {successMessage}
          </Typography>
        )}
        {updateError && (
          <Typography variant="body2" className="error-message">
            {updateError}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
