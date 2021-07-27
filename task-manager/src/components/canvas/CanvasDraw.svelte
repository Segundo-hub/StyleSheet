
<script>
    import { onMount } from "svelte";
    
    let Canvas, ctx , CanvasView, canvas_width = 1000, canvas_height = 800;

    const changeHeightAndWidth = () => {
        /* canvas_width = window.innerWidth * 2 ;
        canvas_height = window.innerHeight * 2;
        style = {
            width: canvas_width / 2 + "px",
            height: canvas_height / 2 + "px"
        } */
    }

    onMount( () => {
        Canvas.width = canvas_width;
        Canvas.height = canvas_height;
        ctx = Canvas.getContext('2d');
        init()
        drawRect()
	}); 

    const init = () => {
		ctx.beginPath();
        ctx.strokeStyle = "teal"
        ctx.setLineDash([6, 6]);
        ctx.moveTo(0, 50);
        ctx.lineTo(300, 50);
        ctx.lineWidth = 1
        ctx.stroke();
    }
    const drawRect = () => {
        const proto = CanvasRenderingContext2D.prototype;
        const gradient = ctx.createLinearGradient(0, 0, 300, 300);

        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'blue');

        let radiusRatio = 0.025; // 0.0 - 1.0

        proto.roundedRect = function(x, y, w, h, r) {
            const x2 = x + w;
            const y2 = y + h;

            ctx.moveTo(x + r, y);
            ctx.lineTo(x2 - r, y);
            ctx.quadraticCurveTo(x2, y, x2, y + r);
            ctx.lineTo(x2, y2 - r);
            ctx.quadraticCurveTo(x2, y2, x2 - r, y2);
            ctx.lineTo(x + r, y2);
            ctx.quadraticCurveTo(x, y2, x, y2 - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
        };

        function draw() {
            ctx.clearRect(0, 0, 1000, 800);
            ctx.fillStyle = 'transparent';
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.roundedRect(50, 50, 300, 300, 150 * radiusRatio);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        draw()
    }



</script>

<svelte:window on:resize="{ changeHeightAndWidth }"/>

<div class="canvas-view" bind:this="{ CanvasView }">
    <canvas class="canvas-scene" style="width: {canvas_width}px; height:{canvas_height}px"
        bind:this="{ Canvas }"
    />
</div>

<style>
    .canvas-view{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .canvas-scene{
        border: 2px dashed grey;
        border-radius: 3px;
        background-color: var(--grey-light); 
/*         -webkit-mask: url("/canvas.svg") 50% 50% no-repeat;
		mask: url("/canvas.svg") 50% 50% no-repeat;  */
    }
</style>