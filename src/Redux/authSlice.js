import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  isRegistered: false,
  isLogin: false,
  reDirectLogin: null,
  reDirectHome: null,
  upload_status: "idle",
  user: null,
  //profilePic: null,
};

export const signup = createAsyncThunk("user/signup", async (formdata) => {
  const response = await axiosInstance.post("/api/user/signup", formdata);
  return response.data;
});

export const signin = createAsyncThunk("user/signin", async (formdata) => {
  const res = await axiosInstance.post("/api/user/signin", formdata);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Login failed");
  }
});

export const profile = createAsyncThunk("user/profile-details", async () => {
  const res = await axiosInstance.get("/api/user/profile-details");
  return res.data; 
});



const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("email")
    },
    check_token: (state) => {
      const token = localStorage.getItem("token");
      state.isLogin = token !== null && token !== undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.upload_status = "Registration successful";
        localStorage.setItem("email", payload.data.email);
        state.isRegistered = true;
        state.reDirectLogin = "/login";
      })
      .addCase(signup.rejected, (state, action) => {
        state.upload_status = `failed: ${action.payload}`;
      })
      .addCase(signin.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.upload_status = "Login successful";
        state.isLogin = true;
        state.reDirectHome = "/";
        localStorage.setItem("token", payload.token);
        localStorage.setItem("first_name", payload.data.first_name);
      })
      .addCase(signin.rejected, (state, action) => {
        state.upload_status = `failed: ${action.payload}`;
      })
      .addCase(profile.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(profile.fulfilled, (state, { payload }) => {
        state.upload_status = "Profile view";
        state.user = payload.data; 
      })
      .addCase(profile.rejected, (state, action) => {
        state.upload_status = `failed: ${action.error.message}`;
      })
      
  },
});

export const { logout, check_token } = authenticationSlice.actions;
export default authenticationSlice.reducer;
