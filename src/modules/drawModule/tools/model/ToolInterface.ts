export interface ITool {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    strokeStyle: string;
    fillStyle: string;
    lineWidth: string;

    destroyListeners: () => void;
}
