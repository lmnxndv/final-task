import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./stepSlice";
import mainInfoSlice from "./mainInfoSlice";
import taskCardSlice from "./taskCardSlice";

const store = configureStore({
  reducer: {
    step: stepSlice,
    main: mainInfoSlice,
    taskCard: taskCardSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
