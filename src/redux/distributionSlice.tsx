import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DistributionItem {
  id: number;
  name: string;
  position: string;
}
interface DistributionState {
  distributionItemsForVisa: DistributionItem[];
  distributionItemsForSign: DistributionItem | null;
  distributionItemsForOtherOrgUnits: DistributionItem[];
}

const initialState: DistributionState = {
  distributionItemsForVisa: [],
  distributionItemsForSign: null,
  distributionItemsForOtherOrgUnits: [],
};

export const DistributionSlice = createSlice({
  name: "distribution",
  initialState,
  reducers: {
    addToListSign: (state, action: PayloadAction<DistributionItem>) => {
      state.distributionItemsForSign = action.payload;
    },
    addToListVisa: (state, action: PayloadAction<DistributionItem>) => {
      state.distributionItemsForVisa.push(action.payload);
    },
    addToListOtherOrgUnits: (
      state,
      action: PayloadAction<DistributionItem>
    ) => {
      state.distributionItemsForOtherOrgUnits.push(action.payload);
    },
    removeFromListSign: (state) => {
      state.distributionItemsForSign = null;
    },
    removeFromListVisa: (state, action: PayloadAction<number>) => {
      state.distributionItemsForVisa = state.distributionItemsForVisa.filter(
        (item) => item.id !== action.payload
      );
    },
    removeFromListOrgUnits: (state, action: PayloadAction<number>) => {
      state.distributionItemsForOtherOrgUnits =
        state.distributionItemsForOtherOrgUnits.filter(
          (item) => item.id !== action.payload
        );
    },
  },
});

export const {
  addToListSign,
  addToListVisa,
  addToListOtherOrgUnits,
  removeFromListSign,
  removeFromListVisa,
  removeFromListOrgUnits,
} = DistributionSlice.actions;
export default DistributionSlice.reducer;
