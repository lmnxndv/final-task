import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadFile } from "../types/type";

interface InitialState {
  file: UploadFile | null;
}

const initialState: InitialState = {
  file: null,
};

export const uploadFileSlice = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {
    setUploadFile(state, action: PayloadAction<UploadFile>) {
      state.file = action.payload;
    },
  },
});

export const { setUploadFile } = uploadFileSlice.actions;
export default uploadFileSlice.reducer;
