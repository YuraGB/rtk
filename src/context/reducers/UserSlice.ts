import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type UserState = {
  users: User[];
  isLoading: boolean;
  error: string;
};

const initialUserState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {},
});

export default userSlice.reducer;
