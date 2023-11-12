import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import stepSlice from "./stepSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
    step: stepSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
