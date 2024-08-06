import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removepost } from "../../Redux/curdSlice";
import { Link } from "react-router-dom";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productauthentication);
  const [delete_id, setDelete_id] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    setDelete_id(id);
    setIsDelete(true);
  };

  const confirmDelete = () => {
    if (delete_id) {
      dispatch(removepost(delete_id)).then(() => {
        dispatch(fetchProduct());
      });
    }
    setDelete_id(null);
    setIsDelete(false);
  };

  const cancelDelete = () => {
    setDelete_id(null);
    setIsDelete(false);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        bgcolor: "white",
        color: "black",
        mt: 5,
        p: 2, // Add padding for better spacing on smaller screens
      }}
    >
      <Typography component="h1" variant="h4" sx={{ mb: 2, mt: 6 }}>
        Posts
      </Typography>

      {/* Container for Search Box and Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on smaller screens
          justifyContent: "space-between",
          width: "100%",
          mb: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flexGrow: 1,
            m: 1,
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
            "&.Mui-focused": {
              color: "black",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "green",
            color: "white",
            flexGrow: 0.1,
            m: 1,
            width: { xs: "auto", sm: "auto" }, // Full width on small screens
          }}
          component={Link}
          to="/addpost"
        >
          Add Post
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ m: 0 }}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card
                sx={{
                  bgcolor: "white",
                  color: "black",
                  boxShadow: 3,
                  margin: "16px", 
                  
                }}
              >
                <img
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product?.image}`}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div">
                    <strong>Title: </strong> {product.title}
                  </Typography>
                  <Typography variant="body1" component="div">
                    <strong>Description: </strong> {product.description}
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "white", color: "black" }}
                    component={Link}
                    to={`/detail/${product._id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#f44336", color: "white" }}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No products available</Typography>
        )}
      </Grid>

      {/* Confirmation Dialog */}
      {isDelete && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            color: "black",
            p: 4,
            boxShadow: 3,
            zIndex: 999,
            width: { xs: "80%", sm: "400px" }, // Responsive width
          }}
        >
          <Typography variant="h6">
            Are you sure you want to delete this product?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              onClick={confirmDelete}
              sx={{
                bgcolor: "white",
                color: "black",
                "&:hover": { bgcolor: "black", color: "white" },
              }}
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={cancelDelete}>
              No
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
