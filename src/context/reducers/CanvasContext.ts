import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserState = {
    canvas: {},
};

export const canvasContextSlice = createSlice({
    name: 'canvas',
    initialState: initialUserState,
    reducers: {
        setCanvas(state, action: PayloadAction<HTMLCanvasElement>) {
            state.canvas = action.payload;
        },
    },
});

export default canvasContextSlice.reducer;
