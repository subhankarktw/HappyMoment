import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authSlice";
import curdoperationReducer from "./curdSlice";
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    productauthentication: curdoperationReducer,
  },
});

export default store;
