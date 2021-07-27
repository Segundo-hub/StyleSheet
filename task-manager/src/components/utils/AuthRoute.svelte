<script>
import Route from "svelte-routing/src/Route.svelte";
import { AuthContext } from "../../store";
export let path;

</script>

{#if $AuthContext }
    <Route path="{ path }">
        <slot></slot>
    </Route>
{/if}