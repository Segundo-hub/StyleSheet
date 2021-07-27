<script>
import CanvasDraw from "../../components/canvas/CanvasDraw.svelte";

</script>

<div id="canvas-view">
    <CanvasDraw />
</div>

<style>
#canvas-view{
    height: calc(100vh - var(--height-nav--top));
    padding: 1.5rem;
}
</style>