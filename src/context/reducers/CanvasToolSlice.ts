import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tool from '../../modules/drawModule/tools/Tool.ts';

type ToolProps = {
    tool: null | unknown | typeof Tool;
};

const initialUserState: ToolProps = {
    tool: null,
};

export const canvasToolSlice = createSlice({
    name: 'tool',
    initialState: initialUserState,
    reducers: {
        setTool<T extends Tool>(state: ToolProps, action: PayloadAction<T>): void {
            state.tool = action.payload;
        },
        setColorStroke(state: ToolProps, action: PayloadAction<string>): void {
            if (state.tool) {
                (state.tool as Tool).strokeStyle = action.payload;
            }
        },
        setFillColor(state: ToolProps, action: PayloadAction<string>): void {
            if (state.tool) {
                (state.tool as Tool).fillStyle = action.payload;
            }
        },
        setLineWidth(state: ToolProps, action: PayloadAction<string>): void {
            if (state.tool) {
                (state.tool as Tool).lineWidth = action.payload;
            }
        },
    },
});

export default canvasToolSlice.reducer;
