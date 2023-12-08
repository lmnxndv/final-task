import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskCard } from "../types/type";

interface InitialState {
  data: TaskCard | null;
}

const initialState: InitialState = {
  data: null,
};

export const taskCardSlice = createSlice({
  name: "taskcard",
  initialState,
  reducers: {
    setTaskCard: (state, action: PayloadAction<TaskCard>) => {
      state.data = action.payload;
    },
  },
});

export const { setTaskCard } = taskCardSlice.actions;
export default taskCardSlice.reducer;
