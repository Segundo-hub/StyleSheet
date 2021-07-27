<script>
import { fly } from 'svelte/transition'
export let enable;
function fadeModal () {
    enable = !enable
}
</script>

{#if enable}
<div id="modal" transition:fly="{{y: 20, duration: 600 }}">
    <div class="modal-container">
        <div class="content">
            <div class="title-container">
            <slot name="title"></slot>
            </div>
            <hr class="separator">
            <div class="slot-container">
                <slot name="body"></slot>
            </div>
        </div>
        <button class="btn btn-info cs--btn-fade-modal" on:click="{fadeModal}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
            CLOSE
        </button>
    </div>
</div>
{/if}

<style type="text/scss">
.modal-container{
    width: 50%;
    height: 100%;
    border-radius: 2.5px;
    margin: auto;
    margin-top: calc(var(--height-nav--top) / 2);
    padding: 4rem 0;
}
.separator{
    border: none;
    width: 100%;
    border-bottom: 1px solid var(--grey-600);
}
.slot-container{
    height: 100%;
    padding: 1.5rem .5rem;
}
.content{
    border: 2px dashed var(--grey-600);
    background-color: var(--grey-light);
    border-radius: 3px;
    padding: 0 1rem;
}
.title-container{
    text-align: center;
    padding: 1.5rem 0;
}
.cs--btn-fade-modal{
    margin-top: 1rem;
    width: 10%;
}
</style>
