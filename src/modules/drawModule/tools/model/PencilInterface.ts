import { ITool } from './ToolInterface.ts';
import { IToolActions } from './ToolActionsInterface.ts';

export interface IPencil extends ITool, IToolActions {
    mousedown: boolean | undefined;
}
