import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialCanvasState = {
    canvas: {},
};

export const canvasContextSlice = createSlice({
    name: 'canvas',
    initialState: initialCanvasState,
    reducers: {
        setCanvas(state, action: PayloadAction<HTMLCanvasElement>) {
            state.canvas = action.payload;
        },
    },
});

export default canvasContextSlice.reducer;
