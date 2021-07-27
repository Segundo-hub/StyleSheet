<script>
import { onMount } from "svelte";
import Link from "svelte-routing/src/Link.svelte"; 
import { AuthContext } from "../../store";
export let isAuth, to;

onMount( () => {
    isAuth = AuthContext
})
</script>

{#if isAuth }
    <Link to="{to}">
        <slot></slot>
    </Link>
{/if}