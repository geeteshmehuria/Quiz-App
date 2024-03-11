import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", category: "", difficulty: "", questionNum: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      // console.log(state.name);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      // console.log(state.category);
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      // console.log(state.difficulty);
    },
    setQuestionNum: (state, action) => {
      state.questionNum = action.payload;
      // console.log(state.questionNum);
    },
  },
});

export const { setName, setCategory, setDifficulty, setQuestionNum } =
  userSlice.actions;
export default userSlice.reducer;
