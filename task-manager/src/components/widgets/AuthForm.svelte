<script>
import { fly } from 'svelte/transition';
import brand_icon from './../../assets/images/brand-icon.png'
</script>

<section id="widget::form" transition:fly="{{y: 20, duration: 600 }}">
    <div class="modal-container">
        <div class="content">
            <div class="title-container">
                <img src={brand_icon} alt="cualquiera" width="30" style="margin: 0 10px"/>
                <slot name="title"></slot>
            </div>
            <hr class="separator">
            <div class="slot-container">
                <slot></slot>
            </div>
        </div>
        <div class="tail-container content">
            <slot name="bottom"></slot>
        </div>
    </div>
</section>

<style type="text/scss">
.modal-container{
    width: 80%;
    max-width: 600px;
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
.tail-container{
    margin-top: 1rem;
    padding: .5rem .5rem;
}
.content{
    background-color: var(--grey-light);
    border-radius: 3px;
    padding: .5rem 1rem;
}
.title-container{
    text-align: center;
    display: flex;
    padding: 1.5rem 0;
}
</style>
