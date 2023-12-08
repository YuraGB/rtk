import { AppDispatch } from "../index.ts";
import { userSlice } from "./UserSlice.ts";

//Todo DB fetch data
export const fetchUsers = () => (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
  } catch (e: unknown) {
    dispatch(userSlice.actions.userFetchingFail((e as Error).message));
  }
};
