import { AppDispatch, RootState } from "./../redux/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
