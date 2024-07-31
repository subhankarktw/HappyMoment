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
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  restAddedState,
  updateProduct,
} from "../../Redux/curdSlice";

export default function Editproduct() {
  const { id } = useParams();
  const {
    isUpdate,
    editProducts,
    loading,
    error: updateError,
  } = useSelector((state) => state.productauthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    dispatch(editProduct(id)); // Fetch product data when the component mounts
  }, [id, dispatch]);

  const validation = () => {
    let errors = {};
    if (!post.title) {
      errors.title = "Please enter Title";
    }
    if (!post.description) {
      errors.description = "Please enter description";
    }
    return errors;
  };

  const postuserdata = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({
      ...prev,
      [name]: value.length === 0 ? `Please enter ${name}` : "",
    }));
  };

  useEffect(() => {
    if (editProducts.data && editProducts.data.title && editProducts.data.description) {
      setPost({
        title: editProducts.data.title,
        description: editProducts.data.description,
      });
    } else {
      console.log(
        "Edit products data is not available or structured incorrectly:",
        editProducts
      );
    }
  }, [editProducts]);

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validation();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      const data = {
        title: post.title,
        description: post.description,
        id: id,
      };
      dispatch(updateProduct(data));
      setSuccessMessage("Product updated successfully!"); // Set success message
    }
  };

  useEffect(() => {
    if (isUpdate) {
      navigate("/showpost");
      dispatch(restAddedState());
    }
  }, [isUpdate, navigate, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "white", // Set background color to black
        color: "black", // Set text color to light green
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
        Edit Post
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          m: 2,
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.1)", // Set form background to a darker white
          boxShadow: 5,
          
          maxWidth: 400,
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={post.title} // Should reflect the current state
                onChange={postuserdata}
                error={!!error.title}
                helperText={error.title}
                InputLabelProps={{
                  sx: {
                    color: "black", // Set label color to light green
                    "&.Mui-focused": {
                      color: "black", // Set label color when focused to light green
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    color: "black", // Set input text color to light green
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color to light green
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color on hover to light green
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color when focused to light green
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
                name="description"
                value={post.description} // Should reflect the current state
                onChange={postuserdata}
                error={!!error.description}
                helperText={error.description}
                InputLabelProps={{
                  sx: {
                    color: "black", // Set label color to light green
                    "&.Mui-focused": {
                      color: "black", // Set label color when focused to light green
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    color: "black", // Set input text color to light green
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color to light green
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color on hover to light green
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // Set input border color when focused to light green
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
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
                  disabled={loading} // Disable button while loading
                >
                  Update Post
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
        {updateError && (
          <Typography variant="body2" sx={{ color: "red" }}>
            {updateError}
          </Typography>
        )}
        {successMessage && (
          <Typography variant="body2" sx={{ color: "green" }}>
            {successMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
