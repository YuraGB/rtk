import { ITool } from './ToolInterface.ts';
import { IToolActions } from './ToolActionsInterface.ts';

export interface IRect extends ITool, IToolActions {
    mousedown: boolean | undefined;
    startX: number | undefined;
    startY: number | undefined;
    previousRect: [x: number, y: number, w: number, h: number] | undefined | [];
}
