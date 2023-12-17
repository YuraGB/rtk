import Tool from './Tool.ts';
import { IPencil } from './model/PencilInterface.ts';

export default class PencilTool extends Tool implements IPencil {
    mousedown: boolean | undefined;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        this.bindListeners();
    }

    bindListeners() {
        this.canvas.onmousedown = this.onMouseDownHandler.bind(this);
        this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
        this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
    }

    onMouseDownHandler(e: MouseEvent) {
        this.mousedown = true;
        const target = e.target as HTMLCanvasElement;
        this.ctx?.beginPath();
        this.ctx?.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    }

    onMouseUpHandler() {
        this.mousedown = false;
    }
    onMouseMoveHandler(e: MouseEvent) {
        if (this.mousedown && e?.target) {
            const target = e.target as HTMLCanvasElement;
            this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
        }
    }

    draw(x: number, y: number) {
        this.ctx?.lineTo(x, y);
        this.ctx?.stroke();
    }
}
