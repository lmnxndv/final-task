import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./stepSlice";
import mainInfoSlice from "./mainInfoSlice";
import taskCardSlice from "./taskCardSlice";
import uploadFileSlice from "./uploadFileSlice";

const store = configureStore({
  reducer: {
    step: stepSlice,
    main: mainInfoSlice,
    taskCard: taskCardSlice,
    uploadFile: uploadFileSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
