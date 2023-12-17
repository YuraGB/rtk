import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITool } from '../../modules/drawModule/tools/model/ToolInterface.ts';

interface ToolProps<T extends ITool> {
    tool: T | null;
}

const initialUserState = {
    tool: null,
};

export const canvasToolSlice = createSlice({
    name: 'tool',
    initialState: initialUserState,
    reducers: {
        setTool<T extends ITool>(state: ToolProps<T>, action: PayloadAction<T>): void {
            state.tool = action.payload;
        },
        setColorStroke<T extends ITool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            console.log('set', state.tool);
            if (state.tool !== null) {
                state.tool.strokeStyle = action.payload;
            }
        },
        setFillColor<T extends ITool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            if (state.tool !== null) {
                state.tool.fillStyle = action.payload;
            }
        },
        setLineWidth<T extends ITool>(state: ToolProps<T>, action: PayloadAction<string>): void {
            if (state.tool !== null) {
                state.tool.lineWidth = action.payload;
            }
        },
    },
});

export default canvasToolSlice.reducer;
