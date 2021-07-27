<script>
import NavigationLeft from "./partials/NavigationLeft.svelte";
import NavigationTop from "./partials/NavigationTop.svelte";
import { onMount } from "svelte";
import { AuthContext } from "../../store";

</script>

<header class="main--header">
    <nav class="nav-container">
        <NavigationTop />
        {#if $AuthContext }
            <NavigationLeft />
        {/if}
    </nav>
</header>

<style type="text/scss">
.main--header{
    background-color: var(--grey-light);
}
</style>