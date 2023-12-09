export default class Tool {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.destroyListeners();
    }

    destroyListeners() {
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
        this.canvas.onmousemove = null;
    }

    set strokeStyle(color: string) {
        if (this.ctx) {
            this.ctx.strokeStyle = color;
        }
    }

    set fillStyle(color: string) {
        if (this.ctx) {
            this.ctx.fillStyle = color;
        }
    }

    set lineWidth(width: string) {
        if (this.ctx) {
            this.ctx.lineWidth = +width;
        }
    }
}
