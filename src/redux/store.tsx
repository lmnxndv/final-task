import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import stepSlice from "./stepSlice";
import distributionSlice from "./distributionSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
    step: stepSlice,
    distribution: distributionSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
