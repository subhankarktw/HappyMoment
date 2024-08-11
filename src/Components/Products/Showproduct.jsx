import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removepost } from "../../Redux/curdSlice";
import { Link } from "react-router-dom";
import "../Products/showproduct.css";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productauthentication
  );
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

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const truncateDescription = (description) => {
    if (description.length > 400) {
      return description.slice(0, 400) + "...";
    }
    return description;
  };

  return (
    <Box className="body">
      <Typography component="h1" variant="h4" className="title">
        Posts
      </Typography>

      <Box className="search-container">
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
          sx={{
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
          className="add-post-button"
          component={Link}
          to="/addpost"
        >
          Add Post
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" p={2}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error">
          {error.message}
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ m: 0 }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={product._id}
                className="cards"
              >
                <Card className="card">
                  <img
                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product?.image}`}
                    alt={product.title}
                    className="card-image"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <strong>{product.title}</strong>
                    </Typography>
                    <Typography variant="body1" component="div">
                      <strong>{truncateDescription(product.description)}</strong>
                    </Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="space-between" p={2}>
                    <Button
                      variant="contained"
                      className="edit-button"
                      component={Link}
                      to={`/detail/${product._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      className="delete-button"
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
      )}

      {isDelete && (
        <Box className="confirmation-dialog">
          <Typography variant="h6">
            Are you sure you want to delete this product?
          </Typography>
          <Box className="dialog-buttons">
            <Button
              variant="contained"
              className="confirm-button"
              onClick={confirmDelete}
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
