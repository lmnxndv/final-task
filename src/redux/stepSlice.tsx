import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    incrementStep: (state) => state + 1,
  },
});

export const {incrementStep} = stepSlice.actions
export default stepSlice.reducer