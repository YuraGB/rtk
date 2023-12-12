import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tool from '../../modules/drawModule/tools/Tool.ts';

interface ToolProps<T extends Tool> {
    tool: T | null;
}

const initialUserState = {
    tool: null,
};

export const canvasToolSlice = createSlice({
    name: 'tool',
    initialState: initialUserState,
    reducers: {
        setTool<T extends Tool>(state: ToolProps<T>, action: PayloadAction<T>): void {
            if (state?.tool !== null) {
                state.tool = action.payload;
            }
        },
        setColorStroke<T extends Tool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            if (state.tool !== null) {
                state.tool.strokeStyle = action.payload;
            }
        },
        setFillColor<T extends Tool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            if (state.tool !== null) {
                state.tool.fillStyle = action.payload;
            }
        },
        setLineWidth<T extends Tool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            if (state.tool !== null) {
                state.tool.lineWidth = action.payload;
            }
        },
    },
});

export default canvasToolSlice.reducer;
