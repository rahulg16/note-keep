import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slices/userAuthSlice.js";

const store = configureStore({
  reducer: {
    auth: userAuthSlice,
  },
});

export default store;
