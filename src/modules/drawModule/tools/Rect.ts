import Tool from './Tool.ts';
import { IRect } from './model/RectInterface.ts';

export default class RectTool extends Tool implements IRect {
    mousedown: boolean | undefined;
    startX: number | undefined;
    startY: number | undefined;
    previousRect: [x: number, y: number, w: number, h: number] | undefined | [];

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
        this.startX = e.pageX - target.offsetLeft;
        this.startY = e.pageY - target.offsetTop;
    }

    onMouseUpHandler() {
        this.mousedown = false;
        if (this.previousRect && this.previousRect.length) {
            this.previousRect = [];
        }
    }
    onMouseMoveHandler(e: MouseEvent) {
        if (this.mousedown && e?.target) {
            const target = e.target as HTMLCanvasElement;
            const currentX = e.pageX - target.offsetLeft;
            const currentY = e.pageY - target.offsetTop;
            if (this.startX && this.startY) {
                const width = currentX - this.startX;
                const height = currentY - this.startY;

                if (this.previousRect?.length) {
                    this.ctx?.clearRect(...this.previousRect);
                }
                this.draw(this.startX, this.startY, width, height);
            }
        }
    }

    draw(x: number, y: number, w: number, h: number) {
        if (this.ctx) {
            this.ctx.strokeRect(x, y, w, h);
            const lineWidth = this.ctx.lineWidth;
            this.previousRect = [
                w > 0 ? x - 1 - lineWidth : x + 1 + lineWidth,
                h > 0 ? y - 1 - lineWidth : y + 1 + lineWidth,
                w > 0 ? w + 5 + lineWidth : w - 5 - lineWidth,
                h > 0 ? h + 5 + lineWidth : h - 5 - lineWidth,
            ];
        }
    }
}
