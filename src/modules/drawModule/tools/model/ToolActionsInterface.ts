export interface IToolActions {
    bindListeners: () => void;
    onMouseDownHandler: (e: MouseEvent) => void;
    onMouseUpHandler: () => void;
    onMouseMoveHandler: (e: MouseEvent) => void;
    draw: (x: number, y: number, w: number, h: number) => void;
}
