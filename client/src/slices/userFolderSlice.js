import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folder: [],
};

const userFolderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolder: (state, action) => {
      state.folder = action.payload;
    },

    clearFolderName: (state, action) => {
      state.folder = state.folder.filter((f) => f !== action.payload);
    },

    addFolderName: (state, action) => {
      state.folder = [...state.folder, action.payload];
    },
  },
});

export const { setFolder, clearFolderName, addFolderName } =
  userFolderSlice.actions;

export default userFolderSlice.reducer;
