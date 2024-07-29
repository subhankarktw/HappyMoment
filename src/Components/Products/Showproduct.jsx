import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material"; // Ensure necessary imports are included
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/curdSlice";
import { Link } from "react-router-dom"; // Import Link if you use it

export default function Showproduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productauthentication);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "black", 
        color: "#8bc34a", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography component="h1" variant="h4" sx={{ mb: 2, mt:8}}>
        Posts
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1, px: 2, mb: 4 }}>
        {products && products.length > 0
          ? products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <Card sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", color: "#8bc34a", boxShadow: 3 }}>
                  <CardContent>
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
                      sx={{ bgcolor: "#8bc34a", color: "black" }}
                      component={Link}
                      to={`/detail/${product._id}`} 
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#f44336", color: "white" }} // Red color for delete button
                     // onClick={() => {
                     //   setDelete_id(product?._id); // Use product._id
                     //   setIsDelete(true);
                     // }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))
          : (
            <Typography variant="h6">
              No posts available
            </Typography>
          )}
      </Grid>
    </Box>
  );
}
