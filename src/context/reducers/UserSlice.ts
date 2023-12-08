import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/User.ts';

type UserState = {
    users: User[];
    isLoading: boolean;
    error: string;
};

const initialUserState: UserState | undefined = {
    users: [],
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<User[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        userFetchingFail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default userSlice.reducer;
