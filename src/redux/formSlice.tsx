import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirstStepIds } from "../data/data";

interface FirstPageState {
  selectedValues: Record<FirstStepIds, string | null>;
}

const initialState: FirstPageState = {
  selectedValues: {
    [FirstStepIds.APPOINTMENT]: null,
    [FirstStepIds.CLASSIFICATION]: null,
    [FirstStepIds.NOMENCLATURE]: null,
    [FirstStepIds.CONTENT]: null,
  },
};

const firstPageSlice = createSlice({
  name: "firstPage",
  initialState,
  reducers: {
    SelectedValue(
      state,
      action: PayloadAction<{ id: FirstStepIds; value: string }>
    ) {
      state.selectedValues[action.payload.id] = action.payload.value;
    },
    resetSelectedValues(state) {
      state.selectedValues = {
        [FirstStepIds.APPOINTMENT]: null,
        [FirstStepIds.CLASSIFICATION]: null,
        [FirstStepIds.NOMENCLATURE]: null,
        [FirstStepIds.CONTENT]: null,
      };
    },
  },
});

export const { SelectedValue, resetSelectedValues } = firstPageSlice.actions;
export default firstPageSlice.reducer;
