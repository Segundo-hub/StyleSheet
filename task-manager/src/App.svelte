<script>

	import { Router } from "svelte-routing";
	import Navigation from "./components/layouts/Navigation.svelte";
	import ContextMenu from "./components/widgets/ContextMenu.svelte";
	import Routing from "./Routing.svelte";
	import { AuthContext } from "./store";

</script>

<Router url="">
	<Navigation/>
	<main id="main--app--wrapper" class="scroll--y" style="{ $AuthContext ? '' : '--width-nav--left: 0;'}">
		<Routing />
	</main>
	<ContextMenu/>
</Router>

<style type="text/scss">
#main--app--wrapper{
	max-height: calc(100vh - var(--height-nav--top));
	margin-left: var(--width-nav--left);
}
</style>
