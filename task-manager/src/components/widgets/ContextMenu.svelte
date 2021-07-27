<script>
const openMenu = (event) => {
    /* event.preventDefault(); */
    console.log(event)
}

let active = false
</script>

<svelte:window on:contextmenu="{ openMenu }" />

<div class="context-menu">

</div>

<style type='text/scss'>
.context-menu{
    display: block;
}
</style>
