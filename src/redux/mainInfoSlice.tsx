
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainData } from "../types/type";

interface InitialState {
  items: MainData | null;
}

const initialState: InitialState = {
  items: null,
};

export const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {
    setMainData(state, action: PayloadAction<MainData>) {
      state.items = action.payload;
    },
  },
});

export const { setMainData } = mainInfoSlice.actions;
export default mainInfoSlice.reducer;
