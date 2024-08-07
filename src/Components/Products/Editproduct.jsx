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
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    dispatch(editProduct(id)); 
  }, [id, dispatch]);

  useEffect(() => {
    if (editProducts.data && editProducts.data.title && editProducts.data.description) {
      setValue("title", editProducts.data.title);
      setValue("description", editProducts.data.description);
    } else {
      console.log(
        "Edit products data is not available or structured incorrectly:",
        editProducts
      );
    }
  }, [editProducts, setValue]);

  const onSubmit = (data) => {
    const updatedData = {
      ...data,
      id: id,
    };
    dispatch(updateProduct(updatedData));
    setSuccessMessage("Product updated successfully!"); 
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
        bgcolor: "white", 
        color: "black", 
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
        Edit Post
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)} 
        sx={{
          m: 2,
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.1)", 
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
                {...register("title", { required: "Please enter Title" })}
                error={!!errors.title}
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
                {...register("description", { required: "Please enter description" })}
                error={!!errors.description}
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
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "black", color: "white" } }}
                  disabled={loading} 
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
