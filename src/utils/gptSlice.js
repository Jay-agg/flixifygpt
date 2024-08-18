import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchList: null,
  },

  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    falseShowGptSearch: (state) => {
      state.showGptSearch = false;
    },
    addGptSearchList: (state, action) => {
      state.gptSearchList = action.payload;
    },
  },
});

export const { toggleShowGptSearch, addGptSearchList, falseShowGptSearch } =
  gptSlice.actions;

export default gptSlice.reducer;
