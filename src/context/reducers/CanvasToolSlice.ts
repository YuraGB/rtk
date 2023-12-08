import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserState = {
    tool: {},
};

export const canvasToolSlice = createSlice({
    name: 'tool',
    initialState: initialUserState,
    reducers: {
        setTool<T>(state: { tool: T }, action: PayloadAction<T>) {
            state.tool = action.payload;
        },
    },
});

export default canvasToolSlice.reducer;
