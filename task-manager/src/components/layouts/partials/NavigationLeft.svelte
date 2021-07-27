<script>
    import { onMount } from "svelte";
    import Link from "svelte-routing/src/Link.svelte";
    let active;

    const handleClick = () => {
        active = !active;
        active == true 
            ? document.body.setAttribute('style', '--width-nav--left: 4rem; --opacity-nav: 0;')  
            : document.body.setAttribute('style', '') 
    }
    onMount( () => {
        
    })
</script>

<div id="nav---left" on:click="{ handleClick }">
    <div class="content">
        <Link class="nav-item" to="/my-way">My Way</Link>
        <Link class="nav-item" to="/tasks">Check Charts</Link>
        <Link class="nav-item" to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
    </div>
</div>

<style type="text/scss">
#nav---left{
    border-right: thin solid var(--orange-800);
    width: var(--width-nav--left);
    background-color: var(--grey-light);
    position: fixed;
    top: var(--height-nav--top);
    left: 0;
    padding: 1.5rem;
    transition: all .5s ease-out;
    bottom: 0;
    z-index: 2;
}
.content{
    opacity: var(--opacity-nav);
}
</style>