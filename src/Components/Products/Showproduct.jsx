import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  CircularProgress,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removepost } from "../../Redux/curdSlice";
import { Link } from "react-router-dom";
import "../Products/showproduct.css";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const { products, loading, error, totalPages, currentPage } = useSelector(
    (state) => state.productauthentication
  );
  const [deleteId, setDeleteId] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalRecords, setPage] = useState(currentPage || 1);

  useEffect(() => {
    dispatch(fetchProduct({ page: totalRecords, perPage: 10 }));
  }, [dispatch, totalRecords]);

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsDelete(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      dispatch(removepost(deleteId)).then(() => {
        dispatch(fetchProduct({ page: totalRecords, perPage: 10 }));
      });
    }
    setDeleteId(null);
    setIsDelete(false);
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setIsDelete(false);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const truncateDescription = (description) => {
    return description.length > 400
      ? description.slice(0, 400) + "..."
      : description;
  };

  const handelChange = (event, pageno) => {
    setPage(pageno);
    console.log("Page number clicked:", pageno); // Debugging line

    dispatch(
      fetchProduct({
        page: pageno,
        perPage: 10, // or any other value based on your requirement
      })
    );
  };

  return (
    <>
      <Box className="body">
        <Box className="image-container">
          <img src="images/posts.jpg" alt="home1" loading="lazy" />
        </Box>

        <Box className="search-container">
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
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
          <Grid container spacing={3} sx={{display:"flex", justifyContent:"center", alignItems:"center",}}>
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
                    <CardContent className="card-content">
                      <Typography variant="h5" component="div">
                        <strong>{product.title}</strong>
                      </Typography>
                      <Typography variant="body1" component="div">
                        {truncateDescription(product.description)}
                      </Typography>
                    </CardContent>
                    <Box className="card-buttons">
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
              <Typography variant="h6" textAlign="center">No products available</Typography>
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
      <Box className="pagination-container">
        <Pagination
          count={totalPages}
          page={totalRecords}
          onChange={handelChange}
        />
      </Box>
    </>
  );
}
