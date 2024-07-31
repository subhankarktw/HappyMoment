import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  upload_status: "idle",
  products: [],
  editProducts: {},
  isAdded: false,
  isUpdate: false,
  redirectShowProduct: null,
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  let res = await axiosInstance.post("/api/product/list");
  return res.data;
});

export const addProduct = createAsyncThunk("addProduct", async (formdata) => {
  let res = await axiosInstance.post("/api/product/create", formdata);
  return res.data;
});
export const editProduct = createAsyncThunk("editProduct", async (id) => {
  const res = await axiosInstance.get(`/api/product/detail/${id}`);
  console.log("Fetched product data:", res.data); // Log fetched data
  return res.data;
});

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (formdata) => {
    const res = await axiosInstance.post("/api/product/update", formdata);
    return res?.data;
  }
);

export const removepost = createAsyncThunk("removepost", async (id) => {
  let res = await axiosInstance.post("/api/product/remove", {id});
  return res?.data;
});
const curdoperationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    restAddedState: (state) => {
      state.isAdded = false;
      // state.redirectProduct = null;
      state.isUpdate = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "Product added successfully";
        state.isAdded = true;
      })
      .addCase(addProduct.rejected, (state) => {
        state.upload_status = "failed";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "fetced successfully";
        state.products = payload.data;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.upload_status = "failed";
      })
      .addCase(editProduct.pending, (state) => {
        state.upload_status = "Loading...";
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "idle";
        state.editProducts = payload;
      })
      .addCase(editProduct.rejected, (state) => {
        state.upload_status = "Failed to send data...";
      })
      .addCase(updateProduct.pending, (state) => {
        state.upload_status = "Loading";
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "product updated successfully";
        state.isUpdate = true;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.upload_status = "Failed";
      })
      .addCase(removepost.pending, (state) => {
        state.upload_status = "Loading";
      })
      .addCase(removepost.fulfilled, (state) => {
        state.upload_status = "Deleted";
      })
      .addCase(removepost.rejected, (state) => {
        state.upload_status = "failed";
      });
  },
});

export const { restAddedState } = curdoperationSlice.actions;
export default curdoperationSlice.reducer;
